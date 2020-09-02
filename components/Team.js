import React, { Component } from 'react';
import { SectionList, StyleSheet, Image, ScrollView, Text, View } from 'react-native';


const DATA = [
  {
    title: "WEB Team",
    data: [
      "Ahmed Shahwan",
      "Muhammed mostafa",
      "Ammar ousama",
      "Ziad Nabil",
      "Ahmed Shahwan",
      "Muhammed mostafa",
      "Ammar ousama",
      "Ziad Nabil"],
    ur: [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/men/3.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/men/6.jpg",
      "https://randomuser.me/api/portraits/men/7.jpg",
      "https://randomuser.me/api/portraits/men/8.jpg",
    ]
  },
  {
    title: "ANDROID Team",
    data: [
      "Muhammed sattar",
      "Ramy sa'fan",
      "Raslan",
      "Muhammed sattar",
      "Ramy sa'fan",
      "Raslan"],
    ur: [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/men/3.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/men/6.jpg",
    ]
  },

];

const Item = ({ item, ur }) => (
  <View style={styles.itemContainer}>
    <View style={styles.leftcontainer}>
      <Text style={styles.title}>{item}</Text>
    </View>
    <View >
      <Image source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }} style={styles.img} />
    </View>

  </View>
);

export default class TeamScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.txtcontainer}>
          <Text style={styles.text}>Hello Graduation..</Text>

        </View>

        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item item={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>

          )}
        />

      </View>
    );
  }
};

const styles = StyleSheet.create({
  txtcontainer: {
    flexDirection: 'row',
    backgroundColor: "#3355ab",
    alignItems: 'center',
    height: 70,
    marginBottom: 10,
    padding: 15

  },
  header: {
    fontSize: 30,
    backgroundColor: "gray",
    color: "#e6e9ed",
    padding: 20,
    height: 80,
    borderRadius: 40,
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: 10
  },
  text: {
    alignContent: "center",
    fontSize: 40,
    color: "#cae0eb",
    shadowColor: "gray",
    textShadowColor: "gray",
    shadowRadius: 5

  },
  title: {
    fontSize: 18,
    justifyContent: "center"
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 25
  },

  leftcontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10

  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: "#e6e9ed",
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 35,
    borderRadius: 10
  }
})