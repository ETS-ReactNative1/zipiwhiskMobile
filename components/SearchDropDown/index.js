import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Animated, TouchableOpacity } from "react-native";

import Categories from "./Categories";
import Animations from "./Animations";
import SearchBar from "./SearchBar";

const SearchDropDown = ({ dropDownOpen, setDropDownOpen, height }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [mount, setMount] = useState(false);

  const dropDownValue = useRef(new Animated.Value(-600)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  const backgroudnopacityValue = useRef(new Animated.Value(0)).current;

  useEffect(() =>
    Animations(
      dropDownOpen,
      dropDownValue,
      mount,
      setMount,
      opacityValue,
      backgroudnopacityValue
    )
  );

  const dropDownAnimationStyle = {
    transform: [{ translateY: dropDownValue }],
  };

  const opacityAnimationStyle = { opacity: opacityValue };
  const darkBackgroundAnimationStye = {
    opacity: backgroudnopacityValue,
  };

  return (
    mount && (
      <View style={styles.container}>
        <Animated.View
          style={[styles.darkBackground, darkBackgroundAnimationStye]}
        />
        <Animated.View
          style={[
            styles.dropDown,
            { paddingTop: height + 10, height: height + 425 },
            dropDownAnimationStyle,
          ]}
        >
          <SearchBar
            opacityAnimationStyle={opacityAnimationStyle}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
          />
          {isFocused ? (
            <></>
          ) : (
            <Categories
              opacityAnimationStyle={opacityAnimationStyle}
              setDropDownOpen={setDropDownOpen}
            />
          )}
          <Animated.Image
            source={require("../../assets/line.png")}
            style={[styles.swipeLine, opacityAnimationStyle]}
          />
        </Animated.View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  darkBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(0,0,0)",
    opacity: 0.5,
    position: "absolute",
  },
  dropDown: {
    paddingBottom: 15,
    backgroundColor: "#fff",
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  swipeLine: {
    width: 60,
    height: 4,
    position: "absolute",
    bottom: 15,
  },
});

export default SearchDropDown;
