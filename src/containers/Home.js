import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import GifList from '../components/GifList';
import GifModal from '../components/GifModal';
import SearchBar from '../components/SearchBar';
import '../styles/app.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <SearchBar onTermChange={this.props.actions.requestGifs} />

                <GifList gifs={ this.props.gifs }
                         onGifSelect={ selectedGif => this.props.actions.openModal({selectedGif}) }
                         onFavoriteSelect={ selectedGif => this.props.actions.favoriteGif({selectedGif}) }
                         onFavoriteDeselect={ selectedGif => this.props.actions.unfavoriteGif({selectedGif}) }
                         isAuthenticated={ this.props.authenticated } />

                <GifModal modalIsOpen={ this.props.modalIsOpen }
                          selectedGif={ this.props.selectedGif }
                          onRequestClose={ () => this.props.actions.closeModal() } />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        gifs: state.gifs.data,
        modalIsOpen: state.modal.modalIsOpen,
        selectedGif: state.modal.selectedGif
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
