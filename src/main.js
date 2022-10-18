import "./css/index.css"

const ccBackgroundColor1 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBackgroundColor2 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")


function setCardType(type) {
    const colors = {
        visa: ["#436d99", "#2d57f2"],
        mastercard: ["#df6f29", "#c69347"],
        default: ["black", "gray"]
    }

    ccBackgroundColor1.setAttribute("fill", colors[type][0])
    ccBackgroundColor2.setAttribute("fill", colors[type][1])
    ccLogo.setAttribute("src", `cc-${type}.svg`)
}

// setCardType("default")

globalThis.setCardType = setCardType