const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    category: "Mobile",
    price: 89999,
    image: "https://indiathisweek.in/wp-content/uploads/2025/12/16.jpg",
  },

  {
    id: 2,
    name: "Samsung Galaxy S25",
    category: "Mobile",
    price: 74999,
    image:
      "https://th.bing.com/th/id/OIP.sZqggLmmtfNrn3VywuZe4wHaE7?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },

  {
    id: 3,
    name: "MacBook Pro M4",
    category: "Laptop",
    price: 169999,
    image: "https://techcrunch.com/wp-content/uploads/2024/11/CMC_8144.jpg",
  },

  {
    id: 4,
    name: "ASUS ROG Laptop",
    category: "Laptop",
    price: 109999,
    image:
      "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg",
  },

  {
    id: 5,
    name: "Sony Headphones",
    category: "Audio",
    price: 12999,
    image:
      "https://www.bhphotovideo.com/images/images2000x2000/sony_wh1000xm2_b_1000x_wireless_noise_canceling_headphones_1361028.jpg",
  },
];

let data = "";

for (let i = 0; i < products.length; i++) {
  data += `
    <div class="card">

      <img src="${products[i].image}">

      <p class="category">
        ${products[i].category}
      </p>

      <h3 class="name">
        ${products[i].name}
      </h3>

      <h2 class="price">
        ₹${products[i].price}
      </h2>

      <button>Add To Cart</button>

    </div>
  `;
}

document.getElementById("productBox").innerHTML = data;
document.getElementById("btn").onclick = function () {
  alert("Welcome To Nexmart");
};

let btn = document.querySelector(".subscribe button");

btn.onclick = function () {
  let email = document.querySelector(".subscribe input").value;

  if (email == "") {
    alert("Please Enter Your Email");
  } else {
    alert("Thank You For Subscribing!");

    document.querySelector(".subscribe input").value = "";
  }
};

function showMenu() {
  let box = document.getElementById("box");

  if (box.style.display == "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

const leftData = [
  {
    image: "headphone.png",
    name: "Wireless Bluetooth Headphone Stereo",
    price: "$83.99",
  },

  {
    image: "memory.png",
    name: "64 GB Camera CCTV Memory Card",
    price: "$12.99",
    old: "$14.99",
  },

  {
    image: "watch.png",
    name: "Voice Calling Smartwatch",
    price: "$39.99",
  },

  {
    image: "appletv.png",
    name: "Apple TV HD 32GB",
    price: "$499.99",
  },
];

let left = "";

for (let i = 0; i < leftData.length; i++) {
  left += `
    <div class="product">

      <img src="${leftData[i].image}">

      <div>

        <h3>
          ${leftData[i].name}
        </h3>

        <h4>
          ${leftData[i].price}

          <del>
            ${leftData[i].old || ""}
          </del>

        </h4>

      </div>

    </div>
  `;
}

document.getElementById("leftProducts").innerHTML = left;

const rightData = [
  {
    image: "tv.png",
    name: "Xiaomi Mi 4S 55 Inch Smart TV",
    price: "$249.99",
  },

  {
    image: "battery.png",
    name: "Rechargeable Battery Sony",
    price: "$16.99",
    old: "$19.99",
  },

  {
    image: "convertible.png",
    name: "Convertible Laptop",
    price: "$789.99",
  },

  {
    image: "camera.png",
    name: "Sony AVC-1420 Camera",
    price: "$199.99",
    old: "$219.99",
  },
];

let right = "";

for (let i = 0; i < rightData.length; i++) {
  right += `
    <div class="product">

      <img src="${rightData[i].image}">

      <div>

        <h3>
          ${rightData[i].name}
        </h3>

        <h4>
          ${rightData[i].price}

          <del>
            ${rightData[i].old || ""}
          </del>

        </h4>

      </div>

    </div>
  `;
}

document.getElementById("rightProducts").innerHTML = right;

const brands = [
  {
    name: "Realme",
    image: "realme.png",
  },

  {
    name: "NVIDIA",
    image: "nvidia.png",
  },

  {
    name: "OnePlus",
    image: "oneplus.png",
  },

  {
    name: "Microsoft",
    image: "microsoft.png",
  },

  {
    name: "Sony",
    image: "sony.png",
  },

  {
    name: "Xiaomi",
    image: "mi.png",
  },

  {
    name: "Hitachi",
    image: "hitachi.png",
  },

  {
    name: "Huawei",
    image: "huawei.png",
  },

  {
    name: "Nokia",
    image: "nokia.png",
  },

  {
    name: "Verizon",
    image: "verizon.png",
  },

  {
    name: "Bohler",
    image: "bohler.png",
  },

  {
    name: "Lenovo",
    image: "lenovo.png",
  },
];

let brandData = "";

for (let i = 0; i < brands.length; i++) {
  brandData += `
    <div class="brand">

      <img 
        src="${brands[i].image}" 
        alt="${brands[i].name}"
      >

    </div>
  `;
}

document.getElementById("brandBox").innerHTML = brandData;

document.getElementById("viewBrands").onclick = function () {
  alert("All Brands");
};

let news1 = `
<div class="news-card">

    <img src="news-1.jpg">

    <div class="news-info">
        <span class="news-category">Virtual</span>
        <span class="news-author">By <b>Alex Beniwal</b></span>
    </div>

    <h3>
        Feel like you’re actually experiencing the action in real life with the VR
    </h3>

</div>
`;


let news2 = `
<div class="news-card">

    <img src="news-2.jpg">

    <div class="news-info">
        <span class="news-category">Mobile</span>
        <span class="news-author">By <b>Haris Gulati</b></span>
    </div>

    <h3>
        Smartphones have largely replaced personal digital assistant
    </h3>

</div>
`;


let news3 = `
<div class="news-card">

    <img src="news-3.jpg">

    <div class="news-info">
        <span class="news-category">Virtual</span>
        <span class="news-author">By <b>Alex Hels</b></span>
    </div>

    <h3>
        It sports crisp, transparent visuals and uses a 5.7-inch 1080p OLED
    </h3>

</div>
`;


let news4 = `
<div class="news-card">

    <img src="news-4.jpg">

    <div class="news-info">
        <span class="news-category">Wireless</span>
        <span class="news-author">By <b>Mical Von</b></span>
    </div>

    <h3>
        Wireless communications is the transmission of voice and data
    </h3>

</div>
`;

document.getElementById("newsBox").innerHTML =
    news1 + news2 + news3 + news4;

document.getElementById("viewNews").onclick = function() {

    alert("All News");

};