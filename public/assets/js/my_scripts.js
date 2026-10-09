window.addEventListener('scroll',reveal); 
window.addEventListener('resize',reveal);
window.addEventListener('pageshow',reveal);
window.addEventListener('load',reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');
    let window_height = window.innerHeight;
    

    // Inner pages have #page-hero; the home hero lives inside #intro.
    let hero = document.querySelector('#page-hero') || document.querySelector('#intro');
    if (hero !== null){
        // The hero stays pinned, so switch the header once the content slides up under it.
        let content = hero.nextElementSibling;
        let header_height = document.querySelector('header').offsetHeight;

        if(window.scrollY > 0 && content && content.getBoundingClientRect().top <= header_height){
            document.querySelector('header').classList.add('menu-fix-scroll');
            //console.log(hero_height);
        }else{
            document.querySelector('header').classList.remove('menu-fix-scroll');
        }
    } 

    reveals.forEach(element => {
        let reveal_top = element.getBoundingClientRect().top;
        let reveal_point = 150;

        if(reveal_top < window_height - reveal_point){
            element.classList.add('revealed');
        }else{
            element.classList.remove('revealed');
        }
        
    });
}


 setTimeout(() => {
    let elements = document.querySelectorAll('.fade-0');
    elements.forEach(
        (element)=>{
            element.classList.add('fadein');
        }
    );
    
 }, 800);
