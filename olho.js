var imagens_src = ["./fecha.gif", "./abre.gif", "./aberto.gif", "./fechado.gif"];
var olho1 = document.querySelector("#olho1");
var olho2 = document.querySelector("#olho2");
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

async function fecha1() {
    if( direcao == 0 ) {
        
	olho1.src = imagens_src[0];
        await setTimeout( async () => { olho1.src = imagens_src[3];direcao = 1; console.log(direcao);}, 150 );
        await setTimeout( async () => { await abre1(); }, 600 )
        
    }
}

async function abre1() {
    if( direcao == 1 ) {
        
	olho1.src = imagens_src[1];
        await setTimeout( async () => { olho1.src = imagens_src[2]; direcao = 0; console.log(direcao);}, 150 );
        
    }
}

async function fecha2() {
    if( direcao == 0 ) {
        
	olho2.src = imagens_src[0];
        await setTimeout( async () => { olho2.src = imagens_src[3];direcao = 1; console.log(direcao);}, 150 );
        await setTimeout( async () => { await abre2(); }, 600 )
        
    }
}

async function abre2() {
    if( direcao == 1 ) {
        
	olho2.src = imagens_src[1];
        await setTimeout( async () => { olho2.src = imagens_src[2]; direcao = 0; console.log(direcao);}, 150 );
        
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



//body.onclick = () => {
    //clearInterval(intervalo);
    //fecha();

//}

var num;

setInterval( () => {
    num = Math.floor(Math.random() * (5000 - 500) + 500);
    setTimeout(() => { fecha1(); fecha2(); }, num);
}, 1000)





