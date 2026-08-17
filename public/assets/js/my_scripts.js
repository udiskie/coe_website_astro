window.addEventListener('scroll',reveal); 

function reveal(){
    let reveals = document.querySelectorAll('.reveal');
    let window_height = window.innerHeight;
    

    if (document.querySelector('#page-hero') !== null){
        let hero_height = document.querySelector('#page-hero').getBoundingClientRect().bottom;

        if(scrollY > hero_height){
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
