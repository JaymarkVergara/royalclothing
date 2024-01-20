const mobileNav = () => {
    const headerBar = document.querySelector('.header-bars'); 
    const mobileNav = document.querySelector('.mobile-nav') 
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link'); 


    let isMobileNavOpen = true;



    headerBar.addEventListener('click', () => {
     
        isMobileNavOpen = !isMobileNavOpen;

        if(isMobileNavOpen === true){
            mobileNav.style.display = 'flex';
            mobileNav.classList.toggle('active');
            document.body.style.overflowY = 'hidden';
            document.body.style.overflowX = 'hidden';
        }else{
            mobileNav.classList.remove('active');
            // mobileNav.style.display = 'none';
            document.body.style.overflowX = 'auto';
            document.body.style.overflowY = 'auto';
        }

        mobileNavLinks.forEach((Links) => {
            Links.addEventListener('click', () => {
                isMobileNavOpen = false;
                mobileNav.classList.remove('active');
                document.body.style.overflowY = 'auto';
            })
        })
      
    })
}
export default mobileNav;