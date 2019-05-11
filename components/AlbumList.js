import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchAlbumData } from '../actions/album_actions';
import Search from './Search';
import AlbumCard from './AlbumCard';
import Header from './Header';
import Loading from './Loading';

class AlbumList extends Component {
    componentDidMount() {
        this.props.fetchAlbumData();
    }

    render() {
        console.log(this.props.albums);
        const albumView = this.props.albums.length > 0 ? this.props.albums.map((item, key) => {
            return (
                <AlbumCard key={key} data={item} />
            )
        }) : <Text style={styles.notFound}>Sorry, no album found !!</Text>
        return (
            <View style={styles.mainContainer}>
                <Header />
                <View style={styles.searchContainer}>
                    <Search />
                </View>
                {
                    this.props.loading ?
                        <Loading /> :
                        <ScrollView style={styles.scrollContainer}>
                            {albumView}
                        </ScrollView>
                }
            </View>
        )
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        backgroundColor: '#D4E6F1'
    },
    searchContainer: {
        margin: 5,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: '#A9CCE3'
    },
    scrollContainer: {
        margin: 5,
        borderRadius: 5
    },
    notFound: {
        textAlign: 'center',
        fontFamily: "Over",
        fontSize: 18
    }
}

const mapStateToProps = state => ({
    albums: state.album.searchResults,
    loading: state.album.loading
})

export default connect(mapStateToProps, { fetchAlbumData })(AlbumList);