let cart = [];
let total = 0;

function addToCart(itemName) {
    cart.push(itemName); 

    let itemPrice = getItemPrice(itemName); 
    total += itemPrice;

    updateCartDisplay();

    showMessage(`${itemName} has been added to your cart! 🎉`);
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; 

    cart.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'list-group-item';

        const itemLink = document.createElement('a');
        itemLink.href = getItemLink(item); 
        itemLink.textContent = item;
        itemLink.style.color = 'inherit'; 
        itemLink.style.textDecoration = 'none'; 

        listItem.appendChild(itemLink);
        cartItemsContainer.appendChild(listItem);
    });

    
    document.getElementById('total-price').textContent = 'Total Price: ₹' + total;
}

function getItemLink(item) {
    const links = {
        'Demon Slayer Music Box': '#demonslayer', 
        'Gojo Funny Mug': '#gojo', 
        'Uchiha Mangekyou Users T-Shirt': '#uchiha',
        'Naruto and Kakashi Keychains': '#key',
        'Ichigo & Hollow Ichigo Figurines': '#ichigo',
        'Chainsaw Man - Aki Hayakawa Figure': '#csm'
    };
    return links[item] || '#'; 
}

function getItemPrice(item) {
    const prices = {
        'Demon Slayer Music Box': 2173,
        'Gojo Funny Mug': 1383,
        'Uchiha Mangekyou Users T-Shirt': 2126,
        'Naruto and Kakashi Keychains': 599,
        'Ichigo & Hollow Ichigo Figurines': 38478,
        'Chainsaw Man - Aki Hayakawa Figure': 20178
    };
    return prices[item] || 0; 
}

function showMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.innerText = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.bottom = '20px';
    messageDiv.style.right = '20px';
    messageDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '10px';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.zIndex = '1000';

    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        document.body.removeChild(messageDiv);
    }, 3000);
}