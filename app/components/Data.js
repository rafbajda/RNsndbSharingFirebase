import React, { Component } from 'react';
var RNFS = require('react-native-fs');
var dataArray = [
    {
      type: "p1",
      sounds: ["p1s1.mp3", "p1s2.mp3"],
      image: require("../../android/app/src/main/assets/rcuimages/p1.jpg")
    },
    {
        type: "p2",
        sounds: ["p2s1.mp3", "p2s2.mp3"],
        image: require("../../android/app/src/main/assets/rcuimages/p2.jpg")
    },
      {
        type: "p3",
        sounds: ["p3s1.mp3"],
        image: require("../../android/app/src/main/assets/rcuimages/p3.jpg")
    },
      {
        type: "p4",
        sounds: ["p4s1.mp3", "p4s2.mp3"],
        image: require("../../android/app/src/main/assets/rcuimages/p4.jpg")
    },
      {
        type: "p5",
        sounds: ["p5s1.mp3"],
        image: require("../../android/app/src/main/assets/rcuimages/p5.jpg")
    },

] 
export {dataArray};
