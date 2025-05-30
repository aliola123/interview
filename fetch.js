fetch('https://dummyjson.com/products')

      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('productContainer');
        
        data.products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'product-det';
          productCard.innerHTML = `
            <img src="${product.images[0]}" alt="${product.title}" />
            <p class="product-title"><strong>${product.title}</strong></p>
            <p>${product.description}</p>
            <div class="price-container"><p class="product-price">$ ${product.price}</p></div>
          `;
          container.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error loading products:', error));

      