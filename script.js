const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const cartItem = document.querySelector('.cart-items-container')
const cartBtn = document.querySelector('#cart-btn')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')


 const addButtons = document.querySelectorAll(".add-btn");
    const cart = document.getElementById("cart");



searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ){
            searchForm.classList.remove('active');
        }
    })
})

cartBtn.addEventListener('click', ()=>{
    cartItem.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem) ){
            cartItem.classList.remove('active');
        }
    })
})

menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(navbar) && !e.composedPath().includes(menuBtn) ){
            navbar.classList.remove('active');
        }
    })
})


addButtons.forEach(button => {
      button.addEventListener("click", function() {
        const productName = this.previousElementSibling.textContent;

        // create cart item
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
          <span>${productName}</span>
          <button class="remove-btn">Remove</button>
        `;

        // add to cart
        cart.appendChild(cartItem);

        // add remove functionality
        cartItem.querySelector(".remove-btn").addEventListener("click", function() {
          cartItem.remove();
        });
      });
    });


