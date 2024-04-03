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
      (address2 =
        "Rupayan Shelford, Apt#10-F, Plot#23/6 Bir Uttam A.N.M. Nuruzzaman Road, Shyamoli"),
      (desc =
        "Established in 2007, Saffron Corporation Ltd. stands as a pioneering force in the realm of software development and business solutions in Bangladesh. With a relentless commitment to cutting-edge technology and strategic consulting, we have continuously evolved, ensuring our clients stay ahead in a dynamic business landscape. At SCL, we redefine possibilities in the digital realm. As a trailblazing force in the IT industry, we bring together expertise, innovation, and a commitment to excellence to drive your business forward."),
    ],
    email: "info@saffroncorporation.com.bd",
    phone: "+88-02-48113179",
    profile_image: [
      (img1 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-1.jpg"),
      (img2 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-2.jpg"),
      (img3 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-3.jpg"),
      (img4 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-4.jpg"),
      (img5 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-5.jpg"),
      (img6 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-6.jpg"),
      (img7 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-7.jpg"),
      (img8 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-8.jpg"),
      (img9 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-9.jpg"),
      (img10 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-10.jpg"),
      (img11 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-11.jpg"),
      (img12 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-12.jpg"),
      (img13 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-13.jpg"),
      (img14 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-14.jpg"),
      (img15 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-15.jpg"),
      (img16 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffron-16.jpg"),
    ],

    iframe_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5866059986033!2d90.3549930751155!3d23.762116778662353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5f91df2885%3A0xa4cf024ab5a23ce5!2sSaffron%20Corporation%20Ltd.!5e0!3m2!1sen!2sbd!4v1687608992503!5m2!1sen!2sbd",
    google_map: "https://maps.app.goo.gl/ncU75iyeYsqL9RtL6",
  },
  {
    id: "address2",
    name: "GD-191",
    reviews: 3.0,
    address: [
      (address1 =
        "GD-191, GD Block, Sector 3, Bidhannagar, Kolkata, West Bengal 700106, India"),
      (desc =
        "Established in 2007, Saffron Corporation Ltd. stands as a pioneering force in the realm of software development and business solutions in Bangladesh. With a relentless commitment to cutting-edge technology and strategic consulting, we have continuously evolved, ensuring our clients stay ahead in a dynamic business landscape. At SCL, we redefine possibilities in the digital realm. As a trailblazing force in the IT industry, we bring together expertise, innovation, and a commitment to excellence to drive your business forward."),
    ],
    email: "info@saffroncorporation.com.bd",
    phone: "+88-02-48113179",
    profile_image: [
      (img1 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffronAddres2.jpg"),
    ],

    iframe_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0321036839237!2d88.41260497507787!3d22.577902579488022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275c5c1949563%3A0x6d7f91db6eb082a7!2sGD-191%2C%20GD%20Block%2C%20Sector%20III%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700106%2C%20India!5e0!3m2!1sen!2sbd!4v1687609515449!5m2!1sen!2sbd",
    google_map: "https://maps.app.goo.gl/M6YXU5NTGJUbfBUP8",
  },
  {
    id: "address3",
    name: "Saffron Corporation Ltd.",
    reviews: 3.8,
    address: [
      (address1 =
        "Rupayan Shelford, Apt#10-F, Plot#23/6 Bir Uttam A.N.M. Nuruzzaman Road, Shyamoli"),
      (address2 =
        "Rupayan Shelford, Apt#10-F, Plot#23/6 Bir Uttam A.N.M. Nuruzzaman Road, Shyamoli"),
      (desc =
        "Established in 2007, Saffron Corporation Ltd. stands as a pioneering force in the realm of software development and business solutions in Bangladesh. With a relentless commitment to cutting-edge technology and strategic consulting, we have continuously evolved, ensuring our clients stay ahead in a dynamic business landscape. At SCL, we redefine possibilities in the digital realm. As a trailblazing force in the IT industry, we bring together expertise, innovation, and a commitment to excellence to drive your business forward."),
    ],
    email: "info@saffroncorporation.com.bd",
    phone: "+88-02-48113179",
    profile_image: [
      (img1 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffronAddress3.jpg"),
    ],

    iframe_src:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.065245580166!2d16.373967576265013!3d48.18609437124883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da9d70318fc65%3A0x5d3169e5a2391719!2sWiedner%20G%C3%BCrtel%2013%2C%201100%20Wien%2C%20Austria!5e0!3m2!1sen!2sbd!4v1687609558249!5m2!1sen!2sbd",
    google_map: "https://maps.app.goo.gl/bnZ6GsBZgQzrAqBr5",
  },
  {
    id: "address4",
    name: "Grubbegata 1",
    reviews: 3.8,
    address: [
      (address1 =
        "Rupayan Shelford, Apt#10-F, Plot#23/6 Bir Uttam A.N.M. Nuruzzaman Road, Shyamoli"),
      (desc =
        "Established in 2007, Saffron Corporation Ltd. stands as a pioneering force in the realm of software development and business solutions in Bangladesh. With a relentless commitment to cutting-edge technology and strategic consulting, we have continuously evolved, ensuring our clients stay ahead in a dynamic business landscape. At SCL, we redefine possibilities in the digital realm. As a trailblazing force in the IT industry, we bring together expertise, innovation, and a commitment to excellence to drive your business forward."),
    ],
    email: "info@saffroncorporation.com.bd",
    phone: "+88-02-48113179",
    profile_image: [
      (img1 =
        "https://github.com/shadat-hossan/Image-server/blob/main/saffron/saffronAddress4.jpg"),
    ],

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
    console.log(pageX + 100 + "px", pageY + 100 + "px");
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
    console.log(e);
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
      // console.log(apitData[i].name.common);
      if (targetName == apitData[i].name.common) {
        countryInfoSidBar.innerHTML = `
        
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

        console.log(apitData[i]);
      }
    }
  });
});
