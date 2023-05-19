const attackOPS = [
  {
    Name: "Sledge",
    ability: "Sledge Hammer",
    imgSrc: "./imgs/Sledge_-_Full_Body (1).png",
    charLogo: "./imgs/Sledge_Icon_-_Standard.png",
  },
  {
    Name: "Thatcher",
    ability: "EMP Grenade",
    imgSrc: "./imgs/Thatcher_-_Full_Body.png",
    charLogo: "./imgs/Thatcher_Icon_-_Standard.png",
  },
  {
    Name: "Ash",
    ability: "Breaching Rounds",
    imgSrc: "./imgs/Ash_-_Full_Body.png",
    charLogo: "./imgs/Ash_Icon_-_Standard.png",
  },
  {
    Name: "Thermite",
    ability: "Exothermic Charge",
    imgSrc: "./imgs/Thermite_-_Full_Body.png",
    charLogo: "./imgs/Thermite_Badge_2.png",
  },
  {
    Name: "Twitch",
    ability: "Shock Drone",
    imgSrc: "./imgs/Twitch_-_Full_Body.png",
    charLogo: "./imgs/Twitch_Badge_New_2.png",
  },
  {
    Name: "Montagne",
    ability: '"Le Roc" Extendable Shield',
    imgSrc: "./imgs/Montagne_-_Full_Body.png",
    charLogo: "./imgs/Montagne_Badge_2.png",
  },

  {
    Name: "Glaz",
    ability: "Flip Sight",
    imgSrc: "./imgs/Glaz_-_Full_Body.png",
    charLogo: "./imgs/Glaz_Badge_2.png",
  },
  {
    Name: "Fuze",
    ability: "Flash Shield",
    imgSrc: "./imgs/Fuze_-_Full_Body.png",
    charLogo: "./imgs/Fuze_Badge_2.png",
  },
  {
    Name: "Blitz",
    ability: "Cluster Charge",
    imgSrc: "./imgs/Large-blitz.2e74d4b8.png",
    charLogo: "./imgs/Blitz_Badge_2.png",
  },
  {
    Name: "IQ",
    ability: "Electronics Detector",
    imgSrc: "./imgs/IQ_-_Full_Body.png",
    charLogo: "./imgs/IQ_Badge_2.png",
  },
  {
    Name: "Buck",
    ability: "Skeleton Key",
    imgSrc: "./imgs/Buck_-_Full_Body.png",
    charLogo: "./imgs/Buck_Badge_new.png",
  },
  {
    Name: "Blackbeard",
    ability: "Rifle Shield",
    imgSrc: "./imgs/Large-blackbeard.2292a791.png",
    charLogo: "./imgs/Blackbeard_badge.png",
  },
  {
    Name: "Capitao",
    ability: "Tactical Crossbow",
    imgSrc: "./imgs/Large-capitao.984e75b7.png",
    charLogo: "./imgs/R6S-badge-capitao.png",
  },
  {
    Name: "Hibana",
    ability: "X-KAIROS",
    imgSrc: "./imgs/Hibana_-_Full_Body.png",
    charLogo: "./imgs/R6S-hibana.png",
  },
];
const defendOPS = [
  {
    Name: "Smoke",
    ability: "Remote gas grenade",
    imgSrc: "./imgs/Smoke_-_Full_Body.png",
    charLogo: "./imgs/Smoke_Icon_-_Standard.png",
  },
  {
    Name: "Mute",
    ability: "Signal Disruptor",
    imgSrc: "./imgs/Mute_-_Full_Body.png",
    charLogo: "./imgs/Mute_Icon_-_Standard.png",
  },
  {
    Name: "Castle",
    ability: "Armour Panel",
    imgSrc: "./imgs/Castle_-_Full_Body.png",
    charLogo: "./imgs/Castle_Badge_2.png",
  },
  {
    Name: "Pulse",
    ability: "Heartbeat Sensor",
    imgSrc: "./imgs/Pulse_-_Full_Body.png",
    charLogo: "./imgs/Pulse_Badge_2.png",
  },
  {
    Name: "Doc",
    ability: "Stim Pistol",
    imgSrc: "./imgs/Doc_-_Full_Body.png",
    charLogo: "./imgs/Doc_Badge_2.png",
  },
  {
    Name: "Rook",
    ability: "Armour Pack",
    imgSrc: "./imgs/Rook_-_Full_Body.png",
    charLogo: "./imgs/Rook_Badge_New_2.png",
  },

  {
    Name: "Kapkan",
    ability: "EDD Booby Trap",
    imgSrc: "./imgs/Kapkan_-_Full_Body.png",
    charLogo: "./imgs/Kapkan_Badge_2.png",
  },
  {
    Name: "Tachanka",
    ability: "Grenade Launcher",
    imgSrc: "./imgs/Tachanka_Rework_Fullbody.png",
    charLogo: "./imgs/Tachanka_Badge_Rework.png",
  },
  {
    Name: "Jäger",
    ability: "Magpie Defense System",
    imgSrc: "./imgs/Large-jager.edd9f749.png",
    charLogo: "./imgs/Jager_Badge_2.png",
  },
  {
    Name: "Bandit",
    ability: "Shocking Wire",
    imgSrc: "./imgs/Large-bandit.463ee829.png",
    charLogo: "./imgs/Bandit_Badge_2.png",
  },
  {
    Name: "Frost",
    ability: "Welcome Mat",
    imgSrc: "./imgs/Large-frost.f4325d10.png",
    charLogo: "./imgs/Frost_Badge_new.png",
  },
  {
    Name: "Valkyrie",
    ability: "Black Eye Cameras",
    imgSrc: "./imgs/Large-valkyrie.c1f143fb.png",
    charLogo: "./imgs/Valkyrie_badge.png",
  },
  {
    Name: "Caveira",
    ability: "Silent Step",
    imgSrc: "./imgs/Large-caveira.e4d82365.png",
    charLogo: "./imgs/R6S-badge-caveira.png",
  },
  {
    Name: "Rcho",
    ability: "Yokai",
    imgSrc: "./imgs/Echo_-_Full_Body.png",
    charLogo: "./imgs/R6S-echo.png",
  },
];

var attackList = document.querySelector(".attackersList");
var defendList = document.querySelector(".defendersList");
var btn1 = document.querySelector("#btnradio1");
var btn2 = document.querySelector("#btnradio2");

btn1.onclick = function () {
  console.log(`${btn1.checked} 1`);
  defendList.classList.add("hideList");
  attackList.classList.remove("hideList");
};
for (let i = 0; i < attackOPS.length; i++) {
  var attackDv = document.createElement("div");
  attackDv.classList.add("attack");
  var charImg = document.createElement("img");
  charImg.setAttribute("src", attackOPS[i].imgSrc);
  charImg.classList.add("Charc");
  attackDv.appendChild(charImg);
  var dscrp = document.createElement("div");
  dscrp.classList.add("dscrp");
  dscrp.classList.add("hidden");
  var OpName = document.createElement("h2");
  OpName.classList.add("name");
  OpName.innerHTML = attackOPS[i].Name;
  var OpAb = document.createElement("p");
  OpAb.classList.add("ability");
  OpAb.innerHTML = attackOPS[i].ability;
  dscrp.appendChild(OpName);
  dscrp.appendChild(OpAb);
  var toCart = document.createElement("button");
  toCart.classList.add("addCart");
  toCart.innerHTML = "Add To Cart";
  attackDv.appendChild(toCart);
  attackDv.appendChild(dscrp);
  var logo = document.createElement("img");
  logo.setAttribute("src", attackOPS[i].charLogo);
  logo.classList.add("logo");
  attackDv.appendChild(logo);
  attackList.appendChild(attackDv);
}

btn2.onclick = function () {
  console.log(`${btn2.checked} 2`);
  defendList.classList.remove("hideList");
  attackList.classList.add("hideList");
};
for (let i = 0; i < defendOPS.length; i++) {
  var defendDv = document.createElement("div");
  defendDv.classList.add("defend");
  var charImg = document.createElement("img");
  charImg.setAttribute("src", defendOPS[i].imgSrc);
  charImg.classList.add("Charc");
  defendDv.appendChild(charImg);
  var dscrp = document.createElement("div");
  dscrp.classList.add("dscrp");
  dscrp.classList.add("hidden");
  var OpName = document.createElement("h2");
  OpName.classList.add("name");
  OpName.innerHTML = defendOPS[i].Name;
  var OpAb = document.createElement("p");
  OpAb.classList.add("ability");
  OpAb.innerHTML = defendOPS[i].ability;
  dscrp.appendChild(OpName);
  dscrp.appendChild(OpAb);
  var toCart = document.createElement("button");
  toCart.classList.add("addCart");
  toCart.innerHTML = "Add To Cart";
  defendDv.appendChild(toCart);
  defendDv.appendChild(dscrp);
  var logo = document.createElement("img");
  logo.setAttribute("src", defendOPS[i].charLogo);
  logo.classList.add("logo");
  defendDv.appendChild(logo);
  defendList.appendChild(defendDv);
}

function setOpct(e) {
  var element = e.target.parentNode;
  var Charc = element.querySelector(".Charc");
  var logo = element.querySelector(".logo");
  var dscrp = element.querySelector(".dscrp");
  Charc.classList.add("opct");
  logo.classList.add("opct");
  dscrp.classList.remove("hidden");
}
function rmvOpct(e) {
  var element = e.target.parentNode;
  var Charc = element.querySelector(".Charc");
  var logo = element.querySelector(".logo");
  var dscrp = element.querySelector(".dscrp");
  Charc.classList.remove("opct");
  logo.classList.remove("opct");
  dscrp.classList.add("hidden");
}

var attack = document.querySelectorAll(".attack");
attack.forEach(function (card) {
  card.addEventListener("mouseover", setOpct);
  card.addEventListener("mouseout", rmvOpct);
});

var defendd = document.querySelectorAll(".defend");
defendd.forEach(function (card) {
  card.addEventListener("mouseover", setOpct);
  card.addEventListener("mouseout", rmvOpct);
});

var cartList = document.querySelector(".cartList");
var cartCheck = [];
var cartCounter = document.querySelector("#cnt");

function addToCart(event) {
  var element = event.target.parentNode;
  if (!cartCheck.includes(element)) {
    cartCheck.push(element);
    var cartItem = document.createElement("div");
    cartItem.classList.add("cartItems");
    var imgSrcLi = element.querySelector("img").src;
    var img = document.createElement("img");
    img.setAttribute("src", imgSrcLi);
    cartItem.appendChild(img);
    var deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid");
    deleteIcon.classList.add("fa-trash-can");
    deleteIcon.onclick = function (boo) {
      var rmv = boo.target.parentNode;
      rmv.remove();
      cartCounter.innerHTML = parseInt(cartCounter.innerHTML) - 1;
      if (cartCounter.innerHTML == 0) {
        cartList.classList.add("noDis");
        proceed.classList.add("noDis");
      }
    };
    cartItem.appendChild(deleteIcon);
    cartList.appendChild(cartItem);

    cartCounter.innerHTML = parseInt(cartCounter.innerHTML) + 1;
  }
}

var toCart = document.querySelectorAll(".addCart");

toCart.forEach(function (button) {
  button.addEventListener("click", addToCart);
});

var icon = document.querySelector(".fa-cart-shopping");
var proceed = document.querySelector(".checkOut");
var list = document.querySelector(".cartList");
var check = true;

proceed.onclick = function () {
  alert("Thanks For Purchasing :)");
  setTimeout(function () {
    location.reload();
  }, 1000);
};

check = true;

icon.addEventListener("click", function () {
  if (check && cartCounter.innerHTML > 0) {
    cartList.classList.remove("noDis");
    proceed.classList.remove("noDis");
    console.log(check);
    check = false;
  } else if (!check) {
    cartList.classList.add("noDis");
    proceed.classList.add("noDis");
    check = true;
    console.log(check + "2");
  }
});

const navbar = document.querySelector("#nav");
const maxScrollHeight = 200; // Set the maximum scroll height here

window.addEventListener("scroll", () => {
  if (window.scrollY > maxScrollHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

setTimeout(rmvLoad, 4400);
function rmvLoad() {
  var load = document.querySelector(".load");
  load.remove();
}
