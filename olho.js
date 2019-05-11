var imagens_src = ["./fecha.gif", "./abre.gif"];
var olho = document.querySelector("#olho");
var body = document.querySelector("body");
var direcao = 0;


async function trocaImagem() {
    return new Promise( (resolve, reject) => {
        if( direcao == 0 ) {
            
            setTimeout( () => { resolve(imagens_src[0]) }, 400 );
        } else if ( direcao == 1 ) {
            setTimeout( () => { resolve(imagens_src[1]) }, 400 );
        } else {
            reject('Erro');
        }
    } )
        
}




async function executa() {
    await setInterval(async () => {
        await trocaImagem()
            .then( response => {
                console.log(response);
                olho.src = response;
                if(direcao == 0) {
                    direcao = 1;
                } else {
                    direcao = 0;
                }
            } )
    }, 300 );

}



body.onclick = () => {
    executa();

}


