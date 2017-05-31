import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import request from 'superagent';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            gifs: []
        };
    }

    handleTermChange(term) {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={term => this.handleTermChange(term)}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
