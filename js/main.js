/* jshint esversion: 6 */

const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.2
};

const starsTotal = 5;

// Get ratings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings());

// Grab form elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Initialize product
let product;

productSelect.addEventListener('change', (e) => {
  product = e.target.value;
  console.log(product);
  // Enable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
  console.log(ratings[product]);
});

ratingControl.addEventListener('blur', (e) => {
  const rating = e.target.value;

  if(rating > 5) {
    alert('Please rate 1 - 5');
    return;
  }

  // Change the rating
  ratings[product] = rating;

  getRatings();
});

function getRatings() {
  for (let rating in ratings) {
    // Get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;
    // console.log(starPercentage);

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    // console.log(starPercentageRounded);

    // Set width of stars-inner to starPercentage
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  }
}
