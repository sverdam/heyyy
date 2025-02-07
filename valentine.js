function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.zIndex = Math.floor(Math.random() * 2) - 1;

    heart.innerHTML = `
        <img src="https://emojitool.com/img/apple/ios-13.3/growing-heart-1426.png"
        // style="transform:scale(0.3);">
    `;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
        console.log("Heart deleted");
    }, 4000);
}

setInterval(createHeart, 300);