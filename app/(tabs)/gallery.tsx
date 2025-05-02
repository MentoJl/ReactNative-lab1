import { FlatList, Image, StyleSheet, View } from 'react-native';

const images = Array(12).fill(require('../../assets/images/react-logo.png'));

export default function Gallery() {
  return (
    <FlatList
      data={images}
      keyExtractor={(_, index) => index.toString()}
      numColumns={3}
      renderItem={({ item }) => (
        <View style={styles.imageWrapper}>
          <Image source={item} style={styles.image} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  imageWrapper: { flex: 1, margin: 5 },
  image: { width: '100%', aspectRatio: 1, borderRadius: 8 },
});
