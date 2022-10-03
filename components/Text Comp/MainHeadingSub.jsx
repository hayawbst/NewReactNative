import React from "react";
import { StyleSheet, Text } from "react-native";

function MainHeadingSub({text}) {
    return (
        <Text style={styles.pageSubHeading}>{text}</Text>
    );
};

export default MainHeadingSub;

const styles = StyleSheet.create ({
pageSubHeading: {
fontSize: 16,
color: '#868daf',
// fontWeight: 400,
}
});