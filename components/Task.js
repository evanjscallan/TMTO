import { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
  FlatList,
  List, Form
} from "react-native";

import { useForm } from 'react-hook-form';



const Task = () => {

  //target value in textinput sets text
  const [ tasky, setTasky ] = useState('')
  const { addTask, handleSubmit, setValue } = useForm()
  const onSubmit = useCallback(formData => {

    console.log(formData);

  }, []);

  const onChangeField = useCallback(
    name => text => {
      setValue(name, text);
      setTasky(name)
    },
    []);

  useEffect(() => {
    addTask


  }, [addTask])







  return (
    <SafeAreaView>
 
      <View>
        <TextInput
          placeholder='Task'
          onChangeText={onChangeField('task')}>
        </TextInput>
      </View>

      <View>
        <Button
        onPress={handleSubmit(onSubmit)}
        title='ADD'
        >
          {addTask}
          {tasky}
        </Button>

      </View>

    </SafeAreaView>
    )
}


export default Task;