import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TeamScreen from './components/Team';
import Touchables from './components/Touchables';
import Images from './components/ImagesBackground';
import Add from './components/Add'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Team" component={TeamScreen} />
        <Stack.Screen name="Touchables" component={Touchables} />
        <Stack.Screen name="Images" component={Images} />
        <Stack.Screen name="Add&delete" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.homecontainer}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Team Members"
            color="#2f56ba"

            onPress={() =>
              navigation.navigate('Team')
            }
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Touchables"
            color="#841584"
            onPress={() =>
              navigation.navigate('Touchables')
            }
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="image background"
            color="#2f56ba"

            onPress={() =>
              navigation.navigate('Images')
            }
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="add & delete"
            color="#841584"
            onPress={() =>
              navigation.navigate('Add&delete')
            }
          />
        </View>
      </View>
    </View>

  );
};


export default MyStack;

const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fcf400"

  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20

  }
});