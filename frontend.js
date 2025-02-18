/ frontend.js (JavaScript per il frontend)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("textForm");
    const input = document.getElementById("userText");
    const result = document.getElementById("result");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const text = input.value;
        
        const response = await fetch("https://toxicity-1er2.onrender.com/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });

        const data = await response.json();
        result.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    });
});
