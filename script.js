
//efeito digitação 

new TypeIt("#sec3-h3", {
  strings: "",
  speed: 50,
  waitUntilVisible: true,
}).go();

new TypeIt("#testjs", {
  strings: "",
  speed: 50,
  waitUntilVisible: true,
}).go();

new TypeIt(".headline-p", {
    strings: "",
    speed: 20,
    waitUntilVisible: true,
  }).go();




// carrousel techs
const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button4");

		let current = 0;
		let prev = 6;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 6 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			if (next == 7) {
				next = 0;
			}

			if (prev == -1) {
				prev = 4;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}


    //mudar para modo Light
    let body = document.getElementById('principal');
    let head = document.getElementById('head');
    let sobremim = document.getElementById('section2');
    let imgSobre = document.getElementById('img-gif');
    let projets = document.getElementById('section3');
    let cardsHab = document.getElementsByClassName('header')[0];
    let cardsHab2 = document.getElementsByClassName('header')[1];
    let cardsHab3 = document.getElementsByClassName('header')[2];
    let text1 = document.getElementsByClassName('tt')[0];
    let text2 = document.getElementsByClassName('tt')[1];
    let text3 = document.getElementsByClassName('tt')[2];
    let text4 = document.getElementsByClassName('tt')[3];
    let text5 = document.getElementsByClassName('tt')[4];
    let text6 = document.getElementsByClassName('tt')[5];
    let text7 = document.getElementsByClassName('tt')[6];
    let text8 = document.getElementsByClassName('tt')[7];
    let text9 = document.getElementsByClassName('tt')[8];
    let text10 = document.getElementsByClassName('tt')[9];
    let text11 = document.getElementsByClassName('tt')[10];
    let text12 = document.getElementsByClassName('tt')[11];
    let text13 = document.getElementsByClassName('tt')[12];
    let text14 = document.getElementsByClassName('tt')[13];
    let text15 = document.getElementsByClassName('tt')[14];
    let text16 = document.getElementsByClassName('tt')[15];
    let text17 = document.getElementsByClassName('tt')[16];
    let text18 = document.getElementsByClassName('tt')[17];
    let text19 = document.getElementsByClassName('tt')[18];
    let text20 = document.getElementsByClassName('tt')[19];
    let text21 = document.getElementsByClassName('tt')[20];
    let text22 = document.getElementsByClassName('tt')[21];
    let text23 = document.getElementsByClassName('tt')[22];
    let text24 = document.getElementsByClassName('tt')[23];
    let text25 = document.getElementsByClassName('tt')[24];
    let text26 = document.getElementsByClassName('tt')[25];
    let text27 = document.getElementsByClassName('tt')[26];
    let text28 = document.getElementsByClassName('tt')[27];
    let text29 = document.getElementsByClassName('tt')[28];
    let text30 = document.getElementsByClassName('tt')[29];
    let text31 = document.getElementsByClassName('tt')[30];
    let text32 = document.getElementsByClassName('tt')[31];
    let text33 = document.getElementsByClassName('tt')[32];
    let text34 = document.getElementsByClassName('tt')[33];
    let text35 = document.getElementsByClassName('tt')[34];
    let text36 = document.getElementsByClassName('tt')[35];
    let text37 = document.getElementsByClassName('tt')[36];
    let text38 = document.getElementsByClassName('tt')[37];
    let text39 = document.getElementsByClassName('tt')[38];
    let text40 = document.getElementsByClassName('tt')[39];
    let span = document.getElementsByClassName('');
    let nav = document.getElementById('navMenu');
    //input
    let inp = document.getElementById('dn')
    let inpForm1 = document.getElementsByClassName('caret')[0];
    let inpForm2 = document.getElementsByClassName('caret')[1];
    let inpForm3 = document.getElementsByClassName('caret')[2];
    let inpForm4 = document.getElementsByClassName('caret')[3];
    
    let mmm = document.getElementsByClassName('pcard')[0];
    let mmm2 = document.getElementsByClassName('pcard')[1];
    let mmm3 = document.getElementsByClassName('pcard')[2];
    let cardbg1 = document.getElementsByClassName('card')[0];
    let cardbg2 = document.getElementsByClassName('card')[1];
    let cardbg3 = document.getElementsByClassName('card')[2];
    let textserv = document.getElementById('text-service');
    let sec5 = document.getElementById('section5');
    let boxtable = document.getElementById('box-table');
    let bgModal = document.getElementById('modalContato');
    let cardfaq1 = document.getElementsByClassName('card-faq')[0];
    let cardfaq2 = document.getElementsByClassName('card-faq')[1];
    let cardfaq3 = document.getElementsByClassName('card-faq')[2];
    let cardfaq4 = document.getElementsByClassName('card-faq')[3];

    function changeBg1() {
        if(inp.checked == true){
            body.style.background = '#eaf4f4'
            // body.style.background = 'linear-gradient(90deg, rgba(88,175,255,1) 0%, rgba(0,241,255,1) 90%)'
            head.style.border = 'none'
            head.style.background = 'rgb(3,228,255)'
            head.style.background = 'linear-gradient(80deg, rgba(3,228,255,0.969625350140056) 0%, rgba(181,9,255,1) 83%)'
           
            sobremim.style.background = 'white'
            projets.style.background = 'white'

            imgSobre.style.background = '#eaf4f4'
            imgSobre.style.boxShadow = '0.5rem 0.5rem 0.5rem 0.5rem #9900ff'
            
            cardsHab.style.background = 'white'
            cardsHab2.style.background = 'white'
            cardsHab3.style.background = 'white'

            sec5.style.background = 'none'
            boxtable.style.background = 'white'
            cardfaq1.style.borderColor = '#b509ff'
            cardfaq2.style.borderColor = '#b509ff'
            cardfaq2.style.borderTop = 'none'
            cardfaq2.style.borderBottom = 'none'
            cardfaq3.style.borderColor = '#b509ff'
            cardfaq3.style.borderBottom = 'none'
            cardfaq4.style.borderColor = '#b509ff'

            text1.style.color = 'white'
            text2.style.color = 'white'
            text3.style.color = 'white'
            text4.style.color = 'white'
            text5.style.color = 'white'
            text6.style.color = 'black'
            text7.style.color = 'black'
            text7.style.fontWeight = 'bold'
            text8.style.color = 'black'
            text9.style.color = 'black'
            text9.style.fontWeight = 'bold'
            text10.style.color = 'black'
            text11.style.color = 'black'
            text12.style.color = 'black'
            text13.style.color = 'black'
            text14.style.color = 'black'
            text15.style.color = 'black'
            text16.style.color = 'black'
            text17.style.color = 'black'
            text18.style.color = 'black'
            text19.style.color = 'black'
            text20.style.color = 'black'
            text21.style.color = 'black'
                       
            text22.style.color = 'black'
            text23.style.color = 'black'
            text24.style.color = 'black'

            text25.style.color = 'black'
            text26.style.color = 'black'
            text27.style.color = 'black'
            text28.style.color = 'black'
            text29.style.color = 'black'
            text30.style.color = 'black'
            text31.style.color = 'black'
            text32.style.color = 'black'
            text33.style.color = 'black'
            text34.style.color = 'black'
            text35.style.color = 'black'
            text36.style.color = 'black'
            text37.style.color = 'black'
            text38.style.color = 'black'

            inpForm1.style.backgroundColor = 'white'
            inpForm2.style.backgroundColor = 'white'
            inpForm3.style.backgroundColor = 'white'
            inpForm4.style.backgroundColor = 'white'

            mmm.style.color = 'black'
            mmm2.style.color = 'black'
            mmm3.style.color = 'black'
            cardbg1.style.backgroundColor = 'white'
            cardbg2.style.backgroundColor = 'white'
            cardbg3.style.backgroundColor = 'white'
            textserv.style.background = 'white'


            bgModal.style.background = 'white'
            bgModal.style.color = 'black'



        }else{
            body.style.background = ''

            head.style.background = ''

            sobremim.style.background = ''
            projets.style.background = ''
            imgSobre.style.background = ''

            cardsHab.style.background = ''
            cardsHab2.style.background = ''
            cardsHab3.style.background = ''

            sec5.style.background = ''
            boxtable.style.background = ''
            cardfaq1.style.borderColor = ''
            cardfaq2.style.borderColor = ''
            cardfaq3.style.borderColor = ''
            cardfaq4.style.borderColor = ''

            text1.style.color = ''
            text2.style.color = ''
            text3.style.color = ''
            text4.style.color = ''
            text5.style.color = ''
            text6.style.color = ''
            text7.style.color = ''
            text7.style.fontWeight = ''
            text8.style.color = ''
            text9.style.color = ''
            text9.style.fontWeight = ''
            text10.style.color = ''
            text11.style.color = ''
            text12.style.color = ''
            text13.style.color = ''
            text14.style.color = ''
            text15.style.color = ''
            text16.style.color = ''
            text17.style.color = ''
            text18.style.color = ''
            text19.style.color = ''
            text20.style.color = ''
            text21.style.color = ''
            text22.style.color = ''
            text23.style.color = ''
            text24.style.color = ''
            text25.style.color = ''
            text26.style.color = ''
            text27.style.color = ''
            text28.style.color = ''
            text29.style.color = ''
            text30.style.color = ''
            text31.style.color = ''
            text32.style.color = ''
            text33.style.color = ''
            text34.style.color = ''
            text35.style.color = ''
            text36.style.color = ''
            text37.style.color = ''
            text38.style.color = ''

            inpForm1.style.background = ''
            inpForm2.style.backgroundColor = ''
            inpForm3.style.backgroundColor = ''
            inpForm4.style.backgroundColor = ''

            mmm.style.color = ''
            mmm2.style.color = ''
            mmm3.style.color = ''
            cardbg1.style.background = ''
            cardbg2.style.background = ''
            cardbg3.style.background = ''
            textserv.style.background = '#09090B'

            bgModal.style.background = ''
            bgModal.style.color = ''
        }
    }


