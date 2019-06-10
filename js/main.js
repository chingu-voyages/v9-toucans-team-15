// START OF SWITCH BTN LIGHT AND DARK
const switchPin= document.querySelector('#switch-pin');
document.querySelector('#switch').addEventListener('click',function(){
    if (this.style.alignItems=="" || this.style.alignItems=="flex-start"){
        this.style.alignItems="flex-end";
        this.style.borderColor="#fff";
        this.style.backgroundColor="#000";
        switchPin.style.backgroundColor="#fff";
    }
    else {
        this.style.alignItems="flex-start";
        this.style.borderColor="#000";
        this.style.backgroundColor="#fff";
        switchPin.style.backgroundColor="#000";
        console.log(switchPin.style.backgroundColor);
    }
});
