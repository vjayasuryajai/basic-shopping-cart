
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import Preview from './components/Preview'
import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import axios from 'axios'
 class App extends Component {

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
        //console.log("Indide data")
        axios.get(`https://fakestoreapi.com/products/`)
        .then(data => {
        this.setState({ProdctData :data.data})
        //console.log(this.state.ProdctData)
                      })
         .catch(err=> console.log(err))
                  }

     render() {
        return (
         <Router>
           
             <Header/>
             
              <Switch>
                  <Route  exact path='/' component={Home} />
                  <Route  path='/cart' component={Cart} />
                  <Route  path='/item/:id' >
                   <Preview  item={this.state.ProdctData}/>
                  </Route>
               </Switch>
  
        </Router>
    );
}


}

export default App