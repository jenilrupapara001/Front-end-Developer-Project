const text = " DESIGN STUDIO AWARD WINNING";
const circularText = document.getElementById("circular-text");

function createCircularText() {
    circularText.innerHTML = ''; // Clear existing content

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.textContent = text[i];
        const rotation = (i * 360) / text.length;
        span.style.transform = `rotate(${rotation}deg)`;
        circularText.appendChild(span);
    }
}

// Initial creation
createCircularText();

// Handle resize for responsiveness
window.addEventListener('resize', createCircularText);

window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
    },100); // 2000ms = 2 seconds delay
});