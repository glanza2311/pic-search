import React from 'react'

class SearchBar extends React.Component{
    state = {term :''}
    
    onFormSubmission = (event) =>{
        event.preventDefault();
        this.props.onSubmission(this.state.term)
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmission}>
                    <label> IMAGE SEARCH</label>
                    <div className="field">
                        <input
                            type="text" 
                            value = {this.state.term}
                            onChange={this.onInputChange} 
                        />
                    </div>
                </form>   
            </div>
        );
    }
}

export default SearchBar;