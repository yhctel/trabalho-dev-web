// efeito de scroll fofinho
document.addEventListener("DOMContentLoaded", () => {
    // seleciona todos os itens da página que têm a classe "scroll-item"
    const scrollItems = document.querySelectorAll(".scroll-item");

    // função de verificar a visibilidade dos itens durante o scroll
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

// faz o carrossel
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;  // índice do item atual que está visível
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const carousel = document.querySelector('.carousel');

    function showItem() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    // função para exibir o próximo item
    function nextItem() {
        index = (index + 1) % totalItems;
        showItem();
    }

    // função para exibir o item anterior
    function prevItem() {
        index = (index - 1 + totalItems) % totalItems;
        showItem();
    }

    // evento de clique nos botões de navegação do carrossel para avançar ou voltar
    document.querySelector('.carousel-control.next').addEventListener('click', nextItem);
    document.querySelector('.carousel-control.prev').addEventListener('click', prevItem);

    showItem();
});

// vai dar um destaque no item atual do carrossel
let currentIndex = 0; 

function updateActiveItem() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active'); 
        } else {
            item.classList.remove('active');
        }
    });
}

// função para mover o carrossel
function moveCarousel(direction) {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    updateActiveItem();
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.carousel-control.next').addEventListener('click', () => moveCarousel(1)); 
document.querySelector('.carousel-control.prev').addEventListener('click', () => moveCarousel(-1)); 