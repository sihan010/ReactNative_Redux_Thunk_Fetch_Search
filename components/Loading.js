import React from 'react';
import { View, Text, Image } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.loadingContainer}>
            <Image source={require('../assets/loading.gif')} style={styles.loading} />
            <Text style={styles.headerTitle}>Loading...</Text>
        </View>
    )
}

const styles = {
    loadingContainer: {
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'Over'
    },
    loading: {
        height: 90,
        width: 90
    }
}

export default Loading;