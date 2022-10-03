import React from "react";
import { View, StyleSheet } from "react-native";

function ContainerView({children}) {
  return <View styles={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    // width: '100%',
    flex: 1,
    justifyContent: "flex-start",
  },
});

export default ContainerView;
