let bar = document.querySelector(".bar")
let main = document.querySelector(".main-menu")
let cl1 = document.querySelector(".close")
console.log (cl1)
let c1 = document.querySelector(".fa-close")

bar.addEventListener("click",function()
{
    main.style.transform = "translate(0%,0%)"
    c1.style.display = "block"
    cl1.style.display ="block"
})

cl1.addEventListener("click",function()
{
    main.style.transform = "translate(0%,-100%)"
    c1.style.display = "none"
})