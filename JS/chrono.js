function timer(chrono) {
    const min = document.getElementById('min' + chrono).value === '' ? 0 : document.getElementById('min' + chrono).value
    const sec = document.getElementById('sec' + chrono).value === '' ? 0 : document.getElementById('sec' + chrono).value
    let temps = parseInt((min * 60) + sec)

    if (temps === 0)
        window.alert("Rentrer une valeur")
    else {
        const [affichage, tmp] = setAffichage(chrono)
        document.getElementById('button' + chrono).innerHTML = "ARRÊTER"
        document.getElementById('button' + chrono).onclick = () => {
            stopInerval(interval, tmp, chrono)
        }
        const interval = setInterval(() => {
            let pause = document.getElementById('chrono' + chrono).getAttribute("pause") === "true" ? true : false
            let minRest = parseInt(temps / 60, 10)
            let secRest = parseInt(temps % 60, 10)

            minRest = minRest < 10 ? "0" + minRest : minRest
            secRest = secRest < 10 ? "0" + secRest : secRest

            if (temps < 0)
                stopInerval(interval, tmp, chrono)
            else if (!pause) {
                affichage.innerText = `${minRest}:${secRest}`
                temps--
            }
        }, 1000)
    }
}

function setAffichage(chrono) {
    const affichage = document.createElement("p")
    affichage.classList.add('run')
    const tmp = document.getElementById('chrono' + chrono).innerHTML
    document.getElementById('chrono' + chrono).innerHTML = ''
    document.getElementById('chrono' + chrono).appendChild(affichage)
    document.getElementById('chrono' + chrono).classList.add('pause')
    document.getElementById('chrono' + chrono).onclick = () => {
        var pause = document.getElementById('chrono' + chrono).getAttribute("pause") === null ? false : document.getElementById('chrono' + chrono).getAttribute("pause") === "true" ? true : false

        if (!pause) {
            document.getElementById('chrono' + chrono).setAttribute("pause", "true")
            document.getElementById('chrono' + chrono).classList.remove('pause')
            document.getElementById('chrono' + chrono).classList.add('play')
        }
        else {
            document.getElementById('chrono' + chrono).setAttribute("pause", "false")
            document.getElementById('chrono' + chrono).classList.remove('play')
            document.getElementById('chrono' + chrono).classList.add('pause')
        }
    }

    return [affichage, tmp]
}

function stopInerval(interval, tmp, chrono) {
    document.getElementById('button' + chrono).innerHTML = "LANCER"
    document.getElementById('button' + chrono).onclick = () => {
        timer(chrono)
    }
    document.getElementById('chrono' + chrono).classList.remove('play')
    document.getElementById('chrono' + chrono).classList.remove('pause')
    document.getElementById('chrono' + chrono).onclick=''
    document.getElementById('chrono' + chrono).innerHTML = tmp
    clearInterval(interval)
}