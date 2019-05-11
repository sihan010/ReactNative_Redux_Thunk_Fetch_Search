import React from 'react';
import { View, Text } from 'react-native'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Albums</Text>
        </View>
    )
}

const styles = {
    headerContainer: {
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A5276'
    },
    headerTitle: {
        fontSize: 24,
        color: '#EBF5FB',
        fontFamily: 'Over'
    }
}

export default Header;