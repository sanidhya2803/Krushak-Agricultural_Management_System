var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for(var i=0;1<removeCartItemButtons.length;i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click',function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal(){
    var cartItemcontainer = document.getElementsByClassName('cart')[0]
    var cartrows = cartItemcontainer.getElementsByClassName('cart-row')
    for (var i=0;i<cartrows.length; i++){
        var cartrows = cartrows[i]
        var priceElement = cartrow.getElementsByClassName('cart-price')[0]
    }
}