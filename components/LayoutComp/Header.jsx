import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";

function Header({ text, backBtn }) {
  return (
    <View style={styles.headerSection}>
      {backBtn && (
        <TouchableOpacity style={styles.headerMenuBtn}>
          <Image
            source={require("../../assets/header/backBtn.png")}
            style={styles.HeaderImg}
          />
        </TouchableOpacity>
      )}
      {text && <Text style={styles.headerHeading}>{text}</Text>}
      <TouchableOpacity style={styles.headerMenuBtn}>
        <Image source={require("../../assets/header/menuBars.png")} style={styles.HeaderImg} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    backgroundColor: "#fff",
  },
  headerMenuBtn: {
    background: "#00000000",
    padding: 0,
    width: 25,
    height: 25,
    border: 0,
    boxShadow: "none",
    outline: "none",
    color: "#000",
  },
  HeaderImg: {
    width: 24,
    height: 24,
  },
  headerHeading: {
    fontSize: 20,
    color: "#212121",
  },
});
