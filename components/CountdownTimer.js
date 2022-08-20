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
	Dimensions
} from "react-native";




const CountdownTimer = ({ hoursMinsSecs }) => {
	const windowWidth = Dimensions.get('window').width;
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
  const reset = () => {

  if (isRunning === true){
  	setIsRunning(false)
  }
  setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)])
  }
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
  	<View style={{overflow: 'hidden', width: windowWidth * .9, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
	  	<View style={{borderColor: '#B4D2D9', borderWidth: 2, borderRadius: '100%', padding: 50, marginTop: 50, marginBottom: 50}}>
	  		<Text style={{fontSize: 60, textAlign: 'center',color: '#B4D2D9', display: 'flex', flexDirection: 'row', alignSelf: 'center', justifySelf: 'center'}}>
	  		{`${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`}
	  		</Text>
	  		<Text style={{fontSize: 30, color: '#B4D2D9',}}>Stage {counter}: 
	  	 {counter % 2 === 0 && counter !== 5 ? 'Break' : 'Work' }</Text>
	  		<Text> {counter === 5 ? 'Take a 30 minute Break.' : null }</Text>
	  	</View>
  	<TouchableOpacity style={{padding: 10}}>
	  	<Text 
	  	style={{backgroundColor:'white', backgroundColor: 'lightblue', fontSize: 20, padding: 7, borderRadius: 10}}
	  
	  	accessibilityLabel="Reset the timer."
	  	onPress={reset}>RESET
	  	</Text>
  	</TouchableOpacity>
  	<TouchableOpacity style={{padding: 10}}>
	  	<Text 
	  	style={{backgroundColor:'white', backgroundColor: 'lightblue', fontSize: 20, padding: 7, borderRadius: 10}}
	  	
	  	accessibilityLabel="Reset the timer."
	  	onPress={startPause}> START/PAUSE
	  	</Text>
  	</TouchableOpacity>

  	</View>
  	)
}

/*${hrs.toString().padStart(2,'0')}:*/

export default CountdownTimer;