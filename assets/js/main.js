window.addEventListener("load", () => {
  // boxをすべて取得
  const boxSingle = document.querySelectorAll(".js_fadeInItem");
  // boxをすべて取得
  const boxParents = document.querySelectorAll(".js_fadeInTrigger");
  // scrollイベントをセット
  window.addEventListener("scroll", showBoxes);
  // ロードのタイミングで一度発火
  showBoxes();

  function showBoxes() {
    // 発火位置
    const triggerBottom = window.innerHeight - 100;

    boxSingle.forEach((box) => {
      // boxの頭部分の座標を取得
      const boxTop = box.getBoundingClientRect().top;

      // boxの頭部分が発火位置を超えたら
      if (boxTop < triggerBottom) {
        box.classList.add("is_show");
      } 
      // クラスの脱着の場合
      // else {
      //   box.classList.remove("is_show");
      // }
    });
    boxParents.forEach((box) => {
      // boxの頭部分の座標を取得
      const boxTop = box.getBoundingClientRect().top;

      // boxの頭部分が発火位置を超えたら
      if (boxTop < triggerBottom) {
        box.classList.add("is_show");
      } 
      // クラスの脱着の場合
      // else {
      //   box.classList.remove("is_show");
      // }
    });
  }
});