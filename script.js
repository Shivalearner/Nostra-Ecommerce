var offer = document.querySelector(".offer")
document.getElementById("offer-close").addEventListener("click",
    function(){
        offer.style.display="none"
    }
)

// side navbar script

var sideNavMenu=document.getElementById("side-navbar-activate")
var sideNav=document.querySelector(".side-navbar")

sideNavMenu.addEventListener("click",
    function(){
        sideNav.style.marginLeft="0px"
    }
)
var sideNav=document.querySelector(".side-navbar")
document.getElementById("side-navbar-close").addEventListener("click",
    function(){
        sideNav.style.marginLeft="-60%"        
    }
)


// Slider script.js

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton= document.getElementById("slider-right-activate")
var sliderimg = document.querySelector(".slider-img-container")
var slidermargin=0

console.log(sliderleftbutton)
sliderrightbutton.addEventListener("click",
    function (){
        slidermargin=slidermargin+100

        if(slidermargin>200){
            slidermargin=0
            sliderimg.style.marginLeft=0;
        }
        else{
            sliderimg.style.marginLeft="-"+slidermargin+"vw";
        }
    }
)

sliderleftbutton.addEventListener("click",
    function(){
        if(slidermargin==0){
            slidermargin=slidermargin+200
            sliderimg.style.marginLeft="-"+slidermargin+"vw";
            
        }
        else{
            slidermargin=slidermargin-100
            sliderimg.style.marginLeft="-"+slidermargin+"vw";

        }
    }
)


