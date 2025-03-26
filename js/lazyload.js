document.addEventListener("DOMContentLoaded", function () {
    const lazyBackgrounds = document.querySelectorAll(".lazy-bg");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let div = entry.target;
                div.style.backgroundImage = `url(${div.dataset.bg})`;
                div.classList.remove("lazy-bg");
                observer.unobserve(div);
            }
        });
    });

    lazyBackgrounds.forEach(div => observer.observe(div));
});