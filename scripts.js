const menuItems = document.querySelectorAll(".menu-items")
const menu = document.querySelectorAll(".menu-headers-head")
let windowWidth = window.innerWidth

if (window.innerWidth < 900) {
    document.getElementById("meat").parentElement.classList.remove("menu-dark")
}

function displayItems(event) {
    const id = event.target.dataset.heading
    const menuToOpen = document.getElementById(id)
    const chevron = document.getElementById(id).previousElementSibling.querySelector("i")

    if (!menuToOpen.classList.contains("open") && window.innerWidth <= 900) {
        menuToOpen.classList.add("open")
        chevron.style.transform = "rotate(90deg)"
        chevron.style.color = "var(--color-persian-orange)"
        menuToOpen.previousElementSibling.querySelector("h4").style.color = "var(--color-persian-orange)"

    } else {
        menuToOpen.classList.remove("open")
        chevron.style.transform = "rotate(0)"
        chevron.style.color = "inherit"
        menuToOpen.previousElementSibling.querySelector("h4").style.color = "inherit"
    }

    if (id === "meat" && menuToOpen.classList.contains("open") && window.innerWidth <= 900) {
        menuToOpen.parentElement.classList.add("menu-dark")
    } else if (id === "meat" && window.innerWidth <= 900) {
        document.getElementById("meat").parentElement.classList.remove("menu-dark")
    }
}

function screenChange() {
    // console.log(window.innerWidth)
    if (window.innerWidth <= 900 && !document.getElementById("meat").classList.contains("open")) {
        document.getElementById("meat").parentElement.classList.remove("menu-dark")
    } else {
        document.getElementById("meat").parentElement.classList.add("menu-dark")
    }
}

for (item of menu) {
    item.addEventListener("click", displayItems)
}

window.addEventListener("resize", screenChange)
