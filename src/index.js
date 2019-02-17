// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// import CommentDetail from './CommentDetail';
// import ApprovalCard from './ApprovalCard';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

// Create a React component
// const App = () => {

//     // Section 3. JSX props
//     return (
//         <div className="ui container comments">
//           <ApprovalCard>
//               <div>
//                 Are you sure you want to do this?
//               </div>
//           </ApprovalCard>
//           <ApprovalCard>
//             <CommentDetail author="Sam" />
//           </ApprovalCard>
//           <ApprovalCard>
//             <CommentDetail author="Tom" />
//           </ApprovalCard>
//           <ApprovalCard>
//             <CommentDetail author="Bil" />
//           </ApprovalCard>
//         </div>
//     );
// }

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // Success callback
            position => this.setState({ lat: position.coords.latitude}),
            // Failure callback
            err => this.setState({ errorMessage: err.message })
        )
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Loader message="Please allow geolocation"/>
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

// Take the React component and insert it into index.html <div id="root"></div>
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
