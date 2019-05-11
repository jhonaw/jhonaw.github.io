var imagens_src = ["./fecha.gif", "./abre.gif", "./aberto.gif", "./fechado.gif"];
var olho = document.querySelector("#olho");
var body = document.querySelector("body");
var direcao = 0;


//async function trocaImagem() {
    //return new Promise( (resolve, reject) => {
        //if( direcao == 0 ) {
            //console.log(direcao);
            //setTimeout( () => { resolve(imagens_src[0]) }, 400 );
            //direcao = 1;
       // } else if ( direcao == 1 ) {
            //setTimeout( () => { resolve(imagens_src[1]) }, 400 );
            //console.log(direcao);
            //direcao = 2;
            
        //} else if(direcao == 2){
	    //console.log(direcao);
            //setTimeout( () => { resolve(imagens_src[2]) }, 400 );
            //clearInterval(intervalo);
	    //direcao = 0;
        //}
    //} )
        
//}

function fecha() {
    if( direcao == 0 ) {
        console.log(direcao);
	olho.src = imagens_src[0];
        setTimeout( () => { olho.src = imagens_src[3]; }, 300 );
        direcao = 1;
    }
}

function abre() {
    if( direcao == 1 ) {
        console.log(direcao);
	olho.src = imagens_src[1];
        setTimeout( () => { olho.src = imagens_src[2]; }, 300 );
        direcao = 1;
    }
}


var intervalo;

//async function executa() {
    //clearInterval(intervalo);
    //intervalo = await setInterval(async () => {
        //await trocaImagem()
            //.then( response => {
                //console.log(response);
                //olho.src = response;
            //} )
    //}, 300 );

//}



body.onclick = () => {
    //clearInterval(intervalo);
    fecha();
    abre();

}


