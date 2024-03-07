
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
    haderul.style.display='flex'
     //mid screeen
    let smallsceen=window.matchMedia("(max-width:650px)")
    if(smallsceen.matches){
haderul.style='display:block'
    }
   })
   


///////////////////////**************///////////////////////////////////


///////langauge vars/////////





let langBox=document.querySelector('.language')
let langauge=document.querySelector('.lan')
let listLang=document.querySelector('.language-list')
let lan=document.querySelectorAll('.language-list li')
let globlIcon =document.querySelector('.fa-globe')




//////langauge list Events//////////



let madiascreen=window.matchMedia("(max-width:650px)")
if(madiascreen.matches){
    langBox.style='display:none'
}

langaugeBtm.onclick=function(){

    langaugeBtm.style='position: relative;top: -70px; margin-left: 45px;'
    langBox.style='top:0;transition:0.6s;margin-top: 70px  ;margin-rigth:84px;'


    //mid heihgt
let madiascreenht=window.matchMedia("(max-height:450px)")
if(madiascreenht.matches){

  
    langaugeBtm.style='position: relative;top: -70px; margin-left: 60px;'
    langBox.style='top:0;transition:0.6s;margin-top:50px; width: 80px; margin-rigth:185px;   height: 135px'
  listLang.style='font-size:10px'
    langLable.style='font-size:15px;'


}
//mid screen
    let madiascreen=window.matchMedia("(max-width:650px)")
    if(madiascreen.matches){
        langaugeBtm.style='display:none'
   langBox.style='right: -39%;margin-top: 100px;top:-10px;padding-top:17px;display:block;padding-left:3px;    margin-right: 240px; width:97px;height: 160px'
   listLang.style='font-size:14px'
   langLable.style='font-size:14px'
}
//small screen
let madiascreen2=window.matchMedia("(max-width:450px)")
if(madiascreen2.matches){
    
    langaugeBtm.style='display:none'
    langBox.style='right: -39%;margin-top: 100px;top:-10px;padding-top:17px;display:block;padding-left:3px; margin-right: 170px; width:97px;height: 160px'
    listLang.style='font-size:14px'
    langLable.style='font-size:14px'
}

//very small screen
let madiascreen3=window.matchMedia("(max-width:360px)")
if(madiascreen3.matches){
    
    langaugeBtm.style='display:none'
    langBox.style='right: -39%;margin-top: 90px;top:-10px;padding-top:17px;display:block;padding-left:3px;    margin-right: 134px; width:70px;height: 140px'
    listLang.style='font-size:14px'
    langLable.style='font-size:8px'
}
}


// back btm for languages list


langLable.onclick=function(){
    langaugeBtm.style='position: relative;top: 0; margin-left: 10px;'
    langaugeBtm.style.display='block'
    langBox.style='top:-350px;transition:0.6s;'
    let madiascreen=window.matchMedia("(max-width:650px)")
    if(madiascreen.matches){
    langBox.style='display:none;transition:0.5s'
    }
}



/////////// lang////////
