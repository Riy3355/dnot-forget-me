
////Satting box ////


let satting=document.querySelector('.satting-Box')
let sittingCon=document.querySelectorAll(".satting-content")
let haderul=document.querySelectorAll('.hader-ul')
let langLable=document.querySelector('.lang-lab')
let astory=document.querySelector('.active4')
let howSupport=document.querySelector('.active3')
let news=document.querySelector('.active2')

let activeli=document.querySelector('.active')
let sittinglogo=document.querySelector('.fa-backward')


///////langauge/////////

let lang=document.querySelector('.language')

let langauge=document.querySelector('.lan')
let listLang=document.querySelector('.language-list')
let lan=document.querySelectorAll('.language-list li')
let globlIcon =document.querySelector('.fa-globe')



//////Satting Events//////////



let madiascreen=window.matchMedia("(max-width:650px)")
if(madiascreen.matches){
    lang.style='display:none'
}
activeli.onclick=function(){

    activeli.style='position: relative;top: -70px; margin-left: 45px;'
    lang.style='top:0;transition:0.6s;margin-top: 70px'
  

    //mid heihgt
let madiascreenht=window.matchMedia("(max-height:450px)")
if(madiascreenht.matches){

  
    activeli.style='position: relative;top: -70px; margin-left: 60px;'
    lang.style='top:0;transition:0.6s;margin-top:65px; width: 80px; margin-rigth:185px;   height: 135px'
  listLang.style='font-size:10px'
    langLable.style='font-size:15px;'//margin-bottom: 0px;    padding-bottom: 6px'


}
//mid screen
    let madiascreen=window.matchMedia("(max-width:650px)")
    if(madiascreen.matches){
        activeli.style='display:none'
   lang.style='right: -39%;margin-top: 160px;top:-10px;padding-top:17px;display:block;padding-left:3px;    margin-right: 240px; width:97px;height: 160px'
   listLang.style='font-size:14px'
   langLable.style='font-size:14px'
}
//small screen
let madiascreen2=window.matchMedia("(max-width:450px)")
if(madiascreen2.matches){
    
    activeli.style='display:none'
    lang.style='right: -39%;margin-top: 160px;top:-10px;padding-top:17px;display:block;padding-left:3px; margin-right: 170px; width:97px;height: 160px'
    listLang.style='font-size:14px'
    langLable.style='font-size:14px'
}

//very small screen
let madiascreen3=window.matchMedia("(max-width:360px)")
if(madiascreen3.matches){
    
    activeli.style='display:none'
    lang.style='right: -39%;margin-top: 165px;top:-10px;padding-top:17px;display:block;padding-left:3px;    margin-right: 134px; width:70px;height: 140px'
    listLang.style='font-size:14px'
    langLable.style='font-size:8px'
}
}



langLable.onclick=function(){
    activeli.style='position: relative;top: 0; margin-left: 10px;'
    globlIcon.style.display='block'
    lang.style='top:-350px;transition:0.6s;'
    let madiascreen=window.matchMedia("(max-width:650px)")
    if(madiascreen.matches){
    lang.style='display:none;transition:0.5s'
    }
}

/*activeli.onclick=function(){

    activeli.style='margin-left:100px;position: relative;right: 20px;opacity: 0; transition: 0.5s;'
    satting.style=' right:0px;transition:0.6s;';

}*/



///////////sitting lang////////

//lang-events arbic////
