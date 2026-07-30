const navFunction = () => {
    const button = document.getElementById("menu-btn")
    const menu = document.getElementById("menu")
    if(!button) return
    button.addEventListener("click", () => {
        const hero = document.getElementById("hero-section")
        console.log("clicked")
        if(menu) {
            menu.classList.toggle("hidden")
            menu.classList.toggle("flex")
            menu.classList.toggle("pointer-events-none")
            if (hero) {
                hero.style.marginTop = hero.style.marginTop ? "" : "16rem"
            } else {
                console.log('navFunction: #hero-section not found at click time')
            }
        }
        const currentSrc = button.getAttribute('src')
        if (currentSrc.includes("Group 5.svg")) {
            button.setAttribute('src', "/public/Images/cancel_svg.svg")
        } else {
            button.setAttribute('src', "/public/Images/Group 5.svg")
        }
    })
}