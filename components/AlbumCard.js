import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class AlbumCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.cardContaimer}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Image style={styles.thumbnail} source={{ uri: this.props.data.thumbnail_image }} />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                        <Text style={styles.artist}>{this.props.data.artist}</Text>
                    </View>
                </View>
                <Image style={styles.banner} resizeMode="cover" source={{ uri: this.props.data.image }} />
            </View>
        )
    }
}

const styles = {
    cardContaimer: {
        flex: 1,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: '#7FB3D5'
    },
    infoContainer: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    thumbnail: {
        height: 100,
        width: 100,
        borderRadius: 5
    },
    banner: {
        height: 200,
        width: '100%',
        marginTop: 10,
        borderRadius: 5
    },
    title: {
        fontFamily: "Over",
        fontSize: 24
    },
    artist: {
        fontFamily: "Over",
        fontSize: 20
    }
}

export default AlbumCard;