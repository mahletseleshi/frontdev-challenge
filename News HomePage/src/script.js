const menu = document.getElementById("menu")
const close = document.getElementById("close")
const menuList = document.getElementById("menu-list")
const home= document.getElementById("home")


menu.addEventListener("click", () =>{
menuList.classList.toggle("active:block")
menuList.classList.toggle("hidden")
close.classList.toggle("hidden")
})


close.addEventListener("click",() =>{
menuList.classList.toggle("active:block")
menuList.classList.toggle("hidden")
close.classList.toggle("hidden")

})

