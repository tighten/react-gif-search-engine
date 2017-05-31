import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div className="greeting">
                <p className="greeting-text">Hello World!</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
