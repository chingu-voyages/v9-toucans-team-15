// START OF SWITCH BTN LIGHT AND DARK
const logo =document.getElementById('logo');
const navigation=document.getElementById('navigation');
const verticalText=document.querySelector('.vertical-text');
const switchPin= document.querySelector('#switch-pin');
const section2=document.getElementById('section-2');
const next= document.getElementById('next');
const collection=document.getElementById('collection');
// const slogan = document.querySelector('.slogan');
document.querySelector('#switch').addEventListener('click',function(){
    if (this.style.alignItems=="" || this.style.alignItems=="flex-start"){
        this.style.alignItems="flex-end";
        this.style.borderColor="#fff";
        this.style.backgroundColor="#000";
        switchPin.style.backgroundColor="#fff";
        darkTheme();
    }
    else {
        this.style.alignItems="flex-start";
        this.style.borderColor="#000";
        this.style.backgroundColor="#fff";
        switchPin.style.backgroundColor="#000";
        console.log(switchPin.style.backgroundColor);
        lightTheme();
    }
});


function darkTheme() {
    logo.style.backgroundColor="#55575b";
    navigation.style.backgroundColor="#2d2f34";
    verticalText.style.background="#55575b";
    section2.style.background="#55575b";
    next.style.background="#fff";
    collection.style.background="#2d2f34"
    // slogan.style.background="#36393f";

}

function lightTheme() {
    logo.style.backgroundColor="#000";
    navigation.style.backgroundColor="#fff";
    verticalText.style.background="#000";
    section2.style.background="#eac7ff";
    next.style.background="#cdcdcd";
    collection.style.background="#111";
    // slogan.style.background='#eac7ff';
}