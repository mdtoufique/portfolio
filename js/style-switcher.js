const togle=document.querySelector(".style-switcher-toggler");
togle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("op");
    setTimeout(delayedFunction=>
        {
            if(document.querySelector(".style-switcher").classList.contains("op"))
            {
                document.querySelector(".style-switcher").classList.toggle("op");
            }
        }, 4000);
});



const alt_color=document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alt_color.forEach((style)=>
    {
        if(color===style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

const dn =document.querySelector(".day-night");
dn.addEventListener("click",()=>{
    dn.querySelector("i").classList.toggle("fa-sun");
    dn.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark"))
    {
        dn.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dn.querySelector("i").classList.add("fa-moon");
    }
})


// const sec_color = document.querySelectorAll(".lin");

// function set_active(id) {
//     sec_color.forEach((item) => {
//         if (id === item.getAttribute("title")) {
            
//             item.querySelector('a').classList.add("active");
//         } else {
//             item.querySelector('a').classList.remove("active");
//         }
//     });
// }
// function set_nav() {
//     const aside = document.querySelector('.aside');
//     const mainContent = document.querySelector('.main-content');
//     const navToggler = document.querySelector('.nav-toggler');
//     const asideLeft = parseInt(window.getComputedStyle(aside).getPropertyValue('left'));
//     if (asideLeft === 0) {
//         aside.style.left = '-300px';
//         mainContent.style.paddingLeft = '0';
//         navToggler.style.left = '0'; // Adjust .nav-toggler left position
//     } else if (asideLeft === -300) {
//         aside.style.left = '0';
//         mainContent.style.paddingLeft = '300px';
//         navToggler.style.left = '0px'; // Adjust .nav-toggler left position
//     }
// }
