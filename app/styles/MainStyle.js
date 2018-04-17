import React from 'react';
import {
    StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
    },
    loading: {
        lineHeight: 120,
        textAlign: 'center',
        fontWeight: 'bold',
        height:130,
        color: '#D3D3D3',
        borderBottomWidth: 10,
        borderBottomColor: '#484848',
        fontSize: 30,
    },
    loadingAnimation: {
        top: 40,
    },
    header: {
        flexGrow: 1,
        backgroundColor: '#484848',
        height:130,
        borderBottomWidth: 10,
        borderBottomColor: '#484848'
    },    
    scrollContainer: {
        flex: 1,
        backgroundColor: '#202020',        
    }, 
    footer:{
        borderTopWidth: 5,      
        borderBottomColor: '#484848',
        borderBottomWidth: 5,
        borderTopColor: '#484848', 
    },
    footerLoading:{
        borderTopWidth: 5,      
        borderBottomColor: '#484848',
        borderBottomWidth: 5,
        borderTopColor: '#484848',
        position: 'absolute', 
        bottom: 0,
        left: 0,
        right: 0,
    },
    ImgFooter:{
        height:80,        
        resizeMode: 'cover',
        width: null,
    }
});

module.exports = styles;