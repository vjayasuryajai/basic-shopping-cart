import React, { Component } from 'react'
import './Header.css'
import {Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { AiFillHome ,AiOutlineShoppingCart } from "react-icons/ai";
import './Header.css'
import {connect} from 'react-redux'
import { addCart } from '../redux/Action_Creator'
export class Header extends Component {



    render() {
        return (
           <>
            <div className="header">
                <Navbar bg="light" expand="lg"  className="d-flex justify-content-between ">
                   <Link  to="/"  width="50px"> 
                      <div  className="m-2">
                           <Navbar.Brand > <AiFillHome /></Navbar.Brand>
                      </div>
                      </Link>
          
                 <form onSubmit={this.onsubmit}> 
                   <input  width="50px" placeholder="Search Products" />
                   <button className="btn-success">Search</button> 
                 </form>

                 <div className="">
                     <button className="btn-success m-2">Login</button> 
                     <Link to="/cart">
                      <button className="btn-success m-2"><AiOutlineShoppingCart />{this.props.products.length}</button> 
                     </Link> 
                  </div>   
                </Navbar>  
             </div>
            </>
        )
    }
}



const mapStateToProps = (state) => {
  //console.log(state)
  return {
    products: state.root.CartItem
      
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      addCart: (product) => {
          dispatch(addCart(product));
      }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Header)
