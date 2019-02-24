import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map(( image ) => {
        // add key property to suppress warning. React list should have unique key for each child
        return <ImageCard key={image.id} image={image} />
    });

    return <div className="image-list" >{images}</div>
}

export default ImageList;