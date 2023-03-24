import React, { useState } from 'react';
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
  TextInput,
  Button,
  Alert,
  FlatList,
  RefreshControl,

} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: "beige", flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style = {styles.color}>Naber gençlik</Text>
      <Text style = {styles.color}>Naber gençlikkk</Text>
      <Text style = {styles.color}>Naber gençliik!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // eğer buraya (yani safe are style) justifyContent: "center" yazarsak dikeyde,
    // alignItems: "center" yazarsak yatayda ortalar, safe are içindeki bütün elementleri
  },
  HeaderFont:
  {
    fontSize: 22,
    fontWeight: "500",
    color: "purple"
  },
  color:
  {
    color: "brown",
    fontSize: 22
  },
});

export default App;

/*
------------------------------------------------------------------------------------------------

container:
  {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // eğer buraya (yani safe are style) justifyContent: "center" yazarsak dikeyde,
    // alignItems: "center" yazarsak yatayda ortalar, safe are içindeki bütün elementleri
  },

------------------------------------------------------------------------------------------------

<Text style={{ color: 'red', fontWeight: 'bold' }}>
  Merhaba
  {"\n"}
  <Text style={{ color: 'blue' }} onPress={handlePress}> sincapp </Text>
  {"\n"}
  severler
</Text>

------------------------------------------------------------------------------------------------

<TouchableOpacity onPress={() => console.log("pressed")} activeOpacity={1} >
  <View style={{ width: "100%", height: 75, backgroundColor: "cyan" }}></View>
</TouchableOpacity>

// touchable opacity yerine highlight opacatiy de olabilir, bu opacity yi düşürür tıklayınca
// diğer de highlight eder, activeOpacity={1} dersen de tıklayınca görsel değişimi kapatır
// TouchableWithoutFeedback --> herhangi bir görsel feedback vermeden touchable olur

------------------------------------------------------------------------------------------------

<Image
  //source={require("./visuals/sharkkk.png")}   // local photo
  source={{
    width: 198,
    height: 413,
    uri: "https://upload.wikimedia.org/wikipedia/en/f/f7/Darth_Vader.png"
  }}
  resizeMode="contain"
/>

------------------------------------------------------------------------------------------------

onPress={() => Alert.alert("Merhaba " + text, "Çuf Çuuuuuuf",
  [
    {text: "Çuf", onPress: () => console.log("çuf dedi")},
    {text: "Çuuuf", onPress: () => console.log("çuuuf dedi")}
  ]
)}

------------------------------------------------------------------------------------------------

      <Text style={styles.HeaderFont}>Bu şarkıcımız kimdir?</Text>
      <View style={{height: 20}}/>
      <TouchableOpacity onPress={imageClick} activeOpacity={1}> 
      <Image      
      source={{     //source={require("./visuals/sharkkk.png")}   // local photo
        width: 198,
        height: 413,
        uri: "https://upload.wikimedia.org/wikipedia/en/f/f7/Darth_Vader.png"
      }}
      resizeMode="contain"
    />
  </TouchableOpacity>
  <View style={{height: 20}}/>
  <TextInput
    style={{width: 270, height: 40, borderWidth: 3, borderColor: "purple", padding: 6}} // eğer component style içine alignSelf: "center" yazarsak kendini ortalar; yatayda sanırım
    placeholder="İpucu: Çuf Çuuuf"
    value = {text}
    onChangeText = {setText}
    // secureTextEntry = {true}  --> Şifre girişi gibi girilen değeri göstermez
    // value = "kara tiren"   --> Defines a default value and when it is used like this, you can not enter any other characters whatsoever
  />
  <View style = {{height: 15}}/>
  <Text>Giridğinz Cevap : {text}</Text>
  <View style = {{height: 15}}/>
  <Button 
    title = "Sonucu öğren"
    onPress={() => Alert.prompt("Hello " + text, "Kara tiren?", (val) => console.log(val))}    // .prompt is a special call available in IOS for taking input from the user
    color = "purple"
  />

  ------------------------------------------------------------------------------------------------

function App(): JSX.Element {
  const [text, setText] = useState("")      // değişken ismi, fonksiyon adı
  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  );
}

  ------------------------------------------------------------------------------------------------

const data = 
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
]

function App(): JSX.Element {
  const [refreshing, setRefreshing] = useState(false)
  const _onRefresh = () =>
  {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000);
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data = {data}
        renderItem = {({item}) => <Text style = {{fontSize: 30, fontWeight: "bold",borderWidth: 1, borderColor: "yellow", marginVertical: 10, marginHorizontal: 10}}>{item.body}</Text>}
        keyExtractor = {item => item.id.toString()}
        refreshControl = {<RefreshControl refreshing = {refreshing} onRefresh={_onRefresh}/>}
      />
    </SafeAreaView>
  );
}

  ------------------------------------------------------------------------------------------------

const [refreshing, setRefreshing] = useState(false)
  const _onRefresh = () =>
  {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000);
  }

  ------------------------------------------------------------------------------------------------
*/