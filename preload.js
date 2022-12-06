
//pre load atualiza baseado no tempo de carregamento da pagina

const main = document.querySelector(".preload-box");

window.addEventListener("load", function () {
    main.style.display = "none";
    

})





//antigo preload baseado em tempo setado em codigo

// const preLoad = document.getElementsByClassName('preload-box')[0]
// const content = document.getElementsByClassName('contentP')[0]
// function loading() {
//     content.style.display = 'none'
//     preLoad.style.display = 'block';

//     setTimeout(() => {
//         preLoad.style.display ='none';
//         content.style.display = 'block'
//     }, 1);
    
// } 


