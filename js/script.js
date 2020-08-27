const animateElement = document.querySelectorAll('[data-anime]')
const animationClass = 'animation'
const textFadein = document.querySelector('#textAnimation')

function textAnimation() {

    textFadein.classList.add(animationClass)

}

function animeScroll() {

    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
    
    animateElement.forEach(elem => {

        if((windowTop) > elem.offsetTop){

            elem.classList.add(animationClass)
            console.log('algo')

        }

    })

}

window.onscroll = animeScroll

window.onload = textAnimation