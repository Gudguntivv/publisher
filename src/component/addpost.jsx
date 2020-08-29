import React, { Component, Fragment } from 'react'
import firebase from "../firebase";
class addpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            description:"",
          };
          this.handleChange=this.handleChange.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
        }  

          handleChange= (e)=>{
              this.setState({[e.target.name]: e.target.value});
          };
          handleSubmit=(e)=>{
              e.preventDefault();
              console.log(this.state);
              let data=firebase.database().ref('data').orderByKey().limitToLast(100);
              firebase.database().ref('data').push({
                title:  this.state.title,
                description:this.state.description,
              })
             

              this.setState({
                title:"",
                 description:"",
              })
          }

    render() { 
        return ( 
            <Fragment>
                <div className="add">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="">Title</label><br/>
                        <input type="text" 
                        name ="title" 
                        id="title"
                        placeholder="Enter a title"
                        onChange={this.handleChange}
                        value={this.state.title}
                        required/>
                        <br/>
                        <label htmlFor="blog">Description</label>
                        <br/>
                        <textarea name="description" 
                        id="description" cols="50" rows="10"
                        onChange={this.handleChange}
                        value={this.state.description}
                        >
                        </textarea>
                        <br/>
                        <button onClick={this.handleSubmit}>Publish</button>
                    </form>
                </div>
            </Fragment>

        );
    }
}

export default addpost;