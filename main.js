const singalCountryMap = document.querySelectorAll(".singalCountryMap");
const mapNmaeShow = document.querySelector(".mapNmaeShow");
const mapLayoutImage = document.querySelector(".mapLayoutImage");
const countryInfoSidBar = document.querySelector(".countryInfoSidBar");
const singalPinIcon = document.querySelectorAll(".singalPinIcon i");

const pinLocationInformation = [
  {
    id: "address1",
    name: "Saffron Corporation Ltd.",
    reviews: 3.8,
    address: [
      (address1 =
        "Rupayan Shelford, Apt#10-F, Plot#23/6 Bir Uttam A.N.M. Nuruzzaman Road, Shyamoli"),
      (desc =
        "Established in 2007, Saffron Corporation Ltd. stands as a pioneering force in the realm of software development and business solutions in Bangladesh. With a relentless commitment to cutting-edge technology and strategic consulting, we have continuously evolved, ensuring our clients stay ahead in a dynamic business landscape."),
    ],
    email: "info@saffroncorporation.com.bd",
    phone: "+88-02-48113179",
    profile_image:
      "https://lh3.googleusercontent.com/p/AF1QipO5UAg96c6iDhNjqlORONLSbzOvpdSVRQqoBrNO=s680-w680-h510",
    iframe_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5866059986033!2d90.3549930751155!3d23.762116778662353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5f91df2885%3A0xa4cf024ab5a23ce5!2sSaffron%20Corporation%20Ltd.!5e0!3m2!1sen!2sbd!4v1687608992503!5m2!1sen!2sbd",
    google_map: "https://maps.app.goo.gl/ncU75iyeYsqL9RtL6",
  },
  {
    id: "address2",
    name: "25, Shakespeare Sarani Rd",
    reviews: 3.0,
    address: [
      (address1 =
        "25, shakespeare sarani road, kolkata-700017, west bengal, india"),
      (desc =
        "Established in 2007, Saffron Corporation Ltd. stands as a pioneering force in the realm of software development and business solutions in Bangladesh. With a relentless commitment to cutting-edge technology and strategic consulting, we have continuously evolved, ensuring our clients stay ahead in a dynamic business landscape."),
    ],
    email: "info@saffroncorporation.com.bd",
    phone: "+88-02-48113179",
    profile_image:
      "https://imageproxy-v2.services.lokalebasen.dk/h1080/lb-images-asia/in/765050/picture20170911-48728-1go6fll.jpg?v=m1664363520",

    iframe_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.9102754894993!2d88.3549786!3d22.5450336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277199a6711cf%3A0x3d309db42567b229!2s25%2C%20Shakespeare%20Sarani%20Rd%2C%20near%20Khosla%20Electronics%20-%20Best%20Electronic%20Store%20in%20Theater%20Road%20%7C%20Kitchen%20Appliances%20%7C%20Cookware%2C%20Dishwashers%2C%20Smart%20Refrigerators%2C%20Mullick%20Bazar%2C%20Elgin%2C%20Kolkata%2C%20West%20Bengal%20700017%2C%20India!5e0!3m2!1sen!2sbd!4v1712206010054!5m2!1sen!2sbd",
    google_map: "https://maps.app.goo.gl/QHQ3jnH6oSSd8ffcA",
  },
  {
    id: "address3",
    name: "Wiedner Gürtel 13",
    reviews: 5.0,
    address: [
      (address1 = "Wiedner Gürtel 13, 1100 Wien, Austria"),
      (desc =
        "Established in 2007, Saffron Corporation Ltd. stands as a pioneering force in the realm of software development and business solutions in Bangladesh. With a relentless commitment to cutting-edge technology and strategic consulting, we have continuously evolved, ensuring our clients stay ahead in a dynamic business landscape."),
    ],
    email: "info@saffroncorporation.com.bd",
    phone: "+88-02-48113179",
    profile_image:
      "https://www.alukoenigstahl.at/de/PublishingImages/01%20Referenzen/01_%C3%96sterreich/AT_The%20Icon%20Vienna/TI10.jpg?RenditionID=6",

    iframe_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.065245580166!2d16.373967576265013!3d48.18609437124883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da9d70318fc65%3A0x5d3169e5a2391719!2sWiedner%20G%C3%BCrtel%2013%2C%201100%20Wien%2C%20Austria!5e0!3m2!1sen!2sbd!4v1687609558249!5m2!1sen!2sbd",
    google_map: "https://maps.app.goo.gl/bnZ6GsBZgQzrAqBr5",
  },
  {
    id: "address4",
    name: "Grubbegata 1",
    reviews: 3.4,
    address: [
      (address1 = "Grubbegata 1 Sandakerveien 64 Oslo Norway"),
      (desc =
        "Established in 2007, Saffron Corporation Ltd. stands as a pioneering force in the realm of software development and business solutions in Bangladesh. With a relentless commitment to cutting-edge technology and strategic consulting, we have continuously evolved, ensuring our clients stay ahead in a dynamic business landscape."),
    ],
    email: "info@saffroncorporation.com.bd",
    phone: "+88-02-48113179",
    profile_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Grubbegata_14%2C_Oslo.jpg/1280px-Grubbegata_14%2C_Oslo.jpg",

    iframe_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.0836251580672!2d10.742405377030023!3d59.91415947490285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e62ea60887f%3A0x68711cdd4442773f!2sGrubbegata%201%2C%200179%20Oslo%2C%20Norway!5e0!3m2!1sen!2sbd!4v1687609591115!5m2!1sen!2sbd",
    google_map: "https://maps.app.goo.gl/ncU75iyeYsqL9RtL6",
  },
];

