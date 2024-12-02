function openMenu(){
    console.log('toggle')
    document.querySelector('.background-blur').className = "background-blur menu-open";
    document.querySelector('.nav-menu').className = "nav-menu menu-open";
}

function closeMenu(){
    console.log('toggle')
    document.querySelector('.background-blur').className = "background-blur menu-hide";
    document.querySelector('.nav-menu').className = "nav-menu menu-hide";
}