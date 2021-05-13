import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ToggleFollowBtn from "../ToggleFollowBtn";
import UserNameBtn from "../UserNameBtn";
import Time from "./Time";

const Follow = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <UserNameBtn
          username={data.user.username}
          image_url={data.user.image_url}
        />
        <Text style={styles.text}>Started following you.</Text>
      </View>

      <ToggleFollowBtn BtnStyles={{ alignSelf: "flex-end" }} />

      <Time time={data.timestamp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: wp("2%"),
    paddingTop: wp("3%"),
    marginBottom: wp("5%"),
  },
  contentWrapper: {
    flexDirection: "row",
  },
  text: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("4%"),
    lineHeight: wp("12%"),
  },
});

export default Follow;
