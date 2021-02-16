import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import SearchBtn from "./SearchBtn";
import SearchDropDown from "./SearchDropDown";
import RecipeCard from "./RecipeCard";
import data from "../data";

function Header({ data, dropDownOpen, toggleDropDown }) {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#fff", "rgba(255, 255, 255, .8)"]}
      start={[0, 0]}
      end={[0, 1]}
      style={[styles.headerContainer]}
    >
      <Image
        source={require("../assets/zipiwhisk.png")}
        style={{ width: 70, height: 15 }}
      />
      <View style={styles.userInfoContainer}>
        <TouchableOpacity
          onPress={null}
          activeOpacity={0.5}
          style={styles.userImageWrapper}
        >
          <Image
            style={{ width: 65, height: 65, borderRadius: 50 }}
            source={{ uri: data.user.image }}
          />
        </TouchableOpacity>
        <View style={styles.usernameContainer}>
          <Text style={styles.usernameText}>{data.user.username}</Text>
          <Text style={styles.fullNameText}>{data.user.fullName}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateRecipe")}
          activeOpacity={0.5}
          style={styles.createRecipeBtn}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/createRecipe.png")}
          />
        </TouchableOpacity>
      </View>
      <SearchBtn
        dropDownOpen={dropDownOpen}
        toggleDropDown={toggleDropDown}
        BtnText="Likes"
      />
      <View
        style={[
          styles.bottomLine,
          dropDownOpen ? { opacity: 0 } : { opacity: 1 },
        ]}
      />
    </LinearGradient>
  );
}
function Profile() {
  const renderItem = ({ item }) => <RecipeCard data={item} />;
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggleDropDown = () => setDropDownOpen(!dropDownOpen);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header
          data={userData}
          toggleDropDown={toggleDropDown}
          dropDownOpen={dropDownOpen}
        />
        <SearchDropDown dropDownOpen={dropDownOpen} height={130} />
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={{ paddingTop: 130 }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerContainer: {
    paddingTop: 2,
    height: 130,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 2,
  },
  userInfoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  userImageWrapper: {},
  usernameContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 35,
    flex: 1,
  },
  createRecipeBtn: {
    height: 65,
    width: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  usernameText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "AvenirNextBold",
    color: "#313131",
  },
  fullNameText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "AvenirNextRegular",
    color: "#464646",
  },
  bottomLine: {
    width: "100%",
    height: 10,
    borderBottomWidth: 0.25,
    borderBottomColor: "#E3E3E3",
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
});

export default Profile;

const userData = {
  user: {
    id: 480348487,
    username: "mr_smith512",
    fullName: "Bob Smith",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    email: "mikebilyeu500@gmail.com",
    recipeUnit: "US",
    restriction: null,
  },
};
