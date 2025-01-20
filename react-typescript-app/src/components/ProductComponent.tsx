import {useEffect, useState} from 'react';
import { ProductContract } from "./ProductContract"
export function ProductComponent(){
    const [product,setProduct] = useState<ProductContract>();
    useEffect(()=>{
        setProduct({
            Name: 'TV',
            Price: 23400,
            Stock:true
        });
    },[]);
    return(
        <div className='container-fluid'>
            <dl>
                <dt>Product Name</dt>
                <dd>{product?.Name}</dd>
                <dt>Product Price</dt>
                <dd>{product?.Price}</dd>
                <dt>Product Stock</dt>
                <dd>{product?.Stock==true?'Available':'Out od Stock'}</dd>
            </dl>


        </div>
    )
}
