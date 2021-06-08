import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ScreenHeader from "../ScreenHeader";
import Input from "../Input";
import UserImageBtn from "../UserImageBtn";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  usernameChange,
  fullnameChange,
  imageUrlChange,
  editProfile,
} from "../../redux/actions/userForm";
import { logout } from "../../redux/actions/auth";

import Modal from "../Modal";
import ModalBtn from "../Modal/ModalBtn";

const SettingsScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      props.imageUrlChange(result.uri);
      setModalVisible(false);
    }
  };
  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Settings"
        subTitle="Profile"
        handleSavePress={() => props.editProfile(props.navigation.goBack)}
        isLoading={props.userForm.isLoading}
      />
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText="Change Profile Image"
      >
        <ModalBtn
          text="Remove Current Image"
          handleOnPress={() => {
            props.imageUrlChange(null);
            setModalVisible(false);
          }}
        />
        <ModalBtn
          text="Take Photo"
          handleOnPress={() => console.log("Take photo")}
          setModalVisible={setModalVisible}
        />
        <ModalBtn text="Choose From Library" handleOnPress={pickImage} />
      </Modal>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={styles.wrapper}>
              <View style={styles.center}>
                <UserImageBtn
                  uri={props.userForm.image_url}
                  styles={{ width: 85, height: 85 }}
                  handleImagePress={() => setModalVisible(true)}
                />
                <Text style={styles.imageBtnText}>Change Image</Text>
              </View>
              <View style={styles.emailWrapper}>
                <Text style={styles.email}>{props.user.email}</Text>
                <TouchableOpacity
                  style={styles.logoutBtn}
                  onPress={props.logout}
                >
                  <Text style={styles.logoutBtnText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Input
            value={props.userForm.username}
            handleChange={props.usernameChange}
            placeholder="Username"
            textContentType="username"
            iconName="person"
            autoCapitalize="none"
            error={props.userForm.usernameError}
          />
          <Input
            value={props.userForm.fullname}
            handleChange={props.fullnameChange}
            placeholder="Full Name"
            textContentType="name"
            iconName="document-text"
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFF",
  },
  inner: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: hp("1%"),
    paddingHorizontal: wp("2%"),
  },
  wrapper: {
    width: "95%",
    flexDirection: "row",
    marginBottom: hp("3%"),
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageBtnText: {
    color: "#0172C4",
    fontSize: wp("3%"),
    textAlign: "center",
    fontFamily: "AvenirNextRegular",
    marginTop: wp("1%"),
  },
  emailWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: hp("2%"),
    height: hp("12%"),
  },
  email: {
    color: "#464646",
    fontSize: wp("4%"),
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
  },
  logoutBtn: {
    borderWidth: 1,
    borderColor: "#0172C4",
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 5,
    width: wp("35%"),
  },
  logoutBtnText: {
    color: "#0172C4",
    fontSize: 16,
    fontFamily: "AvenirNextDemiBold",
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  userForm: state.userForm,
  user: state.user,
});

const mapDispatchToProps = {
  logout,
  usernameChange,
  fullnameChange,
  imageUrlChange,
  editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
