import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({ description, id, urls }) => {
        // add key property to suppress warning. React list should have unique key for each child
        return <img key={id} alt={description} src={urls.regular} />
    })

    return <div>{images}</div>
}

export default ImageList;