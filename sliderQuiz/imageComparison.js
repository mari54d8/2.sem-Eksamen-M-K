$(document).ready(function () {
  let containerOffset, containerWidth, startOffsetX;

  function updateSlider(xPos) {
    $(".comparison-slider__handle").css("left", xPos);
    $(".comparison-slider__image--left").css(
      "clip",
      `rect(0, ${xPos}px, 400px, 0)`
    );
    $(".comparison-slider__image--right").css(
      "clip",
      `rect(0, 100%, 400px, ${xPos}px)`
    );
  }

  function handleResize() {
    containerOffset = $(".comparison__slider").offset().left;
    containerWidth = $(".comparison__slider").width();
    updateSlider(containerWidth / 2); // Initialize to center
  }

  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  $(window).resize(debounce(handleResize, 250));

  function startDragging(e) {
    e.preventDefault(); // Prevent default text selection
    $("body").addClass("no__select"); // Add a class to prevent text selection

    const startX = e.pageX || e.originalEvent.touches[0].pageX;
    const handleLeft = $(".comparison-slider__handle").offset().left;
    startOffsetX = startX - handleLeft;

    const moveHandler = (e) => {
      const moveX =
        (e.pageX || e.originalEvent.touches[0].pageX) -
        containerOffset -
        startOffsetX;
      updateSlider(Math.max(0, Math.min(moveX, containerWidth)));
    };

    $(window).on("mousemove touchmove", moveHandler);
    $(window).one("mouseup touchend", () => {
      $("body").removeClass("no__select"); // Remove class to allow text selection
      $(window).off("mousemove touchmove", moveHandler);
    });
  }

  $(".comparison-slider__handle").on("mousedown touchstart", startDragging);

  // Initial calculation
  handleResize();

  // Ensure the slider is centered on page load
  $(window).on("load", handleResize);
});
