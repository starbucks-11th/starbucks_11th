document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.querySelectorAll('.cartItem');

  cartItems.forEach((item) => {
    const decreaseBtn = item.querySelector('.decrease');
    const increaseBtn = item.querySelector('.increase');
    const countSpan = item.querySelector('.count');
    const priceElement = item.querySelector('.price');
    const productPriceElement = item.querySelector('.productPrice');

    const productPrice = parseInt(
      productPriceElement.textContent.replace('원', '').replace(',', ''),
      10
    );

    function updateCount(change) {
      let currentCount = parseInt(countSpan.textContent, 10);
      let newCount = currentCount + change;

      if (newCount < 0) return;

      countSpan.textContent = newCount;
      priceElement.textContent =
        (newCount * productPrice).toLocaleString() + '원';

      updateTotalCount();
    }

    if (decreaseBtn) {
      decreaseBtn.addEventListener('click', () => updateCount(-1));
    }

    if (increaseBtn) {
      increaseBtn.addEventListener('click', () => updateCount(1));
    }
  });

  // 상품 총 개수 계산
  function updateTotalCount() {
    let totalCount = 0;
    const cartItems = document.querySelectorAll('.cartItem');

    cartItems.forEach((item) => {
      const countSpan = item.querySelector('.count');

      if (countSpan) {
        totalCount += parseInt(countSpan.textContent, 10);
      }
    });

    const totalCountElement = document.querySelector('.totalCount');
    if (totalCountElement) {
      totalCountElement.textContent = `총 ${totalCount}개 / 20개`;
    }

    updateTotalPrice();
  }

  //   상품 총 가격(totalPrice) 계산
  function updateTotalPrice() {
    let total = 0;
    const cartItems = document.querySelectorAll('.cartItem');

    cartItems.forEach((item) => {
      const price = item.querySelector('.price');
      const countSpan = item.querySelector('.count');

      const productPrice = parseInt(
        price.textContent.replace('원', '').replace(',', ''),
        10
      );
      total += productPrice; // 총 가격 합산
    });

    const totalPriceElement = document.querySelector('.totalPrice');
    if (totalPriceElement) {
      totalPriceElement.textContent = total.toLocaleString() + '원';
    }
  }
});
