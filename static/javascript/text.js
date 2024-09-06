
const words = ["CREATE", "IMPROVE", "DEVELOP", "ELEVATE"];
let index = 0;
const textElement = document.getElementById("text-change");
const languageButton = document.querySelector(".choices")
const navigation = document.querySelector("nav")
const languageButtonI = navigation.querySelector("i")
const footer = document.querySelector("footer")
const iconChat = footer.querySelector("i")

iconChat.addEventListener("mouseover", function () {
    iconChat.style.color = "white"
    iconChat.style.fontSize = "3.5rem"
})
iconChat.addEventListener("mouseout", function () {
    iconChat.style.color = "#00d2ff"
    iconChat.style.fontSize = "3rem"
})



const languageButtonHandler = () => {
    languageButton.style.animation = "languageAnimation 0.4s forwards"
    languageButtonI.style.opacity = "0"
    languageButton.style.display = "flex"
}

const languageListRemoveHandler = () => {
    languageButton.style.animation = "languageAnimationRemove 0.4s forwards"
    languageButtonI.style.opacity = "1"
}
languageButtonI.addEventListener("click", languageButtonHandler)
languageButton.addEventListener("click", languageListRemoveHandler)



const type = (word) => {
    textElement.style.width = "0"
    textElement.innerText = ""
    let letterIndex = 0

    const interval = setInterval(() => {
        textElement.innerText += word[letterIndex]
        letterIndex ++

        if (letterIndex === word.length){
            clearInterval(interval)
            setTimeout(() => {
                textElement.style.animation = "fade-out 0.5s forwards"
                setTimeout(() => {
                    textElement.style.animation = "none"
                    textElement.innerText= ""
                    index = (index + 1) % words.length
                    type(words[index])

                }, 300)
            }, 2000)
        }

    }, 70)
}
type(words[index])