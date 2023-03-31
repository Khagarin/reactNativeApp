import { React, useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export default HomeScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const useDispatch = useDispatch()
    const {GeneralResponse} = useSelector(state => state)
    return (
        <View style={{ flex: 1, backgroundColor: "beige", alignItems: 'center', justifyContent: 'center' }}>
            <Text style = {styles.HeaderFont}>Home Screen</Text>
            <Text>Name : {GeneralResponse.name}, Age: {GeneralResponse.age}</Text>
            <View style={{height: 100}} />
            <TextInput
                style={{ width: 200, height: 35, borderWidth: 1, borderColor: 'black', padding: 7}}
                placeholder="What is your name?"
                value = {name}
                onChangeText = {setName}
            />
            <View style={{height: 100}} />
            <Button
                title="Go to next page"
                onPress={() => navigation.navigate("DetailsScreen", {name: name})}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:
    {
      flex: 1,
      backgroundColor: "beige",
      //flexDirection: "column",
      justifyContent: "center",
      alignItems: 'center',
      // eğer buraya (yani safe are style) justifyContent: "center" yazarsak dikeyde,
      // alignItems: "center" yazarsak yatayda ortalar, safe are içindeki bütün elementleri
    },
    HeaderFont:
    {
      fontSize: 42,
      fontWeight: "500",
      color: "black"
      
    },
    Font:
    {
      color: "brown",
      fontSize: 22
    },
  });