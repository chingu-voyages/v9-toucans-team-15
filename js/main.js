// START OF SWITCH BTN LIGHT AND DARK
const logo =document.getElementById('logo');
const switchPin= document.querySelector('#switch-pin');
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
}

function lightTheme() {
    logo.style.backgroundColor="#000";
}