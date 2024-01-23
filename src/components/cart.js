const cart = () => {
    const cartIcon = document.querySelector('#cart-icon');
    const cart = document.querySelector('.cart');
    const cartClose = document.querySelector('#close-cart');

    cartIcon.onclick = () =>{
        cart.classList.add('active');
    }

    cartClose.onclick = () =>{
        cart.classList.remove('active');
    }

    //cart working

    if(document.readyState == 'loading'){
        document.addEventListener("DOMContentLoaded", ready);
  
    }else{
        ready();
    }

    //making function
    function ready(){
        //remove items from cart
        let removeCartButton = document.getElementsByClassName('cart-remove');
        console.log(removeCartButton)
        for(var i = 0; i < removeCartButton.length; i++){
            let rbutton = removeCartButton[i];
            rbutton.addEventListener("click", removeCartItem);
        }

        //quantity changes
        let quantityInputs = document.getElementsByClassName('cart-quantity');
        for(var i = 0; i < quantityInputs.length; i++){
            let input = quantityInputs[i];
            input.addEventListener('change', quantityChanged);
        }

        //add to cart
        let addCart = document.getElementsByClassName('add-cart');
        for(var i = 0; i < addCart.length; i++){
            let addButton  = addCart[i];
            addButton.addEventListener('click', addCartClicked);
        } 
        
        document.getElementsByClassName('btn-buy-now')[0].addEventListener("click", BuyNowClicked);
    }

    //buy now clicked
    function BuyNowClicked(){
        alert('Your order is placed');
        let cartContent = document.getElementsByClassName('cart-container')[0];
        while(cartContent.hasChildNodes()){
            cartContent.removeChild(cartContent.firstChild);
        }

        updateTotal();
    }
   
    
    //remove items
    function removeCartItem(e){ 
        var buttonClicked = e.target;
        buttonClicked.parentElement.remove();
        updateTotal();
    }

    //quanity changed 
    function quantityChanged(e){
        let input = e.target;
        if(isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateTotal();
    }

    //add cart 

    function addCartClicked(e){
        let addButton = e.target;
        let shopProducts = addButton.parentElement;
        let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
        let price = shopProducts.getElementsByClassName('price')[0].innerText;
        let pimg = shopProducts.getElementsByClassName('p-img')[0].src;
        productAddToCart(title,price,pimg)
        updateTotal();
    }

    function productAddToCart(title,price,pimg){
        let cartShopBox = document.createElement('div');
        cartShopBox.classList.add('cart-box');
        
        let cartItems = document.getElementsByClassName('cart-container')[0];
        let cartItemName = cartItems.getElementsByClassName('cart-product-title')
        for(let i = 0; i < cartItemName.length; i++){
            if(cartItemName[i].innerHTML  === title){
                alert(`${title} was already added to cart`);
                return;
            }
        }

        let cartBoxContent = `
        <img src="${pimg}" class="cart-img">
                        
        <div class="cart-detail">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
          </div>  
    
        <i class='bx bxs-trash-alt cart-remove' ></i>
        `
    
        cartShopBox.innerHTML = cartBoxContent;
        cartItems.append(cartShopBox);
        alert(`${title} (${price}) added to cart`);
        cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
        cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
   
    }
    
  

    //update total
    updateTotal();
    function updateTotal(){
        var cartContent = document.getElementsByClassName('cart-container')[0];
        var cartBoxes = cartContent.getElementsByClassName('cart-box');
        let total = 0;
        for(var i = 0; i < cartBoxes.length; i++){
            let cartBox = cartBoxes[i];
            let priceElement = cartBox.getElementsByClassName('cart-price')[0];
            let price = parseFloat(priceElement.innerText.replace('$', ""));
            let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
            let quantity = quantityElement.value;
            total = total + (price * quantity);
        }
            
            total = Math.round(total * 100 ) /100;
            document.getElementsByClassName("total-price")[0].innerText = "$" + total;

    }

    //click featured prodcuts
    var featuredContainer =  document.getElementsByClassName("featured-content-box");

    for(var i = 0; i < featuredContainer.length; i++){
        var featured  = featuredContainer[i];
        featured.addEventListener('click', goshop);
    } 

    function goshop(){
        window.location.href = '#shop';
    }
}



export default cart;