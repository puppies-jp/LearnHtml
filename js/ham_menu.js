
const shade_layer = document.getElementById("ham-menu-shade")
const menu_cb = document.getElementById("menu-cb")
const hum_menu = document.getElementById("ham-menu")
const items = document.getElementsByClassName("hum-item")

function checkbox(){
    menu_cb.click()
}
shade_layer.onclick =  checkbox
hum_menu.onclick = checkbox

for (let step = 0; step < items.length; step++) {
    items[step].onclick = checkbox
  }
