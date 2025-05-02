import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const data = Array(6).fill({
  title: 'Заголовок новини',
  date: 'Дата новини',
  text: 'Короткий текст новини'
});

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Новини</Text>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={require('../../assets/images/react-logo.png')} style={styles.image} />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.date}</Text>
              <Text>{item.text}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  card: { flexDirection: 'row', marginBottom: 12 },
  image: { width: 60, height: 60, marginRight: 10 },
  title: { fontWeight: 'bold' },
});
