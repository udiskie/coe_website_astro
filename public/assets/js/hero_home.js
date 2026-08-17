
let montanas = document.querySelectorAll('.montana');
let intro_effect = document.querySelectorAll('.intro-texto');

function slide_out_effect (){
    montanas[0].classList.remove('slide-down');
    intro_effect[0].classList.remove('intro-texto-slide');
}

function slide_in_effect (){
    montanas[0].classList.add('slide-down');
    intro_effect[0].classList.add('intro-texto-slide');
}


document.addEventListener('DOMContentLoaded', () =>
    setTimeout(() => {


        slide_in_effect();
        
        /*
        setTimeout(()=>{
                intro_effect[0].classList.add('intro-texto-zindex');
            }
        ,200);
        */

    }, 1000)
);



window.addEventListener('scroll',(event)=>{
    if(window.scrollY > intro_effect[0].getBoundingClientRect().top/3){
        slide_out_effect();
        
    }else if(window.scrollY == 0){
        slide_in_effect();
    }
}); 