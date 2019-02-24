import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    // Add callback after image is rendered
    componentDidMount() {
        // get image height here directly is too early
        // right after <img> gets rendered, image itself is not downloaded from the src yet so height will be 0
        // thus add EventListener to be called after img loaded
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    // Reach into DOM and figure out the height of the image
    // Set image height on state to get component to rerender
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans })
        // Assign a 'grid-row-end' so image takes up the appropriate space
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;