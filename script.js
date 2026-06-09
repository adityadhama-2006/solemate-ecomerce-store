const products = [
    {
        id: 'air-max-infinity',
        title: 'Nike Air Max Infinity',
        price: 185.00,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Nike',
        rating: 4.8,
        reviews: 1243,
        stock: 12,
        description: 'The Nike Air Max Infinity puts air directly under your foot for a bouncy feel. It features a flexible sole inspired by the VaporMax to provide endless comfort.'
    },
    {
        id: 'ultraboost-x',
        title: 'Adidas UltraBoost X',
        price: 200.00,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Adidas',
        rating: 4.9,
        reviews: 3420,
        stock: 5,
        description: 'Experience ultimate energy return with the UltraBoost X. The Primeknit upper wraps the foot with a supportive fit that enhances movement.'
    },
    {
        id: 'classic-retro',
        title: 'Nike Classic Retro',
        price: 130.00,
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Nike',
        rating: 4.5,
        reviews: 890,
        stock: 2,
        description: 'A blast from the past. The Classic Retro brings 90s style back to the streets with premium leather and iconic swoosh detailing.'
    },
    {
        id: 'street-runner',
        title: 'Nike Street Runner',
        price: 150.00,
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Nike',
        rating: 4.3,
        reviews: 450,
        stock: 0,
        description: 'Built for the concrete jungle. Durable traction and responsive cushioning make this the perfect everyday sneaker.'
    },
    {
        id: 'rs-x-toys',
        title: 'Puma RS-X Toys',
        price: 110.00,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
        brand: 'Puma',
        rating: 4.6,
        reviews: 670,
        stock: 25,
        description: 'Celebrating the reinvention of toys in and beyond sneaker culture. Features bulky design, material mixes, and a bold color palette.'
    },
    {
        id: 'nb-574-core',
        title: 'New Balance 574 Core',
        price: 90.00,
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'New Balance',
        rating: 4.7,
        reviews: 5120,
        stock: 8,
        description: 'The 574 is a clean and classic die-cut EVA sneaker. Unapologetically defies trends and delivers reliable comfort.'
    },
    {
        id: 'old-skool',
        title: 'Vans Old Skool Classic',
        price: 70.00,
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Vans',
        rating: 4.8,
        reviews: 8900,
        stock: 40,
        description: 'The iconic Vans classic skate shoe. First to bear the iconic side stripe, it features low-top lace-up styling with durable suede.'
    },
    {
        id: 'air-force-1',
        title: 'Nike Air Force 1 Low',
        price: 115.00,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Nike',
        rating: 4.9,
        reviews: 12400,
        stock: 3,
        description: 'The radiance lives on in the Nike Air Force 1 07, the b-ball icon that puts a fresh spin on what you know best.'
    },
    {
        id: 'nike-blazer',
        title: 'Nike Blazer Mid 77',
        price: 105.00,
        image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Nike',
        rating: 4.7,
        reviews: 3200,
        stock: 18,
        description: 'In the 70s, shoes were simple. The Blazer Mid 77 harnesses the old-school look of Nike b-ball with a vintage midsole finish.'
    },
    {
        id: 'adidas-nmd',
        title: 'Adidas NMD R1',
        price: 140.00,
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Adidas',
        rating: 4.6,
        reviews: 4120,
        stock: 7,
        description: 'Pack your bag, lace up and get going. City adventures beckon in these NMD_R1 shoes. An update to an acclaimed 80s runner.'
    },
    {
        id: 'jordan-1-high',
        title: 'Air Jordan 1 Retro High',
        price: 170.00,
        image: 'https://images.unsplash.com/photo-1579338559194-a162d19bc84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Nike',
        rating: 5.0,
        reviews: 18500,
        stock: 1,
        description: 'The Air Jordan 1 High OG represents the pinnacle of sneaker culture. Classic design, premium leather, and the ultimate flex.'
    },
    {
        id: 'air-max-90',
        title: 'Nike Air Max 90',
        price: 130.00,
        image: 'https://images.unsplash.com/photo-1584735174965-48c48d7028a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Nike',
        rating: 4.8,
        reviews: 6700,
        stock: 14,
        description: 'Clean lines, versatile and timeless. The people’s shoe returns with the Nike Air Max 90. Featuring the same iconic Waffle sole.'
    },
    {
        id: 'puma-suede',
        title: 'Puma Suede Classic',
        price: 75.00,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Puma',
        rating: 4.5,
        reviews: 2100,
        stock: 35,
        description: 'The Suede hit the scene in 1968 and has been changing the game every day since. It has been worn by icons of every generation.'
    },
    {
        id: 'nb-990v5',
        title: 'New Balance 990v5',
        price: 185.00,
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'New Balance',
        rating: 4.9,
        reviews: 840,
        stock: 4,
        description: 'A blend of great cushioning and style, this shoe looks as good on your morning run as it does on the runway.'
    },
    {
        id: 'vans-slip-on',
        title: 'Vans Checkerboard Slip-On',
        price: 60.00,
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Vans',
        rating: 4.7,
        reviews: 14200,
        stock: 50,
        description: 'The Classic Slip-On features sturdy low profile canvas uppers with the iconic Vans checkerboard print, padded collars, and elastic side accents.'
    },
    {
        id: 'adidas-stan-smith',
        title: 'Adidas Stan Smith',
        price: 100.00,
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Adidas',
        rating: 4.8,
        reviews: 11000,
        stock: 22,
        description: 'Clean and minimalist. The Stan Smith continues to be a staple in sneaker rotations worldwide with its smooth white leather and perforated 3-Stripes.'
    },
    {
        id: 'nike-dunk-low',
        title: 'Nike Dunk Low Panda',
        price: 110.00,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Nike',
        rating: 4.6,
        reviews: 5600,
        stock: 0,
        description: 'Created for the hardwood but taken to the streets, the 80s b-ball icon returns with perfectly shined overlays and classic team colors.'
    },
    {
        id: 'yeezy-boost-350',
        title: 'Adidas Yeezy Boost 350',
        price: 230.00,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Adidas',
        rating: 4.7,
        reviews: 9500,
        stock: 2,
        description: 'The YEEZY BOOST 350 V2 features an upper composed of re-engineered Primeknit. The post-dyed monofilament side stripe is woven into the upper.'
    },
    {
        id: 'asics-gel-lyte',
        title: 'Asics Gel-Lyte III',
        price: 120.00,
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Asics',
        rating: 4.5,
        reviews: 1300,
        stock: 9,
        description: 'The GEL-LYTE III OG sneaker emerges once again with its original shape and tooling that it featured in the early 1990s.'
    },
    {
        id: 'nike-pegasus',
        title: 'Nike Air Zoom Pegasus',
        price: 125.00,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        brand: 'Nike',
        rating: 4.8,
        reviews: 4200,
        stock: 31,
        description: 'Your workhorse with wings returns. The Nike Air Zoom Pegasus continues to put a spring in your step, using the same responsive foam as its predecessor.'
    }
];

// State
let cart = JSON.parse(localStorage.getItem('solemate_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('solemate_wishlist')) || [];
let currentProduct = null;
let currentSize = 10;
let currentCategory = 'All';
let currentSort = 'featured';

// Save State
function saveState() {
    localStorage.setItem('solemate_cart', JSON.stringify(cart));
    localStorage.setItem('solemate_wishlist', JSON.stringify(wishlist));
    updateBadges();
}

function updateBadges() {
    const cartBadge = document.getElementById('cart-badge');
    const wishBadge = document.getElementById('wishlist-badge');
    
    const cartTotal = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartTotal > 0) { cartBadge.innerText = cartTotal; cartBadge.classList.remove('hidden'); } 
    else { cartBadge.classList.add('hidden'); }

    if (wishlist.length > 0) { wishBadge.innerText = wishlist.length; wishBadge.classList.remove('hidden'); }
    else { wishBadge.classList.add('hidden'); }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
    updateBadges();
    applyFiltersAndSort();
    
    // Search listener
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.addEventListener('input', applyFiltersAndSort);

    // Sort listener
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            applyFiltersAndSort();
        });
    }

    // Category click listeners
    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => {
        cat.addEventListener('click', () => {
            categories.forEach(c => c.classList.remove('active'));
            cat.classList.add('active');
            currentCategory = cat.innerText;
            applyFiltersAndSort();
        });
    });

    // Size click listeners
    const sizeBoxes = document.querySelectorAll('.size-box');
    sizeBoxes.forEach(box => {
        box.addEventListener('click', () => {
            sizeBoxes.forEach(b => b.classList.remove('active'));
            box.classList.add('active');
            currentSize = parseInt(box.innerText);
        });
    });
});

// Navigation
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);

    if (pageId === 'cart-checkout') renderCart();
    if (pageId === 'wishlist-screen') renderWishlist();
}

// Logic: Filter & Sort
function applyFiltersAndSort() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput ? searchInput.value.toLowerCase() : '';

    let filtered = products.filter(p => true);

    if (currentCategory !== 'All') {
        filtered = filtered.filter(p => p.brand === currentCategory || p.brand === 'Vans'); // Mock behavior
    }
    
    if (query) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query));
    }

    // Sort
    if (currentSort === 'price-low') filtered.sort((a,b) => a.price - b.price);
    else if (currentSort === 'price-high') filtered.sort((a,b) => b.price - a.price);
    else if (currentSort === 'rating') filtered.sort((a,b) => b.rating - a.rating);

    document.getElementById('results-count').innerText = `${filtered.length} results`;
    renderProducts(filtered);
}

// Render Products Grid
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    
    if (items.length === 0) {
        grid.innerHTML = '<p style="grid-column: span 2; text-align: center; padding: 20px;">No exact matches found.</p>';
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => viewProduct(product.id);
        
        const isWished = wishlist.some(w => w.id === product.id);
        
        card.innerHTML = `
            <button class="heart-btn ${isWished ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${product.id}')">
                <i data-feather="heart" style="width:14px; height:14px;"></i>
            </button>
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-title">${product.title}</div>
            <div class="rating-row">
                <span class="stars">${getStars(product.rating)}</span>
                <span class="review-count">${product.reviews.toLocaleString()}</span>
            </div>
            <div class="product-price">
                <span>$</span>${Math.floor(product.price)}<span>${(product.price % 1).toFixed(2).substring(1)}</span>
            </div>
            <div class="delivery-tag">FREE Delivery Tomorrow</div>
        `;
        grid.appendChild(card);
    });
    feather.replace();
}

function getStars(rating) {
    const full = Math.round(rating);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
}

// Product Details
function viewProduct(id) {
    currentProduct = products.find(p => p.id === id);
    if (!currentProduct) return;

    document.getElementById('detail-image').src = currentProduct.image;
    document.getElementById('detail-brand').innerText = currentProduct.brand;
    document.getElementById('detail-title').innerText = currentProduct.title;
    document.getElementById('detail-stars').innerText = getStars(currentProduct.rating);
    document.getElementById('detail-reviews').innerText = `${currentProduct.reviews.toLocaleString()} ratings`;
    document.getElementById('detail-price').innerText = `$${currentProduct.price.toFixed(2)}`;
    document.getElementById('detail-description').innerText = currentProduct.description;

    const stockEl = document.getElementById('detail-stock');
    if (currentProduct.stock === 0) {
        stockEl.innerText = "Currently unavailable.";
        stockEl.className = "stock-status low-stock";
        document.getElementById('add-to-cart-btn').disabled = true;
        document.getElementById('add-to-cart-btn').style.opacity = 0.5;
    } else if (currentProduct.stock < 10) {
        stockEl.innerText = `Only ${currentProduct.stock} left in stock - order soon.`;
        stockEl.className = "stock-status low-stock";
        document.getElementById('add-to-cart-btn').disabled = false;
        document.getElementById('add-to-cart-btn').style.opacity = 1;
    } else {
        stockEl.innerText = "In Stock.";
        stockEl.className = "stock-status in-stock";
        document.getElementById('add-to-cart-btn').disabled = false;
        document.getElementById('add-to-cart-btn').style.opacity = 1;
    }

    // Next day delivery mock
    const tmrw = new Date(); tmrw.setDate(tmrw.getDate() + 1);
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    document.getElementById('detail-delivery').innerText = tmrw.toLocaleDateString('en-US', options);

    // Wishlist detail button
    const isWished = wishlist.some(w => w.id === currentProduct.id);
    const heartBtn = document.getElementById('detail-heart');
    if (isWished) heartBtn.style.color = "var(--primary)";
    else heartBtn.style.color = "#111";

    renderRelatedProducts();
    navigateTo('product-detail');
}

function renderRelatedProducts() {
    const scroll = document.getElementById('related-scroll');
    scroll.innerHTML = '';
    const related = products.filter(p => p.id !== currentProduct.id).sort(() => 0.5 - Math.random()).slice(0, 4);
    
    related.forEach(product => {
        const item = document.createElement('div');
        item.className = 'related-item';
        item.onclick = () => viewProduct(product.id);
        item.innerHTML = `
            <img src="${product.image}">
            <h4>${product.title}</h4>
            <div class="rating-row" style="margin-bottom:2px;">
                <span class="stars">${getStars(product.rating)}</span>
                <span class="review-count">${product.reviews}</span>
            </div>
            <p>$${product.price.toFixed(2)}</p>
        `;
        scroll.appendChild(item);
    });
}

