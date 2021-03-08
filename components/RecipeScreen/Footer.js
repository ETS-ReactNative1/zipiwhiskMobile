import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { parseNum } from "../utils";

const screenHeight = Dimensions.get("screen").height;

const Footer = (props) => {
  const navigation = useNavigation();
  return (
    <Animated.View style={[styles.footerConatiner, props.styles]}>
      <LinearGradient
        colors={["rgba(0,0,0,.5)", "transparent"]}
        start={[0, 1]}
        end={[0, 0]}
        style={styles.gradientWrapper}
      >
        <View style={styles.footerBtnContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("VisitProfile")}
            activeOpacity={0.4}
            style={[styles.footerBtn, { paddingHorizontal: 5 }]}
          >
            <Image source={{ uri: props.userImage }} style={styles.userIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={null}
            activeOpacity={0.4}
            style={styles.footerBtn}
          >
            <Text style={styles.footerBtnText}>{parseNum(props.numLikes)}</Text>
            <Ionicons
              name="heart"
              size={25}
              color="#FFF"
              style={styles.footerBtnIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Comments", { title: props.title })
            }
            activeOpacity={0.4}
            style={styles.footerBtn}
          >
            <Text style={styles.footerBtnText}>
              {parseNum(props.numComments)}
            </Text>
            <Ionicons
              name="chatbubble-ellipses"
              size={25}
              color="#FFF"
              style={styles.footerBtnIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={null}
            activeOpacity={0.4}
            style={styles.footerBtn}
          >
            <Ionicons
              name="bookmarks"
              size={25}
              color="#FFF"
              style={styles.footerBtnIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.footerBtnContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateRecipe")}
            activeOpacity={0.4}
            style={[styles.footerBtn, { flex: 0.25 }]}
          >
            <Ionicons
              name="pencil"
              size={25}
              color="#FFF"
              style={styles.footerBtnIcon}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  footerConatiner: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 260,
    marginTop: screenHeight - 260,
    width: "100%",
    position: "absolute",
  },
  gradientWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flex: 1,
    paddingBottom: 25,
    width: "100%",
  },

  footerBtnContainer: {
    height: "100%",
    width: 50,
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  footerBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    flex: 1,
  },
  footerBtnText: {
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
  },
  footerBtnIcon: {
    width: 25,
    height: 25,
  },
  userIcon: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
});

export default Footer;
