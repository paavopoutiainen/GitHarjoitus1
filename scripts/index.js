window.onscroll(() => () => {
    if(window.pageYOffset > 30) {
        const element = document.createElement("div")
        element.innerHTML("scritpihommailua")
        element.style.cssText = "background-color: blue"
        document.getElementById("app").appendChild(element)
    }
})