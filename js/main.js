let currentPage = 0; // Página inicial (0 representa la primera página)
let currentQuestion = "default"; // Pregunta actual (default representa la pregunta inicial)

// Define las imágenes correspondientes a cada página
const pageImages = [
    "comic_pages/pag1.png",
    "comic_pages/pag2.png",
    "comic_pages/pag3_question.png",
    "comic_pages/pag3_choice1.png",
    "comic_pages/pag3_choice2.png"
    // Agrega más rutas de imagen para cada página adicional del cómic
];

let prevButton, nextButton;
let currentPageImage;

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Obtener los botones previo y siguiente del DOM
    prevButton = select('#prevPageButton');
    nextButton = select('#nextPageButton');

    // Agregar eventos de clic a los botones
    prevButton.mouseClicked(goToPreviousPage);
    nextButton.mouseClicked(goToNextPage);

    // Cargar la imagen de la página actual
    currentPageImage = loadImage(pageImages[currentPage]);
}

function draw() {
    background(220);

    switch (currentPage) {
        case 0:
        case 1:
            // Dibujar las páginas 1 y 2
            image(currentPageImage, 0, 0);
            break;
        case 2:
            // Dibujar la pregunta 3
            image(currentPageImage, 0, 0);
            break;
        case 3:
        case 4:
            // Dibujar las opciones 1 y 2 con fade in
            fadeInImage(currentPageImage, 0, 0);
            break;
        // Agrega más casos para cada página adicional del cómic
    }
}

function goToPreviousPage() {
    currentPage--;

    if (currentPage < 0) {
        currentPage = pageImages.length - 1; // Ir a la última página
    }

    // Cargar la nueva imagen de la página actual
    currentPageImage = loadImage(pageImages[currentPage]);
}

function goToNextPage() {
    currentPage++;

    if (currentPage >= pageImages.length) {
        currentPage = 0; // Regresar a la primera página
    }

    // Cargar la nueva imagen de la página actual
    currentPageImage = loadImage(pageImages[currentPage]);
}

function fadeInImage(image, x, y) {
    image.setAlpha(255);
    image.updatePixels();
    image(image, x, y);
}

// Inicializar la aplicación p5.js
new p5();
