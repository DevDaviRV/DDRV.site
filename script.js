//Criar Modal para Button Contate-me

let teste = "ola mundo"

function abrirContatos() {
  console.log(teste);
}

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


// carrousel techs

const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button4");

		let current = 0;
		let prev = 4;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			if (next == 5) {
				next = 0;
			}

			if (prev == -1) {
				prev = 4;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}


























































                  //Teste efeito digitaçao sem API

                              // new TypeIt("#testjs", { 
            //     lifeLike: true, 
            //     speed: 50,
            //     waitUntilVisible: true
            // })
            //     .type("S")
            //     .pause(0)
            //     .type("e")
            //     .pause(0)
            //     .type("r")
            //     .pause(0)
            //     .type("v")
            //     .pause(0)
            //     .type("i")
            //     .pause(0)
            //     .type("ç")
            //     .pause(0)
            //     .type("o")
            //     .pause(0)
            //     .type("s")
            //     .pause(0)
            //     .type(" ")
            //     .pause(0)
            //     .type("q")
            //     .pause(0)
            //     .type("u")
            //     .pause(0)
            //     .type("e")
            //     .pause(0)
            //     .type(" ")
            //     .pause(0)
            //     .type("o")
            //     .pause(0)
            //     .type("f")
            //     .pause(0)
            //     .type("e")
            //     .pause(0)
            //     .type("r")
            //     .pause(0)
            //     .type("e")
            //     .pause(0)
            //     .type("ç")
            //     .pause(0)
            //     .type("o")
            //     .pause(0)
            //     .type(":")
            //     .go();





