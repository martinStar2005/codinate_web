const words = ["CREATE", "IMPROVE", "DEVELOP", "ELEVATE"];
let index = 0;
const textElement = document.querySelector("span");

const type = (word) => {
    textElement.style.width = "0"
    textElement.textContent = ""
    let letterIndex = 0

    const interval = setInterval(() => {
        textElement.textContent += word[letterIndex]
        letterIndex ++

        if (letterIndex === word.length){
            clearInterval(interval)
            setTimeout(() => {
                textElement.style.animation = "fade-out 0.5s forwards"
                setTimeout(() => {
                    textElement.style.animation = "none"
                    textElement.textContent = ""
                    index = (index + 1) % words.length
                    type(words[index])

                }, 500)
            }, 3000)
        }

    }, 300)
}
type(words[index])