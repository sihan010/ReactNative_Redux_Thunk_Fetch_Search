import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { searchAlbums } from '../actions/album_actions'
import Icon from 'react-native-vector-icons/Ionicons'

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
            <View style={styles.searchBar}>
                <Icon name="ios-search" color="#fff" size={20} />
                <TextInput
                    placeholder="Search"
                    value={this.state.searchValue}
                    onChangeText={(v) => this.handleSearchInput(v)}
                />
            </View>
            
        )
    }
}

const styles = {
    searchBar: { 
        flexDirection:'row',
        alignItems: 'center',
        fontSize: 20,
        fontFamily:"Over" 
    }
}

export default connect(null, { searchAlbums })(Search);

