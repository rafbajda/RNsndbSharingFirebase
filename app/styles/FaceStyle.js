import React from 'react';
import {
    StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
    Img:{
        borderRadius: 5,
        height: 120,
        width: 120,
        borderWidth:1,
        borderColor: '#484848',        
    },
    ImgContainer:{        
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },
});

module.exports = styles;