import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { searchAlbums } from '../actions/album_actions'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    handleSearchInput(v) {
        this.setState({
            searchValue: v
        })
        this.props.searchAlbums(v)
    }

    render() {
        return (
            <TextInput
                style={styles.searchBar}
                placeholder="Search"
                value={this.state.searchValue}
                onChangeText={(v) => this.handleSearchInput(v)}
            />
        )
    }
}

const styles = {
    searchBar: { 
        fontSize: 18,
        fontFamily:"Over" 
    }
}

export default connect(null, { searchAlbums })(Search);

