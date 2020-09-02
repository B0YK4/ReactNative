import React, { useState, Component } from "react";
import { Text, StyleSheet, View } from "react-native";


export default class Add extends Component {
    render() {
        return (
            <View style={styles.baseText}>
                <Text style={styles.titleText} >
                    Boyka
            </Text>
                <Text >this activity is empty right now</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    baseText: {
        flex: 1,

    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});


