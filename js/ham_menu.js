
const menu_cb = document.getElementById("menu-cb")
const hum_menu = document.getElementById("ham-menu")
const items = document.getElementsByClassName("hum-item")

function checkbox(){
    menu_cb.click()
}

function clickLink(str){
    menu_cb.click()
    window.location.href= str
}

hum_menu.onclick = checkbox

for (let step = 0; step < items.length; step++) {
    items[step].onclick = checkbox
  }