// Cart Logic
function addToCart() {
    if (currentProduct && currentProduct.stock > 0) {
        addToCartObj(currentProduct, currentSize);
        showToast(`Added to Cart`);
    }
}

function addToCartObj(product, size) {
    const existing = cart.find(item => item.id === product.id && item.size === size);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, size, quantity: 1 });
    }
    saveState();
}

function updateQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveState();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveState();
    renderCart();
}

function saveForLater(index) {
    const item = cart[index];
    removeFromCart(index);
    if (!wishlist.some(w => w.id === item.id)) {
        wishlist.push(products.find(p => p.id === item.id));
    }
    saveState();
    showToast('Saved for later');
}

function renderCart() {
    const list = document.getElementById('cart-list');
    list.innerHTML = '';

    if (cart.length === 0) {
        list.innerHTML = '<p style="text-align:center;">Your Amazon Cart is empty.</p>';
        updateSummary();
        document.querySelector('#cart-checkout .btn-primary').disabled = true;
        document.querySelector('#cart-checkout .btn-primary').style.opacity = '0.5';
        return;
    }

    document.querySelector('#cart-checkout .btn-primary').disabled = false;
    document.querySelector('#cart-checkout .btn-primary').style.opacity = '1';

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-size">Size: ${item.size}</div>
                
                <div class="cart-actions">
                    <div class="quantity-toggle">
                        <button onclick="updateQty(${index}, -1)"><i data-feather="minus" style="width:12px;"></i></button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQty(${index}, 1)"><i data-feather="plus" style="width:12px;"></i></button>
                    </div>
                    <div class="action-links">
                        <span onclick="removeFromCart(${index})">Delete</span> | 
                        <span onclick="saveForLater(${index})">Save for later</span>
                    </div>
                </div>
            </div>
        `;
        list.appendChild(div);
    });
    feather.replace();
    updateSummary();
}

function updateSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const delivery = subtotal > 0 ? 0.00 : 0; // Free delivery mock
    const total = subtotal + tax + delivery;

    document.getElementById('summary-subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('summary-tax').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('summary-delivery').innerText = `$${delivery.toFixed(2)}`;
    document.getElementById('summary-total').innerText = `$${total.toFixed(2)}`;
}

// Wishlist Logic
function toggleWishlist(id) {
    const idx = wishlist.findIndex(w => w.id === id);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('Removed from Wishlist');
    } else {
        const product = products.find(p => p.id === id);
        wishlist.push(product);
        showToast('Added to Wishlist');
    }
    saveState();
    applyFiltersAndSort(); // re-render grid to update hearts
}

function toggleWishlistDetail() {
    if (!currentProduct) return;
    toggleWishlist(currentProduct.id);
    
    // update button UI
    const isWished = wishlist.some(w => w.id === currentProduct.id);
    const heartBtn = document.getElementById('detail-heart');
    if (isWished) heartBtn.style.color = "var(--primary)";
    else heartBtn.style.color = "#111";
}

function renderWishlist() {
    const list = document.getElementById('wishlist-list');
    list.innerHTML = '';

    if (wishlist.length === 0) {
        list.innerHTML = '<p style="text-align:center;">Your Wishlist is empty.</p>';
        return;
    }

    wishlist.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-img" onclick="viewProduct('${item.id}')" style="cursor:pointer;">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-info">
                <h4 onclick="viewProduct('${item.id}')" style="cursor:pointer;">${item.title}</h4>
                <div class="rating-row" style="margin-bottom:4px;">
                    <span class="stars">${getStars(item.rating)}</span>
                    <span class="review-count">${item.reviews}</span>
                </div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                
                <div class="action-links" style="margin-top: 12px;">
                    <span onclick="toggleWishlist('${item.id}'); renderWishlist();">Remove</span> | 
                    <span onclick="viewProduct('${item.id}')">View Details</span>
                </div>
            </div>
        `;
        list.appendChild(div);
    });
    feather.replace();
}

// Toast Notification
let toastTimeout;
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.add('show');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2000);
}

// Checkout
function processCheckout() {
    if (cart.length === 0) return;
    navigateTo('checkout-form-screen');
}

function submitOrder(event) {
    event.preventDefault(); // Prevent page reload on form submit
    document.getElementById('checkout-modal').classList.add('show');
    cart = [];
    saveState();
    renderCart();
    // Clear form inputs
    document.getElementById('checkout-form').reset();
}

function closeModal() {
    document.getElementById('checkout-modal').classList.remove('show');
    navigateTo('home-screen');
}
