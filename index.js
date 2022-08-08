const body = document.getElementsByTagName("body").item(0);
const pBlock = document.getElementById("pBlock");
const pxChange = 10;

const increasePx = () => {
  const height = pBlock.offsetHeight;
  pBlock.style.height = height + pxChange + "px";
}

const decreasePx = () => {
  const height = pBlock.offsetHeight;
  pBlock.style.height = height - pxChange + "px";
}
