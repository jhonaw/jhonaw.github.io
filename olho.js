var imagens_src = ["./olho1.png", "./olho2.png", "./olho3.png", "./olho4.png"];
var olho = document.createElement("img");
var body = document.querySelector("body");
body.appendChild(olho);
//olho.src = imagens_src[];
var direcao = 0;


async function trocaImagem() {
    if(direcao == 1) {
        abreOlho();
    } else if( direcao == 0 ) {
        if(olho.src == '') {
            olho.src = imagens_src[0];
        } else {
            fechaOlho();
        }
        
    }
        
}

function abreOlho() {

    switch(olho.src) {
        case "file:///C:/Users/anony/Desktop/olho/olho4.png": 
            olho.src = imagens_src[2];
            console.log(olho.src);
            break;
        case "file:///C:/Users/anony/Desktop/olho/olho3.png": 
            olho.src = imagens_src[1];
            console.log(olho.src);
            break;
        case "file:///C:/Users/anony/Desktop/olho/olho2.png": 
            olho.src = imagens_src[0];
            console.log(olho.src);
            direcao = 0;
            clearInterval(animacao);
            break;
    }  
}

function fechaOlho() {

    switch(olho.src) {
        case "file:///C:/Users/anony/Desktop/olho/olho1.png": 
            olho.src = imagens_src[1];
            console.log(olho.src);
            break;
        case "file:///C:/Users/anony/Desktop/olho/olho2.png": 
            olho.src = imagens_src[2];
            console.log(olho.src);
            break;
        case "file:///C:/Users/anony/Desktop/olho/olho3.png": 
            olho.src = imagens_src[3];
            console.log(olho.src);
            direcao = 1;
            break;

    }

}
var animacao = setInterval(trocaImagem, 100);

body.onclick = () => {
    animacao = setInterval(trocaImagem, 100)
}

olho.onclick = () => {
    clearInterval(animacao);
}
