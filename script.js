document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const headerMenu = document.getElementById('header-menu');

    menuToggle.addEventListener('click', function() {
        headerMenu.classList.toggle('is-active');
    });
    
    document.addEventListener('click', function(event) {
       
        if (headerMenu.classList.contains('is-active') && 
            !headerMenu.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            
            headerMenu.classList.remove('is-active');
        }
    });
});