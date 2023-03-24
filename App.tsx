import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,

} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: 'red', fontWeight: 'bold' }}>
        Merhaba
        {"\n"}
        <Text style={{ color: 'blue' }} onPress={handlePress}> sincapp </Text>
        {"\n"}
        severler
      </Text>
      <TouchableOpacity onPress={imageClick} activeOpacity={1}>
        <Image
          //source={require("./visuals/sharkkk.png")}   // local photo
          source={{
            width: 198,
            height: 413,
            uri: "https://upload.wikimedia.org/wikipedia/en/f/f7/Darth_Vader.png"
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("pressed")} /*activeOpacity={1}*/ >
        <View style={{ width: "100%", height: 75, backgroundColor: "cyan" }}></View>
      </TouchableOpacity>
    </SafeAreaView>
    // touchable opacity yerine highlight opacatiy de olabilir, bu opacity yi düşürür tıklayınca
    // diğer de highlight eder, activeOpacity={1} dersen de tıklayınca görsel değişimi kapatır
    // TouchableWithoutFeedback --> herhangi bir görsel feedback vermeden touchable olur
  );
}
const imageClick = () => {
  console.log("image has clicked!");
};
const handlePress = () => {
  let i = 5;
  if (i > 7) {
    console.log('greater than 3!');
  }
  else if (i = 5) {
    console.log("exactly 5");
  }
  for (i; i > 0; i--) {
    console.log('You pressed the text!');
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