// Ver posição do elemtento na pagina (ex: TOP)
    // var p = document.querySelector('#sec3-h2');
    // posicoes = p.getBoundingClientRect();
    // console.log(posicoes);
 
    let inputNav = document.getElementById('check')
    let modalcontent = document.getElementById('modalContato')
function openModal() {
    if(inputNav.checked == true){
        modalcontent.style.right = '0'
    }else{
        modalcontent.style.right = '-100%'
    }
    
}

    let closemodal = document.getElementsByClassName('cm')[0];
    let disableInp = document.getElementById('check')
    function closeModal() {
        disableInp.removeAttribute('checked');
        modalcontent.style.right = '-100%'
        
    }



// FAQ PERGUNTAS FREQUENTES

const opentable1 = document.getElementById('opentable1');
const opentable2 = document.getElementById('opentable2');
const opentable3 = document.getElementById('opentable3');
const opentable4 = document.getElementById('opentable4');
const cardContent = document.getElementsByClassName('card-faq')[0];
const cardContent2 = document.getElementsByClassName('card-faq')[1];
const cardContent3 = document.getElementsByClassName('card-faq')[2];
const cardContent4 = document.getElementsByClassName('card-faq')[3];

function abrirTable() {
    if(opentable1.checked == true){
        cardContent.style.height = '8.5rem'  
    }else{cardContent.style.height = ''}

    if(opentable2.checked == true){
        cardContent2.style.height = '8.5rem'
        cardContent.style.height= ''
        opentable1.checked = false;

    }else{cardContent2.style.height = ''}

    if(opentable3.checked == true) {
        cardContent3.style.height = '8.5rem'
    }else{cardContent3.style.height = ''}

    if(opentable4.checked == true) {
        cardContent4.style.height = '8.5rem'
    }else{cardContent4.style.height = ''}
    if(window.innerWidth <500 && opentable3.checked){
        cardContent3.style.height = '14rem'
    }
    if(window.innerWidth <500 && opentable2.checked){
        cardContent2.style.height = '14rem'
    }
    if(window.innerWidth <500 && opentable4.checked){
        cardContent4.style.height = '10rem'
    }
    if(window.innerWidth <400 && opentable3.checked){
        cardContent3.style.height = '16rem'
    }
}
