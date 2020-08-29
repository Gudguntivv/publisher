import "./homepage.css"
import React, { Component,Fragment } from 'react'
import Display from "./displaypost";
import SearchComponent from "./search"
import Add from "./addpost"
class homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
             <section id="blog">
                 <div className="head">
                        <div className="header"> 
                        <h1></h1>
                        </div>
                        <div className="search">
                        <SearchComponent />

                    </div>
                        <div className="middle">
                            
                            <button className="Newpost">New post</button> 
                            <button className="publisher">Published</button>
                        </div>
                </div>
                <div className="main">
                    <Add/>
                    < Display />
                </div>
            
                </section>
            </Fragment>
          );
    }
}
 
export default homepage;