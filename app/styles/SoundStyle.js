import React from 'react';
import {
    StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
    row: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#484848'
    },
    hiddenRow:{
        display: 'none',        
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#484848'
    },
    rowText: {
        paddingLeft: 20,
        color: '#686868',
        borderLeftWidth: 10,
        borderLeftColor: 'red'
    },
    rowShare: {
        borderRadius: 5,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0af',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },   
});
module.exports = styles;