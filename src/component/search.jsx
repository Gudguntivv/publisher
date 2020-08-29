import React, { Component ,Fragment} from 'react'
import "./search.css";
class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:"",
         }
         this.handleChange=this.handleChange.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange=(e)=>{
        this.setState({title:e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            
          })
    }

    render() { 
        return ( 
        <Fragment>
            <div>
                  <form onSubmit={this.handleSubmit}>
                    
                    <input type="text"
                    onChange={this.handleChange}
                    value={this.state.title}
                     id="search"
                     placeholder="Search"
                     defaultValue="reset"/>                        
                     </form>
                     <button className="btn" onSubmit={this.handleSubmit}>clear</button>
                </div>
        </Fragment>
         );
    }
}
 
export default SearchComponent;