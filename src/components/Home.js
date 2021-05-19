import React, { Component } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'
import './Home.css'
import { FaSpinner } from "react-icons/fa";
export class Home extends Component {


    constructor(props) {
        super(props)
        this.state ={

            ProdctData : []
        }
    this.fetchData = this.fetchData.bind(this)
       
    }
    

componentDidMount(){

this.fetchData()


}

fetchData=()=>{
console.log("Indide data")
 axios.get(`https://fakestoreapi.com/products/`)
 .then(data => {

    this.setState({ProdctData :data.data})

   // console.log(this.state.ProdctData)
 })
 .catch(err=> console.log(err))


}


    render() {
        const {ProdctData} =this.state
        return (
            <div className="Home" >
               
               {
                ProdctData.length >0 ?
                    
                ProdctData.map(item => {


                    return(
                         <ProductItem 
                         key ={item.id}
                         title={item.title}
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            description={item.description}
                                  />)
                })

                 : <div > <FaSpinner  className="Spinner"/> </div>
               }
               
            </div>
        )
    }
}

export default Home
