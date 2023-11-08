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
