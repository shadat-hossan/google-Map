const singalCountryMap = document.querySelectorAll(".singalCountryMap");

function positionPinIcon(svgPathSelector, pinIconSelector, topOffset, leftOffset) {
  const svgPath = document.querySelector(svgPathSelector);
  const pinIcon = document.querySelector(pinIconSelector);
  const svgPathRect = svgPath.getBoundingClientRect();

  const relativeTop = svgPathRect.top + window.scrollY + topOffset;
  const relativeLeft = svgPathRect.left + window.scrollX + leftOffset;

  pinIcon.style.top = relativeTop + "px";
  pinIcon.style.left = relativeLeft + "px";
}

function loadAvin() {
  positionPinIcon(".pniLocationBD", ".singalPinIcon.BD", -22, -3);
  positionPinIcon(".pniLocationIN", ".singalPinIcon.IN", 30, 22);
  positionPinIcon(".pniLocationAT", ".singalPinIcon.AT", -28, 1);
  positionPinIcon(".pniLocationNOR", ".singalPinIcon.NOR", -1, -2);
}

loadAvin();

window.addEventListener("resize", loadAvin);

