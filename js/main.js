// START OF SWITCH BTN LIGHT AND DARK
document.querySelector('#switch').addEventListener('click',function(){
    if (this.style.alignItems=="" || this.style.alignItems=="flex-start"){
        this.style.alignItems="flex-end";
    }
    else {
        this.style.alignItems="flex-start";
    }
});