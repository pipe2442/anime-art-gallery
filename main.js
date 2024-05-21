document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-container img");
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlay-img");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const closeBtn = document.getElementById("close");
  let currentIndex = 0;

  function showOverlay(index) {
    currentIndex = index;
    overlayImg.src = images[currentIndex].src;
    overlay.style.display = "flex";
  }

  function hideOverlay() {
    overlay.style.display = "none";
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    overlayImg.src = images[currentIndex].src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    overlayImg.src = images[currentIndex].src;
  }

  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      showOverlay(index);
    });
  });

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay || event.target === closeBtn) {
      hideOverlay();
    }
  });

  nextBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    showNext();
  });

  prevBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    showPrev();
  });

  closeBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    hideOverlay();
  });
});
