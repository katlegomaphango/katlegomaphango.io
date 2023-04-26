import { projects } from "./data.js"

const toggleBtn = document.querySelector('[class="nav_toggle"]')
const menuList = document.querySelector('[class="nav_links"]')
const menuIcon = document.querySelector('.fa-solid')

const menuHandler = () => {
    console.log('pressed')
    menuList.classList.toggle('nav_links-toggle')

    console.log(toggleBtn.firstChild)
    if(menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.replace("fa-bars", "fa-x")
    } else {
        menuIcon.classList.replace("fa-x", "fa-bars")
    }
}

toggleBtn.addEventListener('click', menuHandler)