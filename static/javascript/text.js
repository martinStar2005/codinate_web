const textElement = document.getElementById("text-change");
const languageButton = document.querySelector(".choices")
const navigation = document.querySelector("nav")
const languageButtonI = navigation.querySelector("i")
const footer = document.querySelector("footer")
const iconChat = footer.querySelector("i")
const cross = document.getElementById("cross")
const chatBox = document.getElementById("chat-box")
const chatContainer = document.querySelector('#chats');

const words = ["CREATE", "IMPROVE", "DEVELOP", "ELEVATE"];
let index = 0;

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}


iconChat.addEventListener("mouseover", function () {
    iconChat.style.color = "white"
    iconChat.style.fontSize = "3.5rem"
})
iconChat.addEventListener("mouseout", function () {
    iconChat.style.color = "#00d2ff"
    iconChat.style.fontSize = "3rem"
})

iconChat.addEventListener("click", function () {
    iconChat.style.animation = "hideChatIcon 1s forwards"
    chatBox.style.animation = "showChatBox 1s forwards 0.5s"
})

cross.addEventListener("click", function () {
    chatBox.style.animation = "hideChatBox 1s forwards"
    iconChat.style.animation = "showChatIcon 1s forwards"
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

const textarea = document.querySelector("textarea");

        textarea.addEventListener('input', function() {
            // Split the content by whitespace to get words
            const words = textarea.value.trim().split(/\s+/);

            // Check if the number of words exceeds 10
            if (words.length > 10) {
                // If there are more than 10 words, get the first 10 words
                const firstTenWords = words.slice(0, 10).join(' ');

                // Update the textarea value with the first 10 words and add a newline
                textarea.value = firstTenWords + '\n';
            }
        });

scrollToBottom()