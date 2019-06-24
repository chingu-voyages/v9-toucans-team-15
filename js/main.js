// START OF SWITCH BTN LIGHT AND DARK
const logo =document.getElementById('logo');
const navigation=document.getElementById('navigation');
const verticalText=document.querySelector('.vertical-text');
const switchPin= document.querySelector('#switch-pin');
const slogan = document.querySelector('.slogan');
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
    navigation.style.backgroundColor="#2f3136";
    verticalText.style.background="#55575b";
    slogan.style.background="#36393f";

}

function lightTheme() {
    logo.style.backgroundColor="#000";
    navigation.style.backgroundColor="#fff";
    verticalText.style.background="#000";
    slogan.style.background='#eac7ff';
}