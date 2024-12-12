function navigate(page) {
    if (page === 'home') {
        window.location.href = 'index.html';
    } else if (page === 'projects') {
        window.location.href = 'projects.html';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".project-tile");

    tiles.forEach((tile, index) => {
        // Определяем направление анимации
        if (index % 2 === 0) {
            tile.classList.add("animate-left");
        } else {
            tile.classList.add("animate-right");
        }

        // Добавляем задержку для анимации
        setTimeout(() => {
            tile.classList.add("visible");
        }, index * 200); // Задержка в 0.2 секунды на каждую плитку
    });
});
    