function positionPinIcon(
  svgPathSelector,
  pinIconSelector,
  topOffset,
  leftOffset
) {
  const svgPath = document.querySelector(svgPathSelector);
  const pinIcon = document.querySelector(pinIconSelector);
  const svgPathRect = svgPath.getBoundingClientRect();

  const relativeTop = svgPathRect.top + 0 + topOffset;
  const relativeLeft = svgPathRect.left + 0 + leftOffset;

  pinIcon.style.top = relativeTop + "px";
  pinIcon.style.left = relativeLeft + "px";
}

function loadAvin() {
  let pageX = window.innerWidth;
  let pageY = window.innerHeight;

  console.log(pageX, pageY);
  if (pageX >= 1600 || pageY >= 1600) {
    positionPinIcon(".pniLocationBD", ".singalPinIcon.BD", -20, -1);
    positionPinIcon(".pniLocationIN", ".singalPinIcon.IN", 30, 22);
    positionPinIcon(".pniLocationAT", ".singalPinIcon.AT", -28, 1);
    positionPinIcon(".pniLocationNOR", ".singalPinIcon.NOR", -1, -2);
  } else if (pageX >= 1000 || pageY >= 1000) {
    positionPinIcon(".pniLocationBD", ".singalPinIcon.BD", -25, -1);
    positionPinIcon(".pniLocationIN", ".singalPinIcon.IN", 15, 20);
    positionPinIcon(".pniLocationAT", ".singalPinIcon.AT", -29, 1);
    positionPinIcon(".pniLocationNOR", ".singalPinIcon.NOR", -2, -2);
  } else {
    positionPinIcon(".pniLocationBD", ".singalPinIcon.BD", -20, -30);
    positionPinIcon(".pniLocationIN", ".singalPinIcon.IN", 40, 20);
    positionPinIcon(".pniLocationAT", ".singalPinIcon.AT", -2, 1);
    positionPinIcon(".pniLocationNOR", ".singalPinIcon.NOR", -4, -5);
  }
}

loadAvin();

window.addEventListener("resize", loadAvin);

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

singalPinIcon.forEach(function (i) {
  i.addEventListener("mousemove", function (e) {
    let pineTargatName = e.target.getAttribute("name");
    let pageY = e.offsetY;
    let pageX = e.offsetX;
    let pagesY = e.clientY;
    let pagsX = e.clientX;
    mapNmaeShow.style.top = pageY + pagesY + "px";
    mapNmaeShow.style.left = pageX + pagsX + "px";
    mapNmaeShow.style.display = "inline";

    // console.log(pineTargatName);
    for (let i = 0; i < pinLocationInformation.length; i++) {
      if (pineTargatName == pinLocationInformation[i].id) {
        let pintNmae = pinLocationInformation[i].name;
        mapNmaeShow.innerHTML = `<p>${pintNmae}</p>`;
      }
    }
  });
});

