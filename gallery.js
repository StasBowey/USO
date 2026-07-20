const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const thumbnails = document.querySelectorAll(".thumbnail");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Открытие изображения
thumbnails.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        modal.style.display = "flex";
        modalImg.src = img.dataset.full;
    });
});

// Закрытие
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Предыдущее фото
prevBtn.onclick = () => {
    currentIndex--;
    if (currentIndex < 0)
        currentIndex = thumbnails.length - 1;

    modalImg.src = thumbnails[currentIndex].dataset.full;
};

// Следующее фото
nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex >= thumbnails.length)
        currentIndex = 0;

    modalImg.src = thumbnails[currentIndex].dataset.full;
};

// Закрытие по клику вне изображения
modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

document.addEventListener("keydown", (e) => {
    if (modal.style.display !== "flex") return;

    if (e.key === "ArrowLeft") {
        prevBtn.click();
    }

    if (e.key === "ArrowRight") {
        nextBtn.click();
    }

    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});