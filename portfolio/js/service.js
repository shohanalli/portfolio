//popup section start
const serviceItems = document.querySelectorAll(".service_details");
const popup = document.querySelector(".popup_parent");
const popupCloseButton = popup.querySelector(".popup_close_butn");
const popupCloseIcon = popup.querySelector(".close_icon");

serviceItems.forEach(function(serviceItem) {
  serviceItem.addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() == "button") {
      const item = event.target.closest(".service_details");
      const p = item.querySelector("p").innerHTML;
      const readMore = item.querySelector(".read_more_option").innerHTML;
      popup.querySelector("p").innerHTML = p;
      popup.querySelector(".popup_body").innerHTML = readMore;

      popupParent();
    }
  });
});

popupCloseButton.addEventListener("click", popupParent);
popupCloseIcon.addEventListener("click", popupParent);

function popupParent() {
  popup.classList.toggle("open");
}
//popup seystem stop