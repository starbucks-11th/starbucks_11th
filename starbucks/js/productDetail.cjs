window.addEventListener('DOMContentLoaded', () => {
  requestProductDetail();
});
async function requestProductDetail() {
  const response = await fetch('http://localhost:3000/productDetail');
  const jsonData = await response.json();

  document.getElementById('product-type').innerText = jsonData.productType;
  document.getElementById('product-name').innerText = jsonData.productName;
  document.getElementById('product-name-eng').innerText =
    jsonData.productNameEng;
  document.getElementById('product-explanation').innerText =
    jsonData.productExplanation;
  document.getElementById('product-size').innerText = jsonData.size;

  document.getElementById('calories').innerText = jsonData.nutrition.calories;
  document.getElementById('saturated-fat').innerText =
    jsonData.nutrition.saturatedFat;
  document.getElementById('protein').innerText = jsonData.nutrition.protein;
  document.getElementById('sodium').innerText = jsonData.nutrition.sodium;
  document.getElementById('sugar').innerText = jsonData.nutrition.sugar;
  document.getElementById('caffeine').innerText = jsonData.nutrition.caffeine;

  document.getElementById(
    'allergens'
  ).innerText = `알레르기 유발요인 : ${jsonData.allergens}`;

  document.getElementById('product-image').src = jsonData.imgUrl;

  document.getElementById('product-description').innerText =
    jsonData.productExplanation;
}
