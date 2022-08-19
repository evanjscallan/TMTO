import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	Button,
	FlatList,
	List
} from "react-native";

let numbers = [1,2,3,4]			


const ListItems = () => {
	let [complete, setComplete] = useState(false);
	let [taskCount, setTaskCount] = useState(1)
	let taskAmount = [1]
	let [taskState, setTaskState] = useState({
		array: [{
			task: '',
			uid: 1
		}]
	})

	let completeGreen = "green"
	let incompleteGrey = "grey"


	function handlePress(){
		const completeMe = !complete	
		setComplete(completeMe)	
	}

	function pauseTimer(){
		return null
	}


	function removeTask(){
		return null
	}

	const task = <View style={styles.inputContainer}>
					<TextInput
							style={{
							backgroundColor: complete ? completeGreen : incompleteGrey,
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							textAlign: "center"
						}}/>
					<Button
						style={styles.button}
						title="Complete"
						accessibilityLabel="complete task"
						onPress={handlePress} />
				</View>
	
	return(
		<>
		<SafeAreaView >
		<Text>{taskCount}</Text>
		{numbers.map((numbers, task) => { return(
			 <View key={numbers} style={styles.inputContainer}>
								<TextInput
							style={{
							backgroundColor: complete ? completeGreen : incompleteGrey,
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							textAlign: "center"
						}}/>
					<Button
						style={styles.button}
						title="Complete"
						accessibilityLabel="complete task"
						onPress={handlePress} />
			</View>
		)})}
				
		</SafeAreaView>
		<TouchableOpacity><Text style={{fontSize:30,backgroundColor: 'white'}}>+</Text></TouchableOpacity>

		</>


		)
}

const styles = StyleSheet.create({
	button: {
		color: "blue",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		height: 10,
		marginLeft: "50%"
	},
	inputContainer: {
	
		flex: 1,
		marginTop: 50,
		flexDirection: "row",
		height: 30,
	},
});

export default ListItems