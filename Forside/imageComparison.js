$(document).ready(function () {
    let containerOffset /*Her bruges let, da det er en værdi der ændre sig*/,
      containerWidth,
      startOffsetX;
  
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
      updateSlider(containerWidth / 2);
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
      e.preventDefault(); // Undgår text selection
      $("body").addClass("no__select"); // Tilføjer class (no_select)
  
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
        $("body").removeClass("no__select"); // fjerner no select så der igen kan markeres tekst når musen slippes
        $(window).off("mousemove touchmove", moveHandler);
      });
    }
  
    $(".comparison-slider__handle").on("mousedown touchstart", startDragging);
  
    handleResize();
  
    // Hver gang siden loader centreres håndtaget på slideren
    $(window).on("load", handleResize);
  });
  