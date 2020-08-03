import axios from 'axios'

class ContentRetriever {
    constructor() {
        this.baseURL = "https://api.unsplash.com"
        this.searchEndpoint = "/search/photos"
        this.authorizationKey = "X8dIZfQyiU-N4QXG_i6jGuiVe2y0HUeH1dgcapTJOkA"
        //this.getImages.bind(this)
    }

    getImages = async (searchTerm) => {
        const response = await axios.get(this.baseURL+ this.searchEndpoint, {
            headers: { Authorization: `Client-ID ${this.authorizationKey}`},
            params: { query: searchTerm }
        });
        return response.data.results
    }
}

export default ContentRetriever; 