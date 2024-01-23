const LinkActive = () => {
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul a');

// window.addEventListener('scroll',()=> {
   
//     section.forEach(sec => {
//         console.log(window.scrollY);
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
    
//         if(top >= offset && top < offset + height){
//             navLinks.forEach((links) => {
//                 links.classList.remove('activez');
//                 // document.querySelector('header nav a [href*=' + id + ']').classList.add('activez');
//             })
//         }
//     });
// });


window.onscroll = () => {
    section.forEach(sec => {
        console.log(window.scrollY);
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height){
            navLinks.forEach((links) => {
                links.classList.remove('activez');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('activez');
            })
        }
    });

}

}
export default LinkActive;