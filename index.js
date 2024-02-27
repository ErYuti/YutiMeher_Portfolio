const download = document.querySelector('.resume');
const iconmenu = document.querySelector(".icon");
const menuopen = document.querySelector(".menu-open");
const mainclose = document.querySelector(".main-close");
const textChange =document.querySelector(".text-change")

//download file
download.addEventListener('click',()=>{
    window.open("https://drive.google.com/drive/folders/1Vo158w-g_qlwjjOXDWUk5YSuT7nq4owd?usp=drive_link");
})
//display menu
iconmenu.addEventListener('click', () => {
    menuopen.style.display = "flex"
})
//hidden menu
mainclose.addEventListener('click', () => {
    menuopen.style.display = "none"
})

//change text
const textload = ()=>{
    setTimeout(()=>{
        textChange.textContent = "Web Developer";
    },0)
    setTimeout(()=>{
        textChange.textContent = "front-end developer";
    },3000)
    setTimeout(()=>{
        textChange.textContent = "Web Designer";
    },6000)
    setTimeout(()=>{
        textChange.textContent = "WordPress Developer";
    },9000)
}

textload();
setInterval(textload, 12000)