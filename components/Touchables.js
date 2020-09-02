import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Button, ScrollView } from 'react-native';




export default class Touchables extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }
  render() {
    return (
      <View>
        <View style={styles.txtcontainer}>
          <Text style={styles.text}>Hello Graduation..</Text>

        </View>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this._onPressButton}
                title="Press Me"
                color="#841584"
              />
            </View>
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableHighlight</Text>
              </View>
            </TouchableHighlight>
            <TouchableOpacity onPress={this._onPressButton}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableOpacity</Text>
              </View>
            </TouchableOpacity>
            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableWithoutFeedback
              onPress={this._onPressButton}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Touchable with Long Press</Text>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  txtcontainer: {
    flexDirection: 'row',
    backgroundColor: "#841584",
    alignItems: 'center',
    height: 70,
    marginBottom: 10,
    padding: 15

  },
  text: {
    alignContent: "center",
    fontSize: 40,
    color: "#cae0eb",
    shadowColor: "gray",
    textShadowColor: "gray",
    shadowRadius: 5
  },
  container: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: "space-around"
  },
  button: {
    marginBottom: 30,
    width: 300,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#841584'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
  buttonContainer: {
    margin: 20,
    width: 300,

  },

})