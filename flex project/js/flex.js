bar_btn=  document.getElementById("bar-btn")
navlink = document.querySelector(".navlink")
s1 = document.getElementById("search-click")
w1 = document.querySelector(".white-search-div")
bag = document.querySelector(".ic4")
shop = document.querySelector(".shopping-div-wrap") 
person_div = document.querySelector (".ic2")
v1 = document.querySelector (".vegera-form")
a = document.getElementById ("aa1")
cs1 =document.getElementById ("cs")
i1 = document.getElementById ("ic")
btn1=document.getElementsByClassName('btn-1.0')
btn2=document.getElementsByClassName('btn-2.0')
btn3=document.getElementsByClassName('btn-3.0')
bt111 = document.querySelector('.btn-111');
bt112 = document.querySelector('.btn-112');
bt113 = document.querySelector('.btn-113');


bar_btn.addEventListener("click",function()
{
    navlink.style.left="0%"
    navlink.style.transition= ".3s";
})

s1.addEventListener("click",function(e)
{
    e.preventDefault()
    w1.style.top = "0%"
    w1.style.transition = ".3s"
    w1.style.zIndex = "5"
})

i1.addEventListener ("click",function(e)
{
    e.preventDefault()
    w1.style.display ="none"
})

bag.addEventListener("click",function(e)
{
    e.preventDefault()
    shop.style.right="0%"
    shop.style.transition =".3s"
})

cs1.addEventListener("click",function(e)
{
    e.preventDefault()
    shop.style.right= "-30%"
    shop.style.transition = ".3s"
})

person_div.addEventListener("click",function(e)
{
    e.preventDefault()
    v1.style.display = "block"
}
)

a.addEventListener("click",function(e)
{
    e.preventDefault()
    v1.style.display = "none"
})

function toggleButtons(state) 
{
    
    if (!bt112.initialDisplay) bt112.initialDisplay = window.getComputedStyle(bt112).display;
    if (!bt113.initialDisplay) bt113.initialDisplay = window.getComputedStyle(bt113).display;
    if (!bt111.initialDisplay) bt111.initialDisplay = window.getComputedStyle(bt111).display;

    bt111.style.display = "none";
    bt112.style.display = "none";
    bt113.style.display = "none";

    if (state === 1) {
        bt111.style.display = bt111.initialDisplay;
    } else if (state === 2) {
        bt112.style.display = "flex";
    } else if (state === 3) {
        bt113.style.display = "flex";
    }
}
