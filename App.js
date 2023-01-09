import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView} from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');

  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...courseGoals, enteredGoalText])

  }

  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Course Goal" onChangeText={goalInputHandler} />
        <Button title="add goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <ScrollView>
                  {courseGoals.map((e) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText} >{e}</Text>
          </View>

        ))}
        </ScrollView>
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
