import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import PreviewItem from './PreviewItem'

export class Preview extends Component {


    constructor(props) {
        super(props)
        console.log(this.props)
    }
    
    render() {
         
        const {id} = this.props.match.params
        return (
            <div style={{margin: "70px 0px 0px 0px" ,}}> 
          {
         this.props.item.filter(item =>  item.id === parseInt(id)).map( data =>{
            return(<PreviewItem 
                    data={data}
                    key={data.id}
                    id ={data.id}
                    description = {data.description}
                    image={data.image}
                    price={data.price}
                    title={data.title}
                    category={data.category}/>
                   )})

             }
            </div>
        )
    }
}

export default  withRouter(Preview)
