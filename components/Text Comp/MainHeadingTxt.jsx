import React from "react";
import { Text, StyleSheet } from "react-native";


function MainHeadingTxt({text}) {
    return (
        <Text style={styles.pageHeading}>{text}</Text>
    );
};

export default MainHeadingTxt;


const styles = StyleSheet.create ({
pageHeading: {
    fontSize: 28,
    color: '#212121',
    // fontWeight: 600,
},
});