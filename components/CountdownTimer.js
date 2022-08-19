import React, {useState, useEffect} from 'react'
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


const CountdownTimer = ({ hoursMinsSecs }) => {
  let { hours = 0, minutes = 25, seconds = 0 } = hoursMinsSecs;
  let [ counter, setCounter ] = useState(1)
  const [ intervalId, setIntervalId ] = useState(null)
  //destructuring into an array
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds])
  const [isRunning, setIsRunning] = useState(false)
  let timerId;


  const tick = () => {


  	if (counter % 2 === 0){
    if (hrs === 0 && mins === 0 && secs === 0) {
      setCounter(counter++)
      setTime([0, 5, 0])

      //replace with reset to other time stage based on counter
    }
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59])
    }
    else if (secs === 0) {
      setTime([hrs, mins - 1, 59])
    }
    else {
      setTime([hrs, mins, secs - 1])
    } 

   } 
   else if (counter % 2 === 1 && counter !== 5){
	   	if (hrs === 0 && mins === 0 && secs === 0) {
	   	  setCounter(counter++)
	   	  reset()
	   	  //replace with reset to other time stage based on counter
	   	}
	   	else if (mins === 0 && secs === 0) {
	   	  setTime([hrs - 1, 59, 59])
	   	}
	   	else if (secs === 0) {
	   	  setTime([hrs, mins - 1, 59])
	   	}
	   	else {
	   	  setTime([hrs, mins, secs - 1])
	   	} 
   }

      else if (counter % 5 === 0) {
   	   	if (hrs === 0 && mins === 0 && secs === 0) {
   	   	  setCounter(counter++)
   	   	  setTime([0, 30, 0])
   	   	  //replace with reset to other time stage based on counter
   	   	}
   	   	else if (mins === 0 && secs === 0) {
   	   	  setTime([hrs - 1, 59, 59])
   	   	}
   	   	else if (secs === 0) {
   	   	  setTime([hrs, mins - 1, 59])
   	   	}
   	   	else {
   	   	  setTime([hrs, mins, secs - 1])
   	   	} 

      }


  }
  //reads back to defaults
  const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)])
  const startPause = () => {
  	
  	setIsRunning(!isRunning)
  }


  useEffect(() => {
  	if (isRunning) {
  		setCounter(counter++)
  		timerId = setInterval(() => tick(), 1000);
  		return () => clearInterval(timerId)
  	}
  	else {
  		return clearInterval(timerId)
  	}
  })

  return (
  	<View>
  	<Text>
  		{`
  		  ${hrs.toString().padStart(2,'0')}:
  		  ${mins.toString().padStart(2,'0')}:
  		  ${secs.toString().padStart(2,'0')}:
  		`}
  		POMODORO: {counter}
  	</Text>
  	<Text> {counter % 2 === 0 && counter !== 5 ? 'Break' : 'Work' }</Text>
  	<Text> {counter === 5 ? 'Take a 30 minute Break.' : null }</Text>
  	<TouchableOpacity>
	  	<Button 
	  	title='RESET' 
	  	accessibilityLabel="Reset the timer."
	  	onPress={reset}>
	  	</Button>
  	</TouchableOpacity>
  	<TouchableOpacity>
	  	<Button 
	  	title='START/PAUSE' 
	  	accessibilityLabel="Reset the timer."
	  	onPress={startPause}>
	  	</Button>
  	</TouchableOpacity>

  	</View>
  	)
}


export default CountdownTimer;