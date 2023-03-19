import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteGoalItem.bind(this,props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
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

