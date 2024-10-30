import { map } from "jquery";
import { useState } from "react";

export default function DataBindFun() {

    /*    var product = {
            Name: 'Samsung TV',
            Price: 12000.0,
            Stock: true
        }

        return(
            <div className="container-fluid">
                <h2>Product Details</h2>
                Name: {product.Name} <br />
                Price: {product.Price} <br />
                Stock: {product.Stock == true ? 'Available' : 'Not Available'} <br />
                <input type="text" value={product.Name} />
            </div>
        )
    */




   /* var categories = ["All","Electronics","Jewellery","Footwear"]
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
*/



   /* var categories = [
        {Name:"Samsumg TV",Price: 23000.0},
        {Name:"Washing Machine",Price: 24000.0},
        {Name:"Refrigerator",Price: 18000.0}
    ];

    return(
        <div className="container-fluid">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map(category=>
                            <tr>
                                <td>{category.Name}</td>
                                <td>{category.Price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
    */



   /* var menu = [
        { Category: "Electronics", Products: ["TV", "Refrigerator", "Gyser"] },
        { Category: "Jewellery", Products: ["Diamond", "Silver", "Gold"] },
        { Category: "Footwear", Products: ["Slippers", "Sandals", "Shoes"] }
    ]

    return (
        <div className="container-fluid">
            <ol>
                {
                    menu.map(submenu =>
                        <li key={submenu.Category}>{submenu.Category}
                            <ul>
                                {
                                    submenu.Products.map(product =>
                                        <li key={product}>{product}</li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>

            <h2>Select a Menu</h2>
            <select>
                {
                    menu.map(submenu=>
                        <optgroup key={submenu.Category} label={submenu.Category}>
                            {
                            submenu.Products.map(product=>
                            <option value={product}>{product}</option>
                            )
                        }
                        </optgroup>
                    )
                }
            </select>

        </div>
    )
        */


    const [gett,sett] = useState(["TV","Gyser"]);

    return(
        <div>
            <ol>
                {
                    gett.map(prod=>
                    <li key={prod}>{prod}</li>
                    )
                }
            </ol>
        </div>
    )



















}