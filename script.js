const arrayWords=document.getElementById("heading");
arrayWords.addEventListener("click",(e)=>{
    const get=e.target.innerHTML;
    myMusic(get);
    buttonAnimation(get);
})
arrayWords.addEventListener("keydown",(e)=>{
    const words=e.key;
    myMusic(words);
    buttonAnimation(words);
})
const myMusic=(key)=>{
    const music=new Audio(`musics/${key}.mp3`);
    console.log(music)
    music.play();
}
const buttonAnimation=(key)=>{
    const active=document.querySelector(`.${key}`);
    active.classList.add("keypress");
    setTimeout(()=>{
        active.classList.remove("keypress");
    },100);
}









