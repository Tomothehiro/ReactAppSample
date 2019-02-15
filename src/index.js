// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a React component
const App = () => {

    return (
        <div className="ui container comments">
          <ApprovalCard>
              <div>
                Are you sure you want to do this?
              </div>
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail author="Sam" />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail author="Tom" />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail author="Bil" />
          </ApprovalCard>
        </div>
    );
}

// Take the React component and insert it into index.html <div id="root"></div>
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
