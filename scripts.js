const menuItems = document.querySelectorAll(".menu-items")
const menu = document.querySelectorAll(".menu-headers-head")
let windowWidth = window.innerWidth

if (window.innerWidth < 900) {
    document.getElementById("meat").parentElement.parentElement.classList.remove("menu-dark")
}

function displayItems(event) {
    const id = event.target.dataset.heading
    const menuToOpen = document.getElementById(id)
    const chevron = document.getElementById(id).parentElement.previousElementSibling.querySelector("i")

    if (!menuToOpen.parentElement.classList.contains("open") && window.innerWidth <= 900) {
        menuToOpen.parentElement.classList.add("open")
        chevron.style.transform = "rotate(90deg)"
        chevron.style.color = "var(--color-persian-orange)"
        menuToOpen.parentElement.previousElementSibling.querySelector("h4").style.color = "var(--color-persian-orange)"

    } else {
        menuToOpen.parentElement.classList.remove("open")
        chevron.style.transform = "rotate(0)"
        chevron.style.color = "inherit"
        menuToOpen.parentElement.previousElementSibling.querySelector("h4").style.color = "inherit"
    }
}

function screenChange() {
    // console.log(window.innerWidth)
    if (window.innerWidth <= 900 && !document.getElementById("meat").classList.contains("open")) {
        document.getElementById("meat").parentElement.parentElement.classList.remove("menu-dark")
    } else {
        document.getElementById("meat").parentElement.parentElement.classList.add("menu-dark")
    }
}

for (item of menu) {
    item.addEventListener("click", displayItems)
}

window.addEventListener("resize", screenChange)
