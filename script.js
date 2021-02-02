const menuButton = document.querySelector('.burger-nav')

const menuList = document.querySelector('header nav ul')

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('open')
})

