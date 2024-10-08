document.getElementById('send').onclick = async function() {
    const userMessage = document.getElementById('input').value;
    document.getElementById('chat').innerHTML += `<div>User: ${userMessage}</div>`;
    document.getElementById('input').value = '';

    const options = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "llama-3.1-sonar-small-128k-online",
            messages: [
                { role: "user", content: userMessage }
            ],
            max_tokens: 150,
            temperature: 0.2,
            return_citations: false,
            return_images: false,
            stream: false
        })
    };

    try {
        const response = await fetch('https://api.perplexity.ai/chat/completions', options);
        const data = await response.json();
        const aiMessage = data.choices[0].message.content;
        document.getElementById('chat').innerHTML += `<div>AI: ${aiMessage}</div>`;
        document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
    } catch (error) {
        console.error(error);
    }
};

document.getElementById("quizz-btn").addEventListener('click', () => {
    window.location.href = 'quizz/index.html';
})