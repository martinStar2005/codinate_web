const words = ["CREATE", "IMPROVE", "DEVELOP", "ELEVATE"];
let index = 0;
const textElement = document.querySelector("span");

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

                }, 500)
            }, 3000)
        }

    }, 70)
}
type(words[index])