
import * as React from 'react';
import { View, Text, Button, Pressable, StyleSheet, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home/Home';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }}
         />
        <Stack.Screen name="Details" component={DetailsScreen}  options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('NewProject',() => App);

export default App;