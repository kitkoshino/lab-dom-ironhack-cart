// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const $price = product.querySelector('.price span').innerText;
  const $quantity = product.querySelector('.quantity input').value;
  console.log('Preço:', $price);
  console.log('Valor:', $quantity);

  const subTotal = $price * $quantity;
  console.log('Subtotal:', subTotal);

  let $subTotal = product.querySelector('.subtotal span');

  $subTotal.innerText = subTotal;

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //  const singleProduct = document.querySelector('.product');
  //  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  console.log(allProducts);

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    total = total + updateSubtotal(allProducts[i]);
  }
  console.log('Total', total);

  // ITERATION 3
  //... your code goes here
  const $total = document.querySelector('#total-value span');
  $total.innerText = `${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const $newProductName = document.getElementById('new-product').value;
  const $newProductPrice = document.getElementById('new-price').value;

  const $tbodyTable = document.getElementsByTagName('tbody')[0];
  const $tr = document.createElement('tr');
  $tr.setAttribute('class', 'product');

  $tr.innerHTML = `<td class="name">
  <span>${$newProductName}</span>
  </td>
  <td class="price">$<span>${$newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

  $tbodyTable.appendChild($tr);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
