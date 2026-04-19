function toggleChat() {
    let chatbot = document.getElementById("chatbot-container");
    chatbot.style.display = chatbot.style.display === "none" ? "flex" : "none";
}

async function sendMessage() {
    let userMessage = document.getElementById("userInput").value.trim();
    if (!userMessage) return;

    let chatbox = document.getElementById("chatbox");

    // Add user message
    let userMessageDiv = document.createElement("div");
    userMessageDiv.className = "message-container user";
    userMessageDiv.innerHTML = `<div class="user-message">${userMessage}</div>`;
    chatbox.appendChild(userMessageDiv);

    document.getElementById("userInput").value = "";

    // Add a loading message for bot response
    let botMessageDiv = document.createElement("div");
    botMessageDiv.className = "message-container bot";
    botMessageDiv.innerHTML = `<div class="bot-message">Thinking...</div>`;
    chatbox.appendChild(botMessageDiv);

    try {
        let response = await fetch("/chatbot/query/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCSRFToken(),
            },
            body: JSON.stringify({ query: userMessage })
        });

        let data = await response.json();
        let botResponse = data.response.trim();

        // Remove asterisks (*) and extra spaces
        botResponse = botResponse.replace(/\*/g, "").trim();

        // Convert response into bullet points (assuming it's sentence-based)
        let bulletPoints = botResponse.split(". ").map(point => {
            return point.trim() ? `<li>${point}.</li>` : ""; // Avoid empty list items
        }).join("");

        // Update bot message with formatted bullet points
        botMessageDiv.innerHTML = `<div class="bot-message"><ul>${bulletPoints}</ul></div>`;
    } catch (error) {
        botMessageDiv.innerHTML = `<div class="bot-message">Sorry, something went wrong.</div>`;
    }
}

function getCSRFToken() {
    let cookieValue = null;
    if (document.cookie) {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith("csrftoken=")) {
                cookieValue = cookie.substring("csrftoken=".length, cookie.length);
                break;
            }
        }
    }
    return cookieValue;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
