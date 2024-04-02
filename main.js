const singalCountryMap = document.querySelectorAll(".singalCountryMap");
const mapNmaeShow = document.querySelector(".mapNmaeShow");
const mapLayoutImage = document.querySelector(".mapLayoutImage");

function positionPinIcon(
  svgPathSelector,
  pinIconSelector,
  topOffset,
  leftOffset
) {
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

async function allCountry() {
  const API_URL = "https://restcountries.com/v3.1/all";
  const res = await fetch(API_URL);
  const data = await res.json();
  // console.log(data[100].name.common);
  return data;
}
allCountry();

singalCountryMap.forEach(function (i) {
  i.addEventListener("mousemove", function (e) {
    let pageY = e.offsetY;
    let pageX = e.offsetX;
    mapNmaeShow.style.top = pageY + 10 + "px";
    mapNmaeShow.style.left = pageX + 10 + "px";
    mapNmaeShow.style.display = "inline";

    let countryNmae = e.target.getAttribute("name");
    mapNmaeShow.innerHTML = `<p>${countryNmae}</p>`;
  });
});

var mapFluge = false;

mapLayoutImage.addEventListener("click", function (e) {
  if (mapFluge == false) {
    document.getElementsByTagName("body")[0].style.background = "#344475";
    singalCountryMap.forEach(function (element) {
      element.style.fill = "#2b442d";
      e.target.src = "img/mapLayout1.png";
      mapFluge = true;
    });
  } else {
    document.getElementsByTagName("body")[0].style.background = "#6cd2e7";
    singalCountryMap.forEach(function (element) {
      element.style.fill = "#fbf8f3";
      e.target.src = "img/mapLayout2.png";
      mapFluge = false;
    });
  }
});
