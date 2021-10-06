import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ProfileHeader from "./Header/ProfileHeader";
import RecipeScroll from "./RecipeScroll";
import ActivityBtn from "./ActivityBtn";

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />
      <RecipeScroll paddingTop={hp("22%")} />
      <ActivityBtn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default ProfileScreen;
