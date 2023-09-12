var productViews = new WeakMap();

var cartItems  = new WeakSet();

function incrementProductViews(product) {
  if (productViews.has(product)) {
    let currentNo = productViews.get(product);
    productViews.set(product, currentNo + 1);
    total_views = currentNo+1
   
  } else {
    productViews.set(product, 1);
    console.log("product ID "+ product.item_id + " viewed for the 1st time");
  }
}

function addToCart(product) {
  if (cartItems.has(product)) {
    return "This Product is already  present in your cart";
  } else {
    cartItems.add(product);
    return "This Product is added to your cart";
  }
}

const product = {"id":245};

incrementProductViews(product);
incrementProductViews(product);
incrementProductViews(product);

console.log(addToCart(product)); 
console.log(addToCart(product)); 
console.log(addToCart(product)); 