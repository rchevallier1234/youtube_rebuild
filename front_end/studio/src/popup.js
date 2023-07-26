function afficherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.add("active")
}

function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.remove("active")
}

export function initAddEventListenerPopup() {
    let importbt = document.getElementById("import");
    let popupBackground = document.querySelector(".popupBackground")
    importbt.addEventListener("click", () => {
        afficherPopup()
    })
    popupBackground.addEventListener("click", (event) => {
        if (event.target === popupBackground) {
            cacherPopup()
        }
    })
}
