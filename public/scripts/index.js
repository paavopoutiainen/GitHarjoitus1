window.onclick = (() => {
        console.log("we here")
        const element = document.createElement("p")
        element.innerHTML = "script hommailua"
        element.style.cssText = "background-color: blue"
        document.getElementById("app").appendChild(element)
    
})