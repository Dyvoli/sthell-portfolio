let showModal = document.getElementById('showModal') 
let revealModal = document.getElementById('revealModal')
let closeModal = document.getElementById('closeModal')
let showOverlay = document.querySelector('.overlay')


let burgerReveal = document.getElementById('burger')
let crossReveal = document.getElementById('cross')
revealModal.addEventListener('click', () => {
        showModal.style.display = "block";
        showOverlay.style.display = "block";
});
closeModal.addEventListener('click', () => {
    showModal.style.display = "none"
    showOverlay.style.display = "none";
})

burgerReveal.addEventListener('click', () => {
    
})