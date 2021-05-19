import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Card} from 'react-bootstrap'
import {removeCart} from '../redux/Action_Creator'

export class Cart extends Component {

render() {

   const cart ={ display : "flex",width : "40rem",height: "15rem" }
        return (
            <div style={{margin : "70px  0px 0px 0px ",
                        display: "flex",
                        padding : "10px",
                         flexDirection: "column",
                         position: "absolute",
                         zIndex: "-1",}}>
                
              { this.props.products.length >0 ? this.props.products.map(data=>{
                        return(
                             <Card style={cart}>
                                <div className="container">
                                   <div className="row">
                                     <div className="col">
                                           <img   src={data.image}  height ="50px"  width="100px" alt="dummy"/>
                                     </div>  
                                      <div className="col">
                                          <p>{data.title}</p>
                                          <p>{data.price}</p>
                                     </div>
                                     </div>
                                     <div className="row d-flex justify-content-between">
                                        <div className="col">
                                          <label>Quantity</label>
                                          <p>{data.quantity}</p>  
                                     </div>
                                     <div className="col">
                                         Total Price <p>{data.price * data.quantity}</p>
                                         <input className="btn btn-danger" value="Remove" onClick={()=>this.props.removeCart(data)}/>
                                     </div>
                                    </div>
                                 </div>
                              </Card> 
                         )}) : <div className="d-flex justify-content-center">Cart is Empty </div> }
              {this.props.products.length>0 ?   <button className="btn btn-success">Place Order</button> :<div></div>}
             </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {products: state.root.CartItem }
};

const mapDispatchToProps = (dispatch) => {
   return {removeCart: (item)=> dispatch(removeCart(item)) }
};


export default connect(mapStateToProps,mapDispatchToProps)(Cart)
