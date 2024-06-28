const download = document.querySelector('.resume');
const iconmenu = document.querySelector(".icon");
const menuopen = document.querySelector(".menu-open");
const mainclose = document.querySelector(".main-close");
const textChange =document.querySelector(".text-change")

//download file
download.addEventListener('click',()=>{
    window.open("https://drive.google.com/drive/folders/1Vo158w-g_qlwjjOXDWUk5YSuT7nq4owd?usp=sharing");
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
        textChange.textContent = "front-End developer";
    },3000)
    setTimeout(()=>{
        textChange.textContent = "Web Designer";
    },6000)
    setTimeout(()=>{
        textChange.textContent = "WordPress Developer";
    },9000)
}

textload();
setInterval(textload, 12000);

function toggleNightMode() {
    var body = document.body;
    var icon = document.getElementById('night-mode-icon');
    body.classList.toggle('night-mode');
    if (body.classList.contains('night-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}


// function sendEmail() {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "",
//         Password : "",
//         To : '',
//         From : document.getElementById("email").value,
//         Subject : 'New Contact Form Submission',
//         Body : "Name: " + document.getElementById("name").value
//               + "<br> Email: " + document.getElementById("email").value
//               + "<br> Message: " + document.getElementById("message").value
//     }).then(
//         message => alert("Message Sent Succesfully")
//     );
// }