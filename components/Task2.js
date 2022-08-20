import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	Button,
	Pressable,
	FlatList,
	List,
} from "react-native";

const ListItems = () => {
let [task, setTask] = useState([{ item: "" }])


  const addListItem = () => {
    setTask(task.concat([{ item: "" }]))
  }

  const removeListItem = (idx) => {
  	if (task.length !== 1){
    	setTask(task.filter((s, _idx) => _idx !== idx))
	}
  }

  let changeListItem = idx => evt => {
    const newListItem = task.map((it, sidx) => {
      if (idx !== sidx) return it
      return { ...it, item: evt.target.value }
    })

    setTask([{ item: newListItem }])
  }


  return (
  	<>
    <View style={{ width: '60%', justifySelf: 'center', alignItems: 'center', display: 'flex', height: 300}}>
      {task.map((ta, idx) => (
        <View style={{display: 'flex', flexDirection: 'row',  marginTop: 10}}>
          <TextInput
          	style={{backgroundColor: '#2C3F59', boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.1)', color: 'white', fontSize: 20}}
           	key={idx}
            type='text'
            placeholder={`Task ${idx + 1}`}
          />
          <TouchableOpacity><Text style={{backgroundColor: 'lightblue', textAlign: 'center', fontSize: 30}} title='-' onPress={() => removeListItem(idx)}>-</Text></TouchableOpacity>
          
        </View>
      ))
      }
      
    </View>
     <TouchableOpacity><Text style={{ width: 300, display: 'flex', backgroundColor: 'lightblue', borderRadius: 10, justifyContent: 'center', alignItems: 'center', fontSize: 30}} title='-' onPress={addListItem}>Add Task</Text></TouchableOpacity>
    </>
  )
}

export default ListItems;