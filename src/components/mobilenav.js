const mobileNav = () => {
    const headerBar = document.querySelector('.header-bars'); 
    const mobileNav = document.querySelector('.mobile-nav'); 
    const mobileNavLinks = document.querySelector('.mobile-nav-link'); 


    let isMobileNavOpen;



    headerBar.addEventListener('click', () => {
     
        isMobileNavOpen = !isMobileNavOpen;

        if(isMobileNavOpen === true){
            mobileNav.style.display = 'flex';
            mobileNav.classList.add('active');
            document.body.style.overflowY = 'hidden';
            document.body.style.overflowX = 'hidden';
        }else{
           
            mobileNav.classList.remove('active');
            // mobileNav.style.display = 'none';
            document.body.style.overflowX = 'auto';
            document.body.style.overflowY = 'auto';

           
        }

       
            mobileNavLinks.forEach(links => {
                links.addEventListener('click', () => {
                    isMobileNavOpen = false;
                    document.getElementsByClassName('mobile-nav')[0].style.display='none';
                    mobileNav.classList.remove('active');
                    document.body.style.overflowX = 'auto';
                    document.body.style.overflowY = 'auto';
                });
            });
        
      

      
    })

   




}
export default mobileNav;