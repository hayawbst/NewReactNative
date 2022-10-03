import React from "react";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "../LayoutComp/Header";
// import ContainerView from "../Container";
import MainHeadingSub from "../Text Comp/MainHeadingSub";
import MainHeadingTxt from "../Text Comp/MainHeadingTxt";
// import { useFonts } from "@expo-google-fonts/poppins/useFonts";

import airplane from '../../assets/home/airplane.png';
import building from '../../assets/home/building.png';
import taxi from '../../assets/home/taxi.png';
import fourDots from '../../assets/home/fourDots.png';

function HomeScreen({ navigation }) {
  return (
    <>
      <Header text={false} backBtn={false} />
      <View style={styles.homePage}>
        {/* <ContainerView> */}
        <PageHeadingSection />
        <SearchInputSection />

        {/* <Button
          onPress={() => navigation.navigate('Details')}
          title="Redirect"
        />
        <Pressable>
          {(state) => (
            <View
              style={[
                styles.pressableComp,
                state.pressed && { backgroundColor: "#000" },
              ]}
            >
              <Text style={styles.pressableTxt} pressed={state.pressed}>
                Press To Change color
              </Text>
            </View>
          )}
        </Pressable> */}
        {/* </ContainerView> */}
      </View>
    </>
  );
}

export default HomeScreen;

function PageHeadingSection() {
  return (
    <View style={styles.pageHeadingSection}>
      <View style={styles.pageHeadingTxt}>
        <MainHeadingSub text="Hi, Robert" />
        <MainHeadingTxt text="Find Deals" />
      </View>
      <View style={styles.pageHeadingImgSection}>
        <Image
          style={styles.pageHeadingImg}
          source={require("../../assets/home/userImg.png")}
        />
        <View style={styles.circle}></View>
      </View>
    </View>
  );
}

function SearchInputSection() {
  return (
    <View style={styles.searhcInputSection}>
      <Image
        style={styles.searchImg}
        source={require("../../assets/home/search.png")}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search Flight, Hotels, etc... "
      />
    </View>
  );
}

function CategorySection() {
  return (
    <View style={styles.categorySection}>
      <View style={[styles.categoryBox, { backgroundColor: '#000' }]}>
      <Image style={styles.categoryImg} source={airplane} />
    </View>
      <CategoryBox
        bgColor="#5f67ec"
        imgSrc={airplane}
      />
      <CategoryBox
        bgColor="#ff7043"
        imgSrc={building}
      />
      <CategoryBox
        bgColor="#f8a93d"
        imgSrc={taxi}
      />
      <CategoryBox
        bgColor="#10a6f9"
        imgSrc={fourDots}
      />
    </View>
  );
}
function CategoryBox({bgColor, imgSrc}) {
  return (
    <View style={[styles.categoryBox, { backgroundColor: bgColor }]}>
      <Image style={styles.categoryImg} source={imgSrc} />
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
    width: "100%",
    gap: 20,
  },
  // Page Heading
  pageHeadingSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pageHeadingTxt: {
    flex: 1,
    gap: 4,
  },
  pageHeadingImgSection: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#5f67ec",
    position: "relative",
    // padding: 10,
  },
  pageHeadingImg: {
    width: 14,
    height: 14,
    position: "absolute",
    top: 14,
    left: 15,
    bottom: 10,
    right: 10,
  },
  circle: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#10a6f9",
    right: 3,
    top: 2,
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#fdfdfe",
  },
  // Search Input Section
  searhcInputSection: {
    height: 47,
    borderRadius: 24,
    backgroundColor: "#f4f6fd",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 20,
  },
  searchImg: {
    width: 18,
    height: 17,
    marginRight: 5,
  },
  searchInput: {
    textAlign: "left",
    fontSize: 12,
    color: "#868daf",
  },
  // Category Section
  categorySection: {
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  categoryBox: {
    width: 54,
    height: 54,
    borderRadius: 14,
  },
  categoryImg: {
    width: 17,
    height: 22,
  },

  pressableComp: {
    marginTop: 20,
    backgroundColor: "red",
    padding: 5,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 20,
  },
  pressableTxt: {
    color: "#fff",
  },
});
