import React, { Component } from 'react';
import styles from '../styles/FaceStyle';
import {dataArray} from './Data';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default class Face extends Component {
    constructor(props){
        super(props);       
    }  
    callB(per){
        this.props.callback(per);
    }

    render() {
        let faces = dataArray.map((val)=>{
                return (
                    <View key = {val.type} style={styles.ImgContainer}
                    >   
                        <TouchableOpacity onPress = {() => {                            
                               this.callB(val.type);
                         }}>
                                <Image
                                        style = {styles.Img}
                                        source = {val.image}
                                    />
                        </TouchableOpacity>
                    </View>
                )
            })        

        return faces;      

    }
          
}
