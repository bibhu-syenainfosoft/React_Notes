import { useEffect, useState } from "react";

export default function FakeStoreAPI() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  function loadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        setCategories(data);
        data.unshift('ALL');
      });
  }

  function loadProducts(url) {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        setProducts(data)
      });
  }

  function updateCartItems(e) {
    alert("Item added to cart: "+e.target.id)
    fetch(`http://fakestoreapi.com/products/${e.target.id}`)
      .then(response => {
        if (response.ok) {
          response.json();
        }
      }).then(data => {
        // cartItems.push(data);
        // getCartItemsCount();
        setCartItems(prevItems => [...prevItems, data]);
      })
  }

function getCartItemsCount(){
  setCartItemsCount(cartItems?.length)
}

function LoadCorrespondingProducts(e) {
  if (e.target.value == "ALL") {
    loadProducts("https://fakestoreapi.com/products");
  }
  else {
    loadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
  }
}

useEffect(() => {
  loadCategories();
  loadProducts("https://fakestoreapi.com/products")
}, [])

return (
  <div className="container-fluid">
    <header className="bg-dark text-white text-center p-2">
      <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
    </header>
    <section className="row mt-3">
      <nav className="col-2">
        <div>
          <label>Select a Category</label>
          <div>
            <select onChange={LoadCorrespondingProducts} className="form-select" >
              {
                categories.map(value =>
                  <option value={value} key={value}>{value.toUpperCase()}</option>
                )
              }
            </select>
          </div>
        </div>
      </nav>
      <main className="col-6 d-flex flex-wrap overflow-auto" style={{ height: '600px' }} >
        {
          products.map(product =>
            <div key={product.id} className="card m-2 p-2" style={{ width: '200px' }}>

              <img className="card-img-top" alt="Img Not Found" src={product?.image} height="150" />
              <div className="card-header" style={{ height: '160px' }}>
                <p>{product.title}</p>
              </div>
              <div className="card-body">
                <dl>
                  <dt>Price</dt>
                  <dd>{product?.price}</dd>
                  <dt>Rating</dt>
                  <dd>
                    <span className="bi bi-star-fill text-success"></span>
                    <span>{product?.rating?.rate}</span>
                  </dd>
                </dl>
              </div>
              <div className="card-footer">
                <button id={product.id} onClick={updateCartItems} className="btn btn-warning w-100">
                  <span className="bi bi-cart4"></span> Add to Cart
                </button>
              </div>
            </div>
          )}
      </main>
      <aside className="col-4">
        <button className="btn btn-dark w-75">
          <span className="bi bi-cart3"></span> [{cartItemsCount}] Your Cart Items
        </button>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </aside>
    </section>
  </div>

)
}
