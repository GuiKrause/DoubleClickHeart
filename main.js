let imgPost = document.querySelector('.container')
let heart = document.querySelector('.heart')
imgPost.addEventListener('dblclick', () => {
    heart.classList.add('visible')
    setTimeout(() => heart.classList.remove('visible'), 1000)
})