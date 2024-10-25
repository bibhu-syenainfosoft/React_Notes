export default function DataBindFun(){

//     var product = {
//         Name: 'Samsung TV',
//         Price: 12000.0,
//         Stock: true
//     }

//     return(
//         <div className="container-fluid">
//             <h2>Product Details</h2>
//             Name: {product.Name} <br />
//             Price: {product.Price} <br />
//             Stock: {product.Stock == true ? 'Available' : 'Not Available'} <br />
//             <input type="text" value={product.Name} />
//         </div>
//     )


var categories = ["All","Electronics","Jewellery","Footwear"]
return(
    <div className="container-fluid">
        <h2>Category Details</h2>
        
        <ol>
            {
                // categories.toString()
                categories.map(category =>
                    <li key={category}>{category}</li>
                )
            }
        </ol> 

        <select>
            {
                categories.map(category=>
                    <option value={category}>{category}</option>
                )

            } 
        </select> 
    </div>
)
}