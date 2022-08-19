import React, { setState } from 'react';
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
} from "react-native";




export default class Task2 extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: "",
			task: [{name: ""}]
		}
	this.handleAddTask = this.handleAddTask.bind(this);
	this.handleTaskChange = this.handleTaskChange.bind(this);
	}

	handleAddTask = () => {
		this.setState({
			task: this.state.task.concat([{ task: ""}])
		})
	}

	handleTaskChange = idx => evt => {
		const newTask = 
		this.state.task.map((x, sidx) => {
			if (idx !== sidx) return x;
			return {...task, name: evt.target.value}
	});
		this.setState({ shareholders: newShareholders });
	};

	render(){
		return(
				<>
				<View>
				<TextInput 
				value={this.state.name}
				onChange={this.handleTaskChange}
				></TextInput>
				<Button onPress={this.handleAddTask}></Button>
					{this.state.task.map((userInput) => {
						<TextInput value={userInput.name} placeholder='Enter Task...'></TextInput>
					})}
				<TouchableOpacity onPress={this.handleAddTask}>
				</TouchableOpacity>
				<Text>TEST</Text>
				</View>
				</>
			)
	}
}