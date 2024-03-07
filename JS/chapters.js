



////sours box ////


let soursBox=document.querySelector('.sours-box')
let soursbt=document.querySelector('.sours-botm')
let soursListLbl=document.querySelector('.sours-lbe')
 
//hader ul
let haderul=document.querySelector('.header-ul')
let langLable=document.querySelector('.lang-lab')
let backBtom=document.querySelector('.back-btm')


let langaugeBtm=document.querySelector('.lang-btm')
let sittinglogo=document.querySelector('.fa-backward')


//sours list//
soursbt.addEventListener('click',()=>{
    soursbt.style=' opacity:0%'
    soursBox.style='right: 0px; transition: 0.5s; '
   backBtom.style='margin-right:180px'
haderul.style.display='none'


    // sours list mid screeen
    let smallsceen=window.matchMedia("(max-width:650px)")
    if(smallsceen.matches){
haderul.style.display='none'
    }
   
   })


//back btm soures///


   soursListLbl.addEventListener('click',()=>{
    
    soursbt.style=' opacity:100%'
    soursBox.style='right: -250px; transition: 0.5s; '
    backBtom.style='margin-right:0px'
    haderul.style.display='block'
     //mid screeen
    let smallsceen=window.matchMedia("(max-width:650px)")
    if(smallsceen.matches){
haderul.style='display:block'
    }
   })
   


///////////////////////**************///////////////////////////////////


///////langauge vars/////////

///////langauge/////////

let langBox=document.querySelector('.language')

let langauge=document.querySelector('.lan')
let listLang=document.querySelector('.language-list')
let lan=document.querySelectorAll('.language-list li')
let globlIcon =document.querySelector('.fa-globe')



//////lang Events//////////


langLable.onclick=function(){
    langaugeBtm.style='position: relative;top: 0; margin-left: 10px;'
 
    langBox.style='top:-350px;transition:0.6s;padding-top:10px;margin-top:60px;'
    
}

langaugeBtm.onclick=function(){

    langaugeBtm.style='position: relative;top: -70px; margin-left: 45px ;'
    langBox.style='top:0;transition:0.6s;margin-top: 90px;margin-right: 94px'

// big screen
    let madiascreen0=window.matchMedia("(max-width:950px)")
        if (madiascreen0.matches) {

            langaugeBtm.style='position: relative;top: -70px; margin-left: 45px ;'
    langBox.style='top:0;transition:0.6s;margin-top: 90px;margin-right: 94px'//'top:0;transition:0.6s;margin-top:85px;    width: 100px;height: 130px;margin-right: 94px'

    langLable.style='font-size:18px;    margin-bottom: 10px;    padding-bottom: 13px;'
    listLang.style='font-size:10px;margin-bottom: 10px'
        }

//midum screen
    let madiascreen=window.matchMedia("(max-width:650px)")
    if(madiascreen.matches){
        langaugeBtm.style='display:none'
        langBox.style='right: -39%;margin-top: 120px;top:-10px;padding-top:17px;padding-left:3px;    margin-right: 218px; width:97px;height: 160px'
   langLable.style='padding-top:20px;'
   listLang.style='font-size:14px'
   langLable.style='font-size:14px'

}
//small screen
let madiascreen2=window.matchMedia("(max-width:450px)")
if(madiascreen2.matches){

    langaugeBtm.style='display:none'
    langBox.style='right: -39%;margin-top: 120px;top:-10px;padding-top:17px;padding-left:3px;    margin-right: 170px; width:97px;height: 160px'
langLable.style='padding-top:20px;'
listLang.style='font-size:14px'
langLable.style='font-size:14px'
}

//very small screen
let madiascreen3=window.matchMedia("(max-width:360px)")
if(madiascreen3.matches){
    langaugeBtm.style='display:none'
    langBox.style='right: -39%;margin-top: 100px;top:-10px;padding-top:17px;padding-left:3px; margin-right: 120px;width:70px;height: 120px'
langLable.style='padding-top:20px;'
listLang.style='font-size:14px'
langLable.style='font-size:8px'
}
}


/*activeli.onclick=function(){

    activeli.style='margin-left:100px;position: relative;right: 20px;opacity: 0; transition: 0.5s;'
    satting.style=' right:0px;transition:0.6s;';

}*/



///////////sitting lang////////

//lang-events arbic////
