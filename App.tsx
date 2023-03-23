import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:'red', fontWeight: 'bold'}}>
        Merhaba
        <Text onPress={handlePress}> sincapp </Text>
        severler
      </Text>
    </SafeAreaView>
  );
}
const handlePress = () => {
  console.log('You pressed the text!');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
