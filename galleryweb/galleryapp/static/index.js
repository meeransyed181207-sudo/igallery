const gallery = [
    { src: "avngers.jpg" , caption: "AVENGERS ENDGAME POSTER" },
    { src: " 24.jpg", caption: " 24 MOVIE POSTER " },
    { src: " ambikapathy.jpg", caption: "AMBIKAPATHY MOVIE POSTER" },
    { src: " attagasam.jpg", caption: "ATTAGASAM MOVIE POSTER" },
    { src: "leo.avif ", caption: " LEO MOVIE POSTER" },
    { src: "spiderman.jpeg ", caption: " SPIDER MAN MOVIE POSTER" },
];

let index = 0;

function updateGallery() {
    document.getElementById("galleryImage").src = gallery[index].src;
    document.getElementById("caption").textContent = gallery[index].caption;
}

function nextImage() {
    index++;
    if (index >= gallery.length) {
        index = 0;
    }
    updateGallery();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = gallery.length - 1;
    }
    updateGallery();
}