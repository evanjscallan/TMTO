import React, { useState, useEffect} from "react";
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

import { useForm } from 'react-hook-form';
import Reset from './Reset'

const Stages = (props) => {


	let [stage, setStage] = useState(1);
	let [timerPause, setTimerPause] = useState(false)
	let [clock, setClock] = useState(true);
	let [workSeconds, setWorkSeconds] = useState(1500);
	let [breakSeconds, setBreakSeconds] = useState(1000);
	let [rewardSeconds, setRewardSeconds] = useState(1500);

	//conversions

		let hour = Math.floor(workSeconds / 3600);
		let minute = Math.floor((workSeconds % 3600) / 60);
		let second = workSeconds % 60;
				if(hour.toString().length === 1) {
			            hour = `0${hour}`;
			      }
			      if(minute.toString().length === 1) {
			            minute = `0${minute}`;
			      }
			      if(second.toString().length === 1) {
			            second = `0${second}`;
			      };

		let timer = `${minute}:${second}`;


		let hour2 = Math.floor(breakSeconds / 3600);
		let minute2 = Math.floor((breakSeconds % 3600) / 60);
		let second2 = breakSeconds % 60;
		if(hour2.toString().length === 1) {
	            hour2 = `0${hour2}`;
	      }
	      if(minute2.toString().length === 1) {
	            minute2 = `0${minute2}`;
	      }
	      if(second2.toString().length === 1) {
	            second2 = `0${second2}`;
	      };

		let timer2 = `${minute2}:${second2}`;

	let startTimer = () => {
		let workSet;
		let breakSet;
		
	
		if (timerPause === false){
			if (clock === true) {
				setInterval(function () {
					setWorkSeconds(workSeconds--);
					if (workSeconds < -1) {
						setClock(false);
						setWorkSeconds(1500);
						console.log(clock);
						clearInterval(workSet);
						console.log(stage);
				}
				}, 1000)
			};
			if (clock !== true) {
				setInterval(function () {
					setBreakSeconds(breakSeconds--);
					if (breakSeconds < -1) {
						setClock(true);
						setBreakSeconds(1000);
						console.log(clock);
						setStage(stage++);	
					}
					console.log(stage);
				
			}, 1000);
			}
		} else {
			clearInterval(setTimer())
			setWorkSeconds(1500)
			setBreakSeconds(1500)
			setTimerPause(true)
		}
	};



	return (
		<>
		<View>
					
					<Text style={{ fontSize: 50 }}>
						Time: {clock ? timer : timer2}
					</Text>
				
				<View>
					<Text style={{ fontSize: 50, marginTop: 20}}>
					
					{ clock ? 
					<Text style={{backgroundColor: 'green',padding: 10, color: 'white', boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)'}}>WORK </Text>
					:
					<Text style={{backgroundColor: 'blue', color: 'white',padding: 10, boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)'}}> BREAK </Text>}{" "}
					</Text>
				</View>
				<TouchableOpacity onPress={startTimer}>
					<Text style={{ marginTop: 10, fontSize: 50, textAlign: 'center', backgroundColor: '#B8002B', color: 'white', boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)', boxSizing: 'content-box', marginTop: 20 }}>START</Text>
				</TouchableOpacity>
				<Reset/>
		</View>


		</>
	);
};

const styles = StyleSheet.create({
	button: {
		color: "blue",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: 10,
	},
	inputContainer: {
		marginTop: 50,
		flexDirection: "row",
		height: 30,
	},
});

export default Stages;
