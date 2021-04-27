import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
	render() {
		return(
			<View style={styles.headerContainer}>
				<Text style={styles.textStyle}> Pomodoro Timer </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headerContainer: {
    backgroundColor: "#259bff",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    // elevation: 5,
    position: "relative"
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1.5,
    fontFamily: Platform.OS == "android" ? "notoserif" : "system"
  }
})

export default Header;