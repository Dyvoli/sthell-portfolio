let showModal = document.getElementById('showModal') 
let revealModal = document.getElementById('revealModal')
let closeModal = document.getElementById('closeModal')
let showOverlay = document.querySelector('.overlay')


let burgerBtn = document.getElementById('burger')
let navShow = document.getElementById('navigator')
revealModal.addEventListener('click', () => {
        showModal.style.display = "block";
        showOverlay.style.display = "block";
});
closeModal.addEventListener('click', () => {
    showModal.style.display = "none"
    showOverlay.style.display = "none";
})

burgerBtn.addEventListener('click', () => {
    navShow.classList.toggle('active')
})

document.addEventListener("DOMContentLoaded", function () {
    const deroulantItems = document.querySelectorAll(".deroulant");
  
    deroulantItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        const menu = item.querySelector(".menu");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
        e.stopPropagation(); // Empêche la propagation du clic pour éviter de fermer immédiatement le sous-menu
      });
    });
  
    // Fermer le sous-menu lorsqu'un clic est effectué ailleurs sur la page
    document.addEventListener("click", function (e) {
      deroulantItems.forEach((item) => {
        const menu = item.querySelector(".menu");
        if (menu.style.display === "block" && !item.contains(e.target)) {
          menu.style.display = "none";
        }
      });
    });
  });
  