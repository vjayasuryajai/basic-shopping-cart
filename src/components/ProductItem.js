import React from 'react'
import {Card} from 'react-bootstrap'
import './ProductItem.css'
import {Link} from 'react-router-dom'

function ProductItem({id,image,price,title}) {
    return (

    <Link to= {'/item/'+ id}  style={{ textDecoration: 'none' }}>
        <div className="full">
           <Card  className="Product-item">
             <ul>
               <img src={image} height ="200px" width="200px" alt="price"/>
                 <li>{title}</li>
             </ul>
           </Card>
       </div>
    </Link>
    )
}

export default ProductItem
