import React, { useState, useRef, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	Button,
	Dimensions,
	Animated, 
	Easing
} from "react-native";


import Svg, {
  Circle,
  Ellipse,
  Path,
  Line,
  Rect,
  ClipPath,
  Mask,
} from 'react-native-svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Loading = (props) => {
	const [ clickBool, setClickBool ] = useState(false)
	const quad1Anim = useRef(new Animated.Value(0)).current
	const quad2Anim = useRef(new Animated.Value(0)).current
	const quad3Anim = useRef(new Animated.Value(0)).current
	const quad4Anim = useRef(new Animated.Value(0)).current
	const fadeAnim = useRef(new Animated.Value(1)).current
	const introAnim = useRef(true)


//condense inline styles!
let aniArray = [quad1Anim, quad2Anim, quad3Anim, quad4Anim]

//opening animation
for (let i=0; i < aniArray.length; i++){
	Animated.timing(aniArray[i], {
		toValue: 1,
		ease: Easing.ease(),
		duration: 2000,
		delay: 500 * i,
		useNativeDriver: true
	}).start()
}

Animated.timing(fadeAnim,
		{
			toValue: 0,
			delay: 3500,
			duration: 1000
		}).start();


	return(
	<>

	<Animated.View 
		style=
		{{
			opacity: fadeAnim,
		}}>
		<SafeAreaView style={{ 
			backgroundColor: "#46858C", 
			height: windowHeight, 
			width: windowWidth, 
			overflow: 'hidden'}}>

	 
			<View style={styles.rowBox}>
				<Animated.View style={{
		          width: windowWidth / 2,
		   		  	height: windowHeight / 2,
		          flexDirection: "column",
		          alignItems: "center",
		          justifyContent: "center",
		          backgroundColor: '#76A1A6',
		          flex: 1,
		          zIndex: 99,
		          transform: [
		            {
		              translate: quad1Anim.interpolate({
		                inputRange: [0, 1],
		                outputRange: [-1000,0],
		               
		              })
		            }
		          ]
		        }}>
					<Text style={styles.text}>T</Text>
				</Animated.View>
				<Animated.View style={{
		        	width: windowWidth / 2,
			    		height: windowHeight / 2,
		        	flexDirection: "column",
		        	alignItems: "center",
		        	justifyContent: "center",
		        	backgroundColor: '#46858C',
		        	flex: 1,
		        	zIndex:99,
		        	transform: [
		        	  {
		        	    translate: quad2Anim.interpolate({
		        	      inputRange: [0, 1],
		        	      outputRange: [1000,0],
		        	    })
		        	  }
		        	]
				 	}}>
						<Text style={styles.text}>M</Text>
				</Animated.View>	
			</View>
			<View style={styles.rowBox}>
				<Animated.View style={{
			       width: windowWidth / 2,
				   	 height: windowHeight / 2,
			       flexDirection: "column",
			       alignItems: "center",
			       justifyContent: "center",
			       backgroundColor: '#275459',
			       flex: 1,
			       zIndex:99,
			       transform: [
			         {
			           translate: quad3Anim.interpolate({
			             inputRange: [0, 1],
			             outputRange: [-1000,0],
			           })
			         }
			       ]}}>
						<Text style={styles.text}>T</Text>
				</Animated.View>	
				<Animated.View style={{
				       width: windowWidth / 2,
					   	 height: windowHeight / 2,
				       flexDirection: "column",
				       alignItems: "center",
				       justifyContent: "center",
				       backgroundColor: '#2C3F59',
				       zIndex:99,
				       flex: 1,
				       transform: [
				         {
				           translate: quad4Anim.interpolate({
				             inputRange: [0, 1],
				             outputRange: [1000,0],
				           })
				         }
				       ]
					}}>
					<Text style={styles.text}>O</Text>
				</Animated.View>
			</View>
		</SafeAreaView>
	</Animated.View>
	</>
	)
}


const styles = StyleSheet.create({

	text: {
		fontSize: 32,
		color: 'white',
	},
	text: {
		fontSize: 32,
		color: 'white',
	},
	rowBox: {
		flexDirection: 'row', 
		height: windowHeight / 2, 
		width: windowWidth,

	},
	quarterCircle1: {
		zIndex: 99, 
		position: 'absolute', 
		fill:"#FF003D", 
		fillOpacity: 1,
	},
	quarterCircle2: {
		zIndex: 99, 
		position: 'absolute', 
		fill:"#42000F", 
		fillOpacity: 1,
	},
	quarterCircle3: {
		zIndex: 99, 
		position: 'absolute', 
		fill:"#7D001D", 
		fillOpacity: 1,
	},
	quarterCircle4: {
		zIndex: 99, 
		position: 'absolute', 
		fill:"#B8002B", 
		fillOpacity: 1,
	}

});



export default Loading;