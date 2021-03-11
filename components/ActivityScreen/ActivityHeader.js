import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../Header";
import ZipiWhiskIcon from "../Header/ZipiWhiskIcon";
import NumFollows from "../NumFollows";

import { userData } from "./data";

function ActivityHeader() {
  return (
    <Header>
      <ZipiWhiskIcon />
      <View style={styles.followContainer}>
        <NumFollows
          text="Followers"
          num={userData.numFollowers}
          username={userData.username}
        />
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{"Activity"}</Text>
        </View>
        <NumFollows
          text="Following"
          num={userData.numFollowing}
          username={userData.username}
        />
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({
  followContainer: {
    flexDirection: "row",
    flex: 1,
    padding: 5,
    paddingHorizontal: 10,
  },
  titleWrapper: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 30,
    color: "#313131",
    marginHorizontal: 10,
  },
});

export default ActivityHeader;