singalPinIcon.forEach(function (i) {
  i.addEventListener("click", function (e) {
    let pineTargatName = e.target.getAttribute("name");
    for (let i = 0; i < pinLocationInformation.length; i++) {
      if (pineTargatName == pinLocationInformation[i].id) {
        console.log(pinLocationInformation[i].profile_image[0]);
        countryInfoSidBar.innerHTML = `
        <div class="countryInfoSidBarContainer">
        <div class="countryInfoSidBarCancel"><i class="fa fa-times" aria-hidden="true"></i></div>
        <div class="countryInfoSidBarImage">
          <img src="${pinLocationInformation[i].profile_image}" alt="${pinLocationInformation[i].profile_image.img1}" />
        </div>
        <div class="countryInfoName">
          <h2>${pinLocationInformation[i].name}</h2>
          <p>${pinLocationInformation[i].address[0]}</p>
        </div>
        <div class="countryInfoSidBarNavegation">
          <ul>
            <li>
              <a href="${pinLocationInformation[i].google_map}" target="_blank">
                <i class="fa fa-location-arrow" aria-hidden="true"></i>
                <p>Directions</p>
              </a>
            </li>
            <li>
              <a href="${pinLocationInformation[i].google_map}" target="_blank">
                <i class="fa fa-map-o" aria-hidden="true"></i>
                <p>Google Map</p>
              </a>
            </li>
            <li>
              <a href="${pinLocationInformation[i].google_map}" target="_blank">
                <i class="fa fa-mobile" aria-hidden="true"></i>
                <p>Send to phone</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="countryInfoSidBarQuickFacts">
          <h3>Quick facts</h3>
          <p>
          ${pinLocationInformation[i].address[1]}
          </p>
        </div>

        <div class="countryInfoSidBarGoogleMap">
            <iframe
              src="${pinLocationInformation[i].iframe_src}"
              width="350"
              height="230"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

      </div>
        `;
      }
    }
    const countryInfoSidBarCancelI = document.querySelector(
      ".countryInfoSidBarCancel i"
    );
    countryInfoSidBarCancelI.addEventListener("click", function () {
      countryInfoSidBar.innerHTML = " ";
    });
  });
});

singalCountryMap.forEach(function (i) {
  i.addEventListener("mouseout", function () {
    mapNmaeShow.style.display = "none";
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

async function allCountry() {
  const API_URL = "https://restcountries.com/v3.1/all";
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}

singalCountryMap.forEach(function (i) {
  i.addEventListener("click", async function (e) {
    const apitData = await allCountry();
    const targetName = e.target.getAttribute("name");

    for (let i = 0; i < apitData.length; i++) {
      if (
        targetName == apitData[i].name.common ||
        targetName == apitData[i].name.official
      ) {
        countryInfoSidBar.innerHTML = `
        <div class="countryInfoSidBarContainer">
        <div class="countryInfoSidBarCancel"><i class="fa fa-times" aria-hidden="true"></i></div>
        <div class="countryInfoSidBarImage">
          <img src="${apitData[i].flags.png}" alt="${apitData[i].flags.alt}" />
        </div>
        <div class="countryInfoName">
          <h2>${apitData[i].name.common}</h2>
          <p>${apitData[i].name.official}</p>
        </div>
        <div class="countryInfoSidBarNavegation">
          <ul>
            <li>
              <a href="${apitData[i].maps.googleMaps}" target="_blank">
                <i class="fa fa-location-arrow" aria-hidden="true"></i>
                <p>Directions</p>
              </a>
            </li>
            <li>
              <a href="${apitData[i].maps.googleMaps}" target="_blank">
                <i class="fa fa-map-o" aria-hidden="true"></i>
                <p>Google Map</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-mobile" aria-hidden="true"></i>
                <p>Send to phone</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="countryInfoSidBarQuickFacts">
          <h3>Quick facts</h3>
          <p>
          ${apitData[i].flags.alt}
          </p>
        </div>

      </div>

        `;
      }
    }
    const countryInfoSidBarCancel = document.querySelector(
      ".countryInfoSidBarCancel i"
    );
    countryInfoSidBarCancel.addEventListener("click", function () {
      countryInfoSidBar.innerHTML = " ";
    });
  });
});

countryInfoSidBar.addEventListener("mouseover", function () {
  const countryInfoSidBarCancel = document.querySelector(
    ".countryInfoSidBarCancel"
  );
  countryInfoSidBarCancel.style.opacity = "1";
});

countryInfoSidBar.addEventListener("mouseout", function () {
  const countryInfoSidBarCancel = document.querySelector(
    ".countryInfoSidBarCancel"
  );
  countryInfoSidBarCancel.style.opacity = "0";
});
