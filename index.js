let body = document.getElementsByTagName("body").item(0);

body.addEventListener("keydown", function (event) {
  console.log(event.key);

  const pBlock = document.getElementById("pBlock");
  const pxIncrease = 10;

  // offsetHeightは現在の要素の高さを取得します。
  let height = pBlock.offsetHeight;

  // 押されたキーがuなら+10、dなら-10
  if (event.key === "u") {
    // style.heightは要素のstyle属性のheightプロパティの値を取得、もしくは、設定するプロパティです。
    console.log(pBlock.style.height);
    pBlock.style.height = height + pxIncrease + "px";
  }
  else if (event.key === "d") {
    console.log(pBlock.style.height)
    pBlock.style.height = (height - pxIncrease) + "px";
  }
})
