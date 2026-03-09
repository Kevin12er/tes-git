const products = [
  {
    name: "Keyboard Mechanical",
    price: "Rp 550.000",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400",
  },
  {
    name: "Mouse Gaming Wireless",
    price: "Rp 320.000",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
  },
  {
    name: "Headphone Noise Cancelling",
    price: "Rp 1.200.000",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    name: "Smartwatch Sport",
    price: "Rp 850.000",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  },

  {
    name: "Charger Laptop",
    price: "Rp 700.000",
    image: "https://images.unsplash.com/photo-1756043827116-5764e6d23d85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYXJnZXIlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
  },

  {
    name: "Gaming Chair",
    price: "Rp. 1.420.000",
    image: "https://images.unsplash.com/photo-1770194993269-2521ad916c23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdhbWluZyUyMGNoYWlyfGVufDB8fDB8fHww",
  },

  {
    name: "CPU GAMING",
    price: "Rp. 450.000",
    image: "https://images.unsplash.com/photo-1658673609646-9c7ba9514b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwY3B1fGVufDB8fDB8fHww",
  }
];

const container = document.getElementById("product-container");

// 2. Loop data dan render ke HTML
products.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";

  // Kita tambahkan tag <img> yang mengambil data dari item.image
  card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="card-body">
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                </div>
                <button>Tambah ke Keranjang</button>
            `;

  container.appendChild(card);
});

