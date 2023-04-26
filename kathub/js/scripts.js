import { projects } from "./data.js"

const toggleBtn = document.querySelector('[class="nav_toggle"]')
const menuList = document.querySelector('[class="nav_links"]')
const menuIcon = document.querySelector('.fa-solid')

const projectsDoc = document.querySelector('[class="all-projects"]')

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

for(let i = 0; i < projects.length; i++) {
    const fragment = document.createDocumentFragment()
    console.log('hey')
    const project = document.createElement('article')
    project.classList.add('project')

    project.innerHTML = /* HTML */ `
        <div class="project_img">
            <img src="${projects[i].image}" alt="">
        </div>
        <div class="project_info">
            <h4>${projects[i].title}</h4>
            <p>${projects[i].description}</p>
            <div class="project_info-links">
                <a href=${projects[i].sourceLink} class="project_link btn-link" target=”_blank”>Source Code</a>
                <a href=${projects[i].liveLink} class="project_link btn-link" target=”_blank”>Live Demo</a>
            </div>
        </div>
    `

    fragment.appendChild(project)
    projectsDoc.append(fragment)
}