import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet,  TextInput, View, FlatList } from 'react-native';
import GoalItem from './components/Goal_item';
import GoalInput from './components/Goal_input';

export default function App() {



  const [courseGoals, setCourseGoals] = useState([]);

  // function goalInputHandler(enteredText) {
  //   setEnteredGoalText(enteredText);
  // }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...
      courseGoals, 
      {text:enteredGoalText, id: Date.now().toString(36) + Math.random().toString(36).substring(2, 5)}
    ])
  }

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal ={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          itemData.index
          return (
            <GoalItem text={itemData.item.text} id ={itemData.item.id} onDeleteGoalItem ={deleteGoalHandler} />
          );
        }} 
        keyExtractor ={(item,index) => {
          return item.id;
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
    margin: 8
  },

  goalsContainer: {
    flex: 5
  },

  goalText: {
    color: 'white'
  },

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'purple',
    color: 'white'
  }
});
