import React from "react";
import { StyleSheet, Text, View } from "react-native";

import UserImageBtn from "../../UserImageBtn";

const UserInfo = (props) => {
  return (
    <View style={styles.userInfoContainer}>
      <UserImageBtn
        handleImagePress={props.handleImagePress}
        uri={props.user.image}
        styles={{ width: 65, height: 65 }}
      />

      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>{props.user.username}</Text>
        <Text style={styles.fullNameText}>{props.user.fullname}</Text>
      </View>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  usernameContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 35,
    flex: 1,
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
});

export default UserInfo;
