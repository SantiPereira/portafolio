document.addEventListener('DOMContentLoaded' , function() {

    const navLink = document.querySelectorAll('nav .derecha a ') ; 

    navLink.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active') ;
        }
    }) ; 
}) ; 



