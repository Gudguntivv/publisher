import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Firebase, { db } from "../firebase";
import "./displaypost.css"


class displaypost extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            data:[],
        }
    }
   async componentDidMount(){
       let Data=this.state.data;
    await Firebase
       .database()
       .ref('data')
       .on("value",(list)=>{
           list.forEach((text)=>{
               Data.push({
                id:text.key,
                 title:text.val().title,
                 description:text.val().description,
            });
           });
        
       });
       
    }
    render() { 
        console.log(this.state.data);
        let listItems = this.state.data.map((text) =>
           <Fragment key={Text.id}>
            <li>{text.title}</li>
            <li>{text.description}</li>
            </Fragment>
            );
        return ( 
        <Fragment>
            <div>
        <h1>{listItems}hi</h1>
            </div>
        </Fragment> );
    }
}
 

export default displaypost;