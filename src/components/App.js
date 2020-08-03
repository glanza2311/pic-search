import React from 'react'
import SearchBar from './SearchBar'
import ContentRetriever from '../api/contentRetriever';
import ImageList from './ImageList'

class App extends React.Component {
    state = {
        contentRetriever : new ContentRetriever(),
        images : []
    }

    onFormSubmission = async (term) => {
        console.log("The term to search is:", term )
        const images = await this.state.contentRetriever.getImages(term)
        this.setState({images: images})
        console.log("STATE IMAGES", this.state.images)
    }

    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmission={this.onFormSubmission}/>
                <ImageList imageList={this.state.images}/>
            </div>
        
        );
    }
}

export default App;