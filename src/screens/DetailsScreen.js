import { React } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default DetailsScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    return(
        <View style={{ flex: 1, backgroundColor: "beige", alignItems: 'center', justifyContent: 'center' }}>
            <Text styles = {styles.furki}>Welcome, {route.params.name}</Text>
            <View style = {{height : 70}}/>
            <Button
                title = "Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    furki:
    {
      fontSize: 42,
      fontWeight: "500",
      color: "black"   
    },
  });