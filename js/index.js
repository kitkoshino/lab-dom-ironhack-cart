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
  const $currentRow = $tbodyTable.insertRow(); //cria nova linha

  $currentRow.setAttribute('class', 'product');

  // CELULA NOME
  const $nameCell = $currentRow.insertCell(); //cria nova coluna
  $nameCell.setAttribute('class', 'name');
  $nameCell.innerHTML = `$<span>${$newProductName}</span>`;

  // CELULA PRECO
  const $priceCell = $currentRow.insertCell(); //cria nova coluna
  $priceCell.setAttribute('class', 'price');
  $priceCell.innerHTML = `$<span>${$newProductPrice}</span>`;

  // CELULA QTDADE
  /* const $inputQtd = document.createElement('input'); //Cria um elemento input
  $inputQtd.setAttribute('type', 'number');
  $inputQtd.setAttribute('value', '0');
  $inputQtd.setAttribute('min', '0');
  $inputQtd.setAttribute('placeholder', 'Quantity'); */

  const $quantityCell = $currentRow.insertCell();
  $quantityCell.setAttribute('class', 'quantity');
  $quantityCell.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`;
  // $quantityCell.appendChild($inputQtd); // Para adicionar um elemento

  // CELULA SUBTOTAL
  const $subtotalCell = $currentRow.insertCell();
  $subtotalCell.setAttribute('class', 'subtotal');
  $subtotalCell.innerHTML = '$<span>0</span>';

  // CELULA BTN REMOVE
  const $removeCell = $currentRow.insertCell();
  $removeCell.setAttribute('class', 'action');
  $removeCell.innerHTML = '<button class="btn btn-remove">Remove</button>'
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
