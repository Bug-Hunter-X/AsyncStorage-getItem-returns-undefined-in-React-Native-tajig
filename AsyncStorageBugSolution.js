import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
  }
};

export default function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const retrievedData = await getData('@my_key');
      setData(retrievedData);
    };
    fetchData();
  }, []);

  React.useEffect(() => {
      storeData('@my_key', {name: 'John Doe', age: 30});
  }, []);

  return (
    <View>
      {data ? (
        <Text>Name: {data.name}, Age: {data.age}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
