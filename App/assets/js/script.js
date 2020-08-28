const animateElement = document.querySelectorAll('[data-anime]')
const animationClass = 'animation'
const textFadein = document.querySelector('#textAnimation')

function textAnimation() {

    textFadein.classList.add(animationClass)

}



function animeScroll() {
    
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
    
    const airPlaneStartFly = () => document.querySelector('.air-plane').classList.add('start-fly')
    const resetAirPlaneFly = () => document.querySelector('.air-plane').classList.remove('start-fly')
    const airPlanTop = document.querySelector('.air-plane').offsetTop 
    const showAirPlane = windowTop > airPlanTop

    showAirPlane ? airPlaneStartFly() : resetAirPlaneFly()

    animateElement.forEach(elem => {
        
        if((windowTop) > elem.offsetTop){
            
            
            elem.classList.add(animationClass)
            
        }else {
            
            elem.classList.remove(animationClass)
                 
        }
      
        
    })

}

window.onscroll = animeScroll

window.onload = textAnimation