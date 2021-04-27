import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TimerDisplay extends React.Component {

	// display currently running timer
	render() {
		return (
			<View style={styles.container}>
				<Text style={(Math.floor(this.props.time/60) < 1 && (this.props.time % 60) < 20 ) ? styles.textStyleLastSeconds : styles.textStyle}> 
                    {/* Pad to start allow to keep the format 00 for seconds */}
					{Math.floor(this.props.time/60).toString().padStart(2,"0") + ":" + 
					(this.props.time % 60).toString().padStart(2,"0")}
					{/* {console.log(this.props.time/60)}
					{console.log(this.props.time % 60)} */}
				</Text>
			</View>
		)
	}

	handleLastSeconds = () => {
		this.setState({
			running: true
		})
		this.timerId = setInterval(() =>{
			this.setState({
				time: this.state.time - 1
			})
		}, 1000)
	}
}

export default TimerDisplay;

const styles = StyleSheet.create({
	
	container: {
		marginTop: "5%",
	    marginBottom: "7%",
	    marginLeft: "7%",
	    marginRight: "7%",
	    padding: "15%",
	    borderColor: "white",
	    borderRadius: 80,
	    borderWidth: 5,
		alignItems: 'center',
		backgroundColor: "#259bff",
	},
	textStyle: {
		color: "white",
	    fontSize: 50,
	    fontWeight: "600",
	},
	textStyleLastSeconds: {
		color: "red",
	    fontSize: 50,
	    fontWeight: "400",
	}
})