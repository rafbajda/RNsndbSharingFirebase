import React, { Component } from 'react';
import Share from 'react-native-share';
import {dataArray} from './Data';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

var RNFS = require('react-native-fs');

var Sound = require('react-native-sound');
Sound.setCategory('Playback')
var song = null;

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/SoundStyle';
const shareIcon = (<Icon name="facebook-messenger" size={35} color="white" />);  

export default class SoundRow extends Component {

    constructor(props){
        super(props);     
    }
  
    playAudio(title){ 
        if(song) song.release();
        song = new Sound(title, Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('nie udalo sie zaladowac dzwieku!')
                return;
                }
                song.play(); 
            });                       
    }
    stringCorrector(title){
        title = title.replace(/_/g, ' ');
        return title.slice(0, title.length-4);        
    }

    rowStyle(type, person){
        if(person == "all" || type == person ) return styles.row
        else {
            return styles.hiddenRow;
        }
    }

    render() {        
    let soundRows = dataArray.map((val) => {
        return(
            <View key = {val.type}>
                {
                    val.sounds.map((snd,key)=>{
                        return (
                            <View key = {key} style={this.rowStyle(val.type, this.props.person)}>  
                                <TouchableOpacity onPress = {() => {                                            
                                        let temp = RNFS.DocumentDirectoryPath + "/RCUsounds/" + val.type + "/" + snd;
                                        this.playAudio(temp);
                                    }}>
                                    <Text style={styles.rowText}>{this.stringCorrector(snd)}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.rowShare} onPress={()=>{
                                    let temp = RNFS.DocumentDirectoryPath + "/RCUsounds/" + val.type + "/" + snd;
                                    Share.open({
                                            url: `file://${temp}`,
                                            type: 'audio/mp3',
                                            })              
                                        }}>
                                        {shareIcon}
                                </TouchableOpacity>    

                            </View>
                        )
                    })
                }
            </View>
        )
    })
    return soundRows;              

    }
}

