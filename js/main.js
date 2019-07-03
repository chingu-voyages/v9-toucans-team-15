// START OF SWITCH BTN LIGHT AND DARK
const logo =document.getElementById('logo');
const navigation=document.getElementById('navigation');
const splash=document.getElementById('splash');
const switchPin= document.querySelector('#switch-pin');
const section2=document.getElementById('section-2');
const next= document.getElementById('next');
const collection=document.getElementById('collection');
const links=document.querySelectorAll('a');
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
    splash.style.backgroundColor="#55575b";
    section2.style.background="#55575b";
    next.style.background="#fff";
    collection.style.background="#2d2f34";
    navigation.style.color="#fff";
    // console.log(document.querySelectorAll('#nav li a'));
    for(x=0;x<links.length; x++){
        links[x].className = "light-links";
    }
    document.querySelector('.explain p').className = "light-links";
    // transitioning effect
    logo.style.transition="all 1s";
    navigation.style.transition="all 1s";
    splash.style.transition="all 1s";
    section2.style.transition="all 1s";
    next.style.transition="all 1s";
    collection.style.transition="all 1s";
    navigation.style.transition="all 1s";
    links.style.transition="all 1s";
    // End of transitioning effect

    // document.querySelector('#nav li a').classList.remove("");
    // navLinks.style.color="#fff";
    // console.log(navLinks);
    // slogan.style.background="#36393f";
}

function lightTheme() {
    logo.style.backgroundColor="#000";
    navigation.style.backgroundColor="#fff";
    splash.style.background="#000";
    section2.style.background="#eac7ff";
    next.style.background="#cdcdcd";
    collection.style.background="#111";
    navigation.style.color="#000";
    for(x=0;x<links.length; x++){
        links[x].className = "dark-links";
    }
    document.querySelector('.explain p').className = "dark-links";

    // document.querySelector('#nav li a').className = "";
    // document.querySelector('#nav li a').classList.remove("");
    // slogan.style.background='#eac7ff';
}