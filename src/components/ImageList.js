import React from 'react'

const ImageList = (props) =>{

   const images = props.imageList.map((image) => {
        return <img src={image.urls.small} key={image.id} alt={image.description}/>
    });

    return <div>{images}</div>
}

export default ImageList