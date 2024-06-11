// Venter på at hele DOM træet er indlæst, før koden køres
document.addEventListener("DOMContentLoaded", function () {
  let containerOffset, containerWidth, startOffsetX;

  // DOM-elementer
  const handle = document.querySelector(".comparison-slider__handle");
  const beforeImage = document.querySelector(".comparison-slider__image--left");
  const afterImage = document.querySelector(".comparison-slider__image--right");
  const slider = document.querySelector(".comparison__slider");
  const cursor = document.querySelector(".cursor__animation");
  const handCursor = document.querySelector(".hand__animation"); // Hand cursor til mobile
  const pulsatingCircle = document.querySelector(".pulsating__circle");

  // Funktionen til at opdatere sliderens position
  //  Opdaterer positionen af slideren og billedets clip-position via xPos (hvor billedet bliver "beskåret").
  function updateSlider(xPos) {
    handle.style.left = `${xPos}px`;
    beforeImage.style.clip = `rect(0, ${xPos}px, 400px, 0)`;
    afterImage.style.clip = `rect(0, 100%, 400px, ${xPos}px)`;
  }

  // Funktionen til at "resize" vinduet når der ændres størrelse på device/skærm
  function handleResize() {
    containerOffset = slider.offsetLeft;
    containerWidth = slider.offsetWidth;
    updateSlider(containerWidth / 2);
  }

  // Debounce funktion til at begrænse hvor ofte handleResize bliver brugt
  function debounce(func, delay) {
    let debounceTimer;
    return function (...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Funktion til at starte trække handlingen
  function startDragging(e) {
    e.preventDefault(); // Forhindrer tekstvalg
    document.body.classList.add("no__select");

    // Skjuler cursor animationen og den pulserende cirkel
    if (cursor) {
      cursor.classList.add("cursor__hidden");
    }
    if (handCursor) {
      handCursor.classList.add("cursor__hidden");
    }
    if (pulsatingCircle) {
      pulsatingCircle.classList.add("cursor__hidden"); // Bruger bare samme "hidden" class til cirklen
    }

    const startX = e.pageX || e.touches[0].pageX;
    const handleLeft = handle.getBoundingClientRect().left;
    const sliderLeft = slider.getBoundingClientRect().left;
    startOffsetX = startX - handleLeft + sliderLeft - containerOffset;

    // Funktion til at bevæge slideren
    function moveHandler(e) {
      const moveX =
        (e.pageX || e.touches[0].pageX) - containerOffset - startOffsetX;
      updateSlider(Math.max(0, Math.min(moveX, containerWidth)));
    }

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("touchmove", moveHandler);

    // Stopper træk-handlingen ved musens og/eller fingeren der slippes
    window.addEventListener(
      "mouseup",
      function () {
        document.body.classList.remove("no__select");
        window.removeEventListener("mousemove", moveHandler);
      },
      { once: true }
    );

    window.addEventListener(
      "touchend",
      function () {
        document.body.classList.remove("no__select");
        window.removeEventListener("touchmove", moveHandler);
      },
      { once: true }
    );
  }

  // Tilføjer event listeners til håndtaget
  handle.addEventListener("mousedown", startDragging);
  handle.addEventListener("touchstart", startDragging);

  // Tilføjer event listeners til vinduet
  window.addEventListener("resize", debounce(handleResize, 250));
  window.addEventListener("load", handleResize);
});
