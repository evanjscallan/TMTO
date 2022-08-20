import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	Button,
	FlatList,
	List,
	Dimensions,
} from "react-native";


const Reset = (props) => {

	const resetTime = () => {
		return props.resetTimer()
	}
	return(
	<View>
		<Button onPress={resetTime}>RESET</Button>
	</View>
	)
}

export default Reset;