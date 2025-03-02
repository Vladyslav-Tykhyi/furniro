'use strict';

import productImage from '/img/pagination/pagination.png';

const listOfProducts = document.querySelector('.products-list');

const products = [
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
  {
    image: productImage,
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
  },
];

function productMarkUp(products) {
  return products
    .map(
      ({ image, title, description, price }) => `
 <li class="products-list-item overlay-card">
        <div class="overlay-wrapper">
          <picture>
            <source
              srcset="
                ./img/pagination/pagination.png    1x,
                ./img/pagination/pagination@2x.png 2x
              "
              media="(max-width:320px)"
            />
            <img
              src="${image}"
              alt="Furniro-products"
              class="furniture-right-img"
            />
          </picture>
          <div class="products-item-dscrp">
            <h3 class="products-dscrp-title">${title}</h3>
            <p class="products-dscrp-text">${description}</p>
            <p class="products-dscrp-price">Rp ${price}</p>
          </div>
          <div class="overlay-block">
            <button class="overlay-btn shadow-inset-center" type="button">
              Add to cart
            </button>
            <ul class="overlay-list">
              <li class="overlay-item pulsate-fwd">
                <a class="overlay-item-text" href="#"
                  ><svg width="16" height="16" class="overlay-icon">
                    <use href="./img/icons.svg#icon-share"></use>
                  </svg>
                  Share</a
                >
              </li>
              <li class="overlay-item pulsate-fwd">
                <a class="overlay-item-text" href="#">
                  <svg width="14" height="14" class="overlay-icon">
                    <use href="./img/icons.svg#icon-arrows"></use>
                  </svg>
                  Compare</a
                >
              </li>
              <li class="overlay-item pulsate-fwd">
                <a class="overlay-item-text" href="#">
                  <svg width="16" height="16" class="overlay-icon">
                    <use href="./img/icons.svg#icon-heart"></use>
                  </svg>
                  Like</a
                >
              </li>
            </ul>
          </div>
        </div>
      </li>
  `
    )
    .join('');
}

const showMoreBTN = document.querySelector('.pagination-btn');

let currentPage = 0;
const itemsPerPage = 4;
const totalProducts = products.length;

function checkProductsQuantity() {
  const arr = Array.from(listOfProducts.children);
  const remainingProducts = totalProducts - arr.length;

  if (remainingProducts <= 0) {
    showMoreBTN.disabled = true;
    showMoreBTN.style.backgroundColor = 'red';
    showMoreBTN.style.color = '#fff';
    showMoreBTN.textContent = 'There are no more products';
    return;
  }

  const batchSize = Math.min(itemsPerPage, remainingProducts);

  const start = currentPage * itemsPerPage;
  const end = start + batchSize;
  const productsToShow = products.slice(start, end);

  listOfProducts.insertAdjacentHTML('beforeend', productMarkUp(productsToShow));

  currentPage++;

  if (totalProducts - listOfProducts.children.length === 0) {
    showMoreBTN.disabled = true;
    showMoreBTN.style.backgroundColor = 'red';
    showMoreBTN.style.color = '#fff';
    showMoreBTN.textContent = 'No more products available.';
  }
}

showMoreBTN.addEventListener('click', checkProductsQuantity);
