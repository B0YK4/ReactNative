import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';

export default class Images extends Component {
  render() {
    return (
      <View style={styles.header}>
        <ImageBackground source={{ uri: "https://reactjs.org/logo-og.png" }} style={styles.image}>
          <Image style={styles.zaama} source={{ uri: "https://scontent.fcai1-2.fna.fbcdn.net/v/t1.0-9/68538833_100213198009843_2822739595983060992_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeF9PRNi6b3KM5WSDbs9V4oDyF1CPoICWpjIXUI-ggJamJax08CQyDtqn-04yPXBcE-9yLI5eLQxm-UIeKoCMBRk&_nc_ohc=XBWpo0zDkY0AX9ukX3y&_nc_ht=scontent.fcai1-2.fna&oh=3f520aed54da00d3e64d5f6ae2dd8efa&oe=5F764671" }}>

          </Image>

        </ImageBackground>
      </View>
    );
  };
}



const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center'
  },
  zaama: {
    width: 74,
    height: 74,
    borderRadius: 37
  }
});


