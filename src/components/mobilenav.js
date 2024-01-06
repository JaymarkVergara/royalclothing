const mobileNav = () => {
    const headerBar = document.querySelector('.header-bars'); 
    const mobileNav = document.querySelector('.mobile-nav'); 
    const mobileNavLinks = document.querySelector('.mobile-nav-link'); 


    let isMobileNavOpen;

    headerBar.addEventListener('click', () => {
     
        isMobileNavOpen = !isMobileNavOpen;
        
        if(isMobileNavOpen){
            // mobileNav.style.display = 'flex';
            mobileNav.classList.add('active');
            document.body.style.overflowY = 'hidden';
            document.body.style.overflowX = 'hidden';
        }else{
            // mobileNav.style.display = 'none';
            mobileNav.classList.remove('active');
            document.body.style.overflowX = 'auto';
            document.body.style.overflowY = 'auto';
        }
    })
}
export default mobileNav;