const button = document.getElementById('menu_button_container')
const menuHamb = document.getElementById('menu_hamb_container')

function openMenu(){
    console.log('clicou')
    menuHamb.classList.remove('close')
    menuHamb.classList.add('open')
    button.style.display = 'none'
}

function closeMenu(){
    console.log('clicou')
    menuHamb.style.animation = 'closeMenuAnimation .5s'
    menuHamb.addEventListener("animationend", (e) => {
        if(e.animationName == 'closeMenuAnimation'){
            menuHamb.classList.remove('open')
            menuHamb.classList.add('close')
            button.style.display = 'block'
            menuHamb.style.animation = ''
        }
    })
}