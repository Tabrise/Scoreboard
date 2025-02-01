function compterFaute(element){
    // Récupère l'élément sur lequel on va écouter les événements de clic
    const parentElement = document.getElementById(element.id);
    const childElements = parentElement.querySelectorAll('*');
    // Change la couleur de fond de chaque élément enfant en blanc
    
    childElements.forEach(childElement => {
        if(childElement.style.backgroundColor == 'white')
            childElement.style.backgroundColor = '#AD2B2B'
        else
            childElement.style.backgroundColor = "white"
    });
    balancePoint(parentElement);
}

function ajoutPoint(joueur){
    joueur=joueur.substring(2)
    const score = document.getElementById("total"+joueur);
    score.innerHTML++;
}

function retraitPoint(joueur){
    joueur=joueur.substring(4)
    const score = document.getElementById("total"+joueur);
    score.innerHTML != 0 ? score.innerHTML-- : 0;
}

function balancePoint(equipeFaute){
    const equipe = equipeFaute.id.substring(6);

    var x=0;

    for(var i = 1;i<=3;i++){//Verification des fautes
        const faute = document.getElementById("faute"+i+equipe)
        const fauteActive = faute.querySelectorAll('.toLeft')
        if(fauteActive[0].style.backgroundColor=="white"){
            x++;
        }
    }    

    if(x==3){// il y a bien 3 faute balance+repasse ne blanc
        if(equipe=="Litho")
            ajoutPoint("upVisiteur")
        else
            ajoutPoint("upLitho")
        
        for(var i=1;i<=3;i++){
            compterFaute(document.getElementById("faute"+i+equipe))
        }
    }    
}

function dragAndDrop(){
    
}