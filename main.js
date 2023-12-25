const mainContainer = document.getElementById("mainContainer");
const cardContainer = document.getElementById("cardContainer");

const make = (type, id) => {
  const element = document.createElement(`${type}`);
  if (id) element.id = id;
  return element;
};

function stepAnimateText(element, animation, delay) {
  var text = $(element).text();
  var curr = "";

  for (var i = 0; i < text.length; i++) {
    var character = text.charAt(i);
    $(element).html(
      curr +
        '<span class="' +
        animation +
        '" style="-webkit-animation-delay: ' +
        i * delay +
        "s; animation-delay: " +
        i * delay +
        's">' +
        character +
        "</span>"
    );
    curr = $(element).html();
  }
}

const coverTitle = make("h1", "coverTitle");
coverTitle.textContent = "Happy Birthday!";
cardContainer.append(coverTitle);

const coolBean = make("img", "coolBean");
coolBean.src = "./coolBean.png";
cardContainer.append(coolBean);

const coverText = make("h2", "coverText");
coverText.textContent = "To the coolest bean I know";
cardContainer.append(coverText);

const hiddenTextContainer = make("div", "hiddenTextContainer");
cardContainer.append(hiddenTextContainer);

const hiddenText = make("p", "hiddenText");
hiddenText.textContent =
  "My dearest Summer 🌞, \n\n I love you more than I know how to effectively articulate. \n\n You have made me a better person in more ways than I can count, and sharing my life with you is the greatest kind of blessing, one I barely allowed myself to even dream of before I met and fell in love with you. \n\n You are so strong, kind, intelligent, wise and humble, all the qualities I aspire to cultivate within myself. \n\n Justice. ⚖️ \n That's you. ❤️ \n \n 🎉 Happy Birthday my darling wife! 🎉";
hiddenTextContainer.append(hiddenText);

const openMe = make("button", "openButton");
openMe.textContent = "OPEN";
openMe.onclick = () => {
  coverTitle.style.animationName = "fadeAway";
  coverTitle.style.animationDuration = "3s";
  coverTitle.style.animationFillMode = "forwards";

  coverText.style.animationName = "fadeAway";
  coverText.style.animationDuration = "3s";
  coverText.style.animationDelay = "2s";
  coverText.style.animationFillMode = "forwards";

  coolBean.style.animationName = "moveUp";
  coolBean.style.animationDuration = "2s";
  coolBean.style.animationDelay = "1s";
  coolBean.style.animationFillMode = "forwards";

  const height = hiddenTextContainer.offsetHeight;
  const size = height/24;

  hiddenText.style.fontSize = `${size}px`
  hiddenText.style.animationName = "fadeIn";
  hiddenText.style.animationDuration = "24s";
  hiddenText.style.animationDelay = "4s";
  hiddenText.style.animationFillMode = "forwards";
  hiddenText.style.animationTimingFunction = "linear";

  stepAnimateText("#coverText", "bounceInDown", 0.1);
};
mainContainer.append(openMe);
