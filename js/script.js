var typed =new Typed(".typing",{
    strings:["","Web Designer","Fullstack Web developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



const   nav = document.querySelector(".nav"),
        navList=nav.querySelectorAll("li"),
        totalNavList=navList.length,
        allSection=document.querySelectorAll(".section"),
        totalSection=allSection.length;
// console.log(navList);
for(let i=0;i<totalNavList;i++)
{
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function()
    {
        //console.log("3 ",this);
        removeBackSection();
        for(let j=0;j<totalNavList;j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                //console.log(j)
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth<1200)
        {
            asideSectionTogglerBtn()
        }
    })
    
}
function removeBackSection()
{
    for(let j=0;j<totalNavList;j++)
    {
        allSection[j].classList.remove("back-section");
    }
}
function addBackSection(num)
{
    
    allSection[num].classList.add("back-section");
    
}
function showSection(element)
{
    //console.log(5,element);
    for(let j=0;j<totalSection;j++)
    {
        allSection[j].classList.remove("active");
    }
    const href=element.getAttribute("href");
    const target=element.getAttribute("href").split("#")[1];

    //console.log(111,href)
    document.querySelector("#"+target).classList.add("active");
}
function updateNav(element)
{
    for(let j=0;j<totalNavList;j++)
    {
        navList[j].querySelector("a").classList.remove("active");
        const target=element.getAttribute("href").split("#")[1];
        if(target===navList[j].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[j].querySelector("a").classList.add("active");
        }
    }
    
}


const navTogglerBtn=document.querySelector(".nav-toggler"),
    aside=document.querySelector(".aside");
navTogglerBtn.addEventListener("click",()=>
{
    asideSectionTogglerBtn();
});
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0;i<totalSection;i++)
    {
        allSection[i].classList.toggle("open")
    }

}

document.querySelector(".hire-me").addEventListener("click",function()
{
    const sectionIndex=this.getAttribute("data-section-index");
    console.log(this)
    showSection(this);
    updateNav(this)    
    removeBackSection();
    addBackSection(sectionIndex);
})