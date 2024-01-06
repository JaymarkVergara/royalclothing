const user = () => {
    const userIcon = document.querySelector('#user-icon');
    const userLogin = document.querySelector('.user-login');
    const userClose = document.querySelector('#close-user-login');

    userIcon.onclick = () =>{
        userLogin.classList.add('active');
    }

    userClose.onclick = () =>{
        userLogin.classList.remove('active');
    }

}

export default user;