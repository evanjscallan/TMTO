import React, { useState, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Animated, Easing } from 'react-native';
import ListItems from './components/ListItems'
import Loading from './components/Loading'
import Stages from './components/Stages'
import Task2 from './components/Task2'
import CountdownTimer from './components/CountdownTimer'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  let [clickBool, setClickBool ] = useState(false)
  let [startScreen, setStartScreen ] = useState(false)
  let fadeInAnim = useRef(new Animated.Value(0)).current
  let [defaultTime, setDefaultTime] = useState(1500)
  const hoursMinsSecs = {hours: 0, mins: 20, secs: 0}


  const handlePress = () => {
    setClickBool(true)
  }

  const changeIt = () => {
    let anim = Animated.timing(fadeInAnim,
    {
      toValue: 1,
      duration: 1000,
      ease: Easing.ease(),
      useNativeDriver: true,
    }).start();

    setStartScreen(true)
  }

  setTimeout(changeIt, 5000)

  
  
  return (

    <View style={styles.container}>
      <Animated.View >
      { !startScreen ? 
          <SafeAreaView>
            <Loading/>
          </SafeAreaView>

          :

          !clickBool ?
            <Animated.View 
              style={{ height: windowHeight, width: windowWidth, alignItems: 'center', justifyContent: 'center', opacity: fadeInAnim}}>
                  <Text onPress={() => handlePress()} style={{textAlign: 'left', fontSize:32, position: 'absolute', zIndex: -99}}>
                      PUSH TO START 
                  </Text>
              </Animated.View> 

              :

            <View>

              <CountdownTimer hoursMinsSecs={hoursMinsSecs}/>
              <ListItems/>
              <StatusBar style="auto" />
            </View>
          
          }

       </Animated.View>
    </View>


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#46858C',
    alignItems: 'flex-start',
    justifyContent: 'left',
    height: windowHeight,
    width: windowWidth,

  },
});
