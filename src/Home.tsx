import {Text, View, Button} from 'react-native';
import {useState} from 'react';
let [, , three] = ['anna', 'billa', 'shukha'];
export default function HomeScreen(): JSX.Element {
  let [count, setCount] = useState(1);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Text>{one}</Text>
      <Text>{two}</Text> */}
      <Text>{three}</Text>
      <Text>{count}</Text>
      <Button onPress={() => setCount(count + 1)} title="click">
        click
      </Button>
    </View>
  );
}
