import FetchData from "../hooks/fetchDataHook";

export default function CustomHook1() {
  const data = FetchData("https://fakestoreapi.com/products");

  if (!data || data.length === 0) {
    return (
      <div className="container-fluid">
        <h3><u>Products</u></h3>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <h3><u>Products</u></h3>
      <ol>
        {
          data.map(x => 
            <li key={x.id}>{x.title}</li> 
          )
        }
      </ol>
    </div>
  );
}
