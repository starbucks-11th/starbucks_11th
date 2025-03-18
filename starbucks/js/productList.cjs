window.addEventListener('DOMContentLoaded', () => {
  requestProductList();
});

async function requestProductList() {
  const response = await fetch('http://localhost:3000/productList');
  const productList = await response.json();

  const productsContainer = document.querySelector('.products');
  let rowContainer;

  productList.forEach((product, idx) => {
    if (idx % 4 === 0) {
      rowContainer = document.createElement('div');
      rowContainer.classList.add('row');
      productsContainer.appendChild(rowContainer);
    }

    const productContainer = document.createElement('div');
    productContainer.classList.add('productContainer');

    const img = document.createElement('img');
    img.src = product.imgUrl;

    const p = document.createElement('p');
    p.innerText = product.name;

    productContainer.appendChild(img);
    productContainer.appendChild(p);

    rowContainer.appendChild(productContainer);
  });
}
