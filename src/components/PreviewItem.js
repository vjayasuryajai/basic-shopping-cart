import React from 'react'
import {Card}  from 'react-bootstrap'
import {connect} from 'react-redux'
import { addCart } from '../redux/Action_Creator'
import { useHistory } from 'react-router-dom';

function PreviewItem({id, image,description,price,title,data,products,addCart}) {

const it ={
height : "430px",
width:  "650px"

}

 /*  const Addcart =(id)=>{
    console.log("surya")
console.log(id)
addCart(id)
console.log(products)

}*/
const History = useHistory()


 const ShopNow=()=>{
    History.push('/')

}

    return (
        <>

        <div className="container-fluid m-2"   >
          <div className="row">

            <div className="col"  >
               <Card  style={it}>
                 <Card.Img    src ={image}   height="350px" width="300px"/>  
                   <Card.Body className="d-flex justify-content-between">
                    <input 
                     className="btn btn-warning" 
                      value="Add To Cart"
                      onClick={()=>addCart(data)}
                      />
                    <input 
                     className="btn btn-warning" 
                      value="Shop" 
                      onClick={ShopNow}
                      /> 
                  </Card.Body>
                </Card>
            </div>

             <div className="col" >
                  <p>{title}</p>
                  <span>Price</span> <h6>${price}</h6>
                 <span>Description</span>  <p>{description}</p>
             
             </div>
            </div>
    </div>
 



        </>
    )
}


const mapStateToProps = (state) => {
    console.log(state.root.CartItem)
    return {
        products: state
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCart: (product) => {
            dispatch(addCart(product));
        }
    }
};



export default connect(mapStateToProps,mapDispatchToProps)(PreviewItem)
