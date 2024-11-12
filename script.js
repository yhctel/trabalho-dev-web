document.addEventListener("DOMContentLoaded", () => {
    const scrollItems = document.querySelectorAll(".scroll-item");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.85; 

        scrollItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});