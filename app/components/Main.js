import React, { Component } from 'react';
import {dataArray} from './Data';
import styles from '../styles/MainStyle'
import SoundRow from './SoundRow';
import Face from './Face';
import {
    NetInfo,
    ActivityIndicator,
    Image,
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

var firebase = require('firebase'); 
var config = {
    apiKey: "AIzaSyA0yGLV_DZpICuhiaKQqrezU83gXE9FfXo",
    authDomain: "soundboard-d16d1.firebaseapp.com",
    databaseURL: "https://soundboard-d16d1.firebaseio.com",
    projectId: "soundboard-d16d1",
    storageBucket: "soundboard-d16d1.appspot.com",
    messagingSenderId: "169186688588"
  };
  const firebaseApp = firebase.initializeApp(config);


var RNFS = require('react-native-fs');



export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            stateLoading : true,
            currentPerson : "all",
        };
    }
    componentWillMount(){
        RNFS.exists(RNFS.DocumentDirectoryPath + "/RCUsounds")
    .then( (exists) => {
        if (exists) {
            this.setState({stateLoading: false});
        } else {       
            NetInfo.isConnected.fetch().then(isConnected => {
                if(isConnected)
                {
                this.prepareData();
                } else {
                    alert('Aplikacja potrzebuje internetu do pobrania dzwiekow');    
                    NetInfo.addEventListener('connectionChange',() => {this.prepareData()})            

                }            
     })                  
                
        }
    });
    }     
    prepareData(){
        this.makeSkeleton();
        this.downloadData();
        this.setState({stateLoading: false}); 
    }
    getResponse(result){        
        this.setState({currentPerson: result});
    }

     makeSkeleton(){
         let mainDir = RNFS.DocumentDirectoryPath + "/RCUsounds";

        dataArray.map((val, i) => {
            let temp = mainDir + "/" + val.type;
            RNFS.mkdir(temp);
        })         
     }

     downloadData(){
         dataArray.map((val) => {
                val.sounds.map((snd) => {
                   this.downloadFile(val.type, snd)
                })
         })
     }
  
     
     downloadFile(person, sound){
        var storageRef = firebase.storage().ref("/RCUsounds/" + person + "/" + sound);         
        let temp = RNFS.DocumentDirectoryPath + "/RCUsounds/" + person + "/" + sound;
        storageRef.getDownloadURL().then(function(url) {
            RNFS.downloadFile({fromUrl:url, toFile: temp}).promise.then(res => {
              });        
        }, function(error){
        alert(error)
        });
     }

    render() {
        if(this.state.stateLoading) 
        return(
            <View style = {styles.container}>
                <Text style = {styles.loading}> Loading DATA... </Text>
                <View style = {styles.loadingAnimation}>
                    <ActivityIndicator size = {250} color = 'red' />   
                </View>
                <View style = {styles.footerLoading}>
                   <Image style={styles.ImgFooter}
                    source = {require('../../android/app/src/main/assets/rcuimages/samplefooter.jpg')}
                    />
                </View>              
                
            </View>
            
        )
       
        return (
            <View style={styles.container}>
                <View>
                    <ScrollView horizontal = {true} style={styles.header}>
                        <Face callback={this.getResponse.bind(this)}></Face>
                    </ScrollView>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView >
                        <SoundRow person = {this.state.currentPerson}></SoundRow>
                    </ScrollView> 
                </View>
                <View style={styles.footer}> 
                    <Image style={styles.ImgFooter}
                    source = {require('../../android/app/src/main/assets/rcuimages/samplefooter.jpg')}
                    />
                </View>
            </View>
        );
    }
          
}
