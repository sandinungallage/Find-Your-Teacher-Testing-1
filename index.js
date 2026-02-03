document.addEventListener("DOMContentLoaded", function () {

    /* 🌟 FADE IN BODY */
    document.body.style.opacity = 0;
    setTimeout(() => { document.body.style.opacity = 1; }, 300);


    /* 💬 WELCOME MESSAGE SWAP */
    setTimeout(() => {
        document.getElementById('message-01').style.opacity = 0;
        document.getElementById('message-02').style.opacity = 1;

        const img = document.getElementById('welcome-img') || document.getElementById('image-div-of-firstdiv');
        if (img) {
            img.style.opacity = 1;
            img.style.transform = 'translateX(0%)';
        }
    }, 4000);


    /* 🟢 REGISTER BUTTON FADE IN */
    setTimeout(() => {
        const btn = document.getElementById('registerbtn');
        if (btn) btn.style.opacity = 1;
    }, 1000);


    /* 📊 COUNTING CARDS SLIDE IN */
    setTimeout(() => {
        ['card1', 'card2', 'card3'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0%)';
            }
        });
    }, 1000);


    /* 🔢 NUMBER COUNT-UP ANIMATION */
    let count = 0;
    let maxCount = 500;

    function counter() {
        if (count > maxCount) return;
        count++;

        const c1 = document.getElementById("card1-details");
        const c2 = document.getElementById("card2-details");
        const c3 = document.getElementById("card3-details");

        if (c1) c1.innerHTML = "<b>" + count + "+</b><br>Teachers";
        if (c2) c2.innerHTML = "<b>" + count + "+</b><br>Institutions";
        if (c3) c3.innerHTML = "<b>" + count + "+</b><br>Students";

        // Smooth slowdown effect
        let speed = Math.max(20, 200 - count);
        setTimeout(counter, speed);
    }

    counter();


    /* 💭 ROTATING QUOTES */
    const quotes = document.querySelectorAll('.quote');
    let currentQuote = 0;

    function displayQuote() {
        quotes.forEach((q, i) => q.style.opacity = i === currentQuote ? 1 : 0);
        currentQuote = (currentQuote + 1) % quotes.length;
    }

    if (quotes.length > 0) {
        displayQuote();
        setInterval(displayQuote, 5000);
    }

});


/* 🌙 DARK MODE TOGGLE */
function toggleDarkMode() {
    const darkTheme = document.getElementById('dark-theme');
    darkTheme.disabled = !darkTheme.disabled;

    // Save preference
    localStorage.setItem("darkMode", darkTheme.disabled ? "off" : "on");
}


/* 🌙 LOAD SAVED THEME */
window.addEventListener("DOMContentLoaded", () => {
    const darkTheme = document.getElementById('dark-theme');
    if (localStorage.getItem("darkMode") === "on") {
        darkTheme.disabled = false;
    }
});