document.querySelectorAll(".checkbox").forEach((checkbox) => {
  checkbox.onchange = function () {
    const layerClass = this.value;
    const overlay = document.querySelector(".soap ." + layerClass);
    if (this.checked) {
      overlay.classList.remove("hide");
    } else {
      overlay.classList.add("hide");
    }
  };
});
