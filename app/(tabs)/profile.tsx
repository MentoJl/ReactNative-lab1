import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function Profile() {
  const [form, setForm] = useState({ email: '', password: '', confirm: '', lastName: '', firstName: '' });

  const handleChange = (key: any, value: any) => setForm({ ...form, [key]: value });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput placeholder="Електронна пошта" style={styles.input} onChangeText={(t) => handleChange('email', t)} />
      <TextInput placeholder="Пароль" secureTextEntry style={styles.input} onChangeText={(t) => handleChange('password', t)} />
      <TextInput placeholder="Пароль (ще раз)" secureTextEntry style={styles.input} onChangeText={(t) => handleChange('confirm', t)} />
      <TextInput placeholder="Прізвище" style={styles.input} onChangeText={(t) => handleChange('lastName', t)} />
      <TextInput placeholder="Імʼя" style={styles.input} onChangeText={(t) => handleChange('firstName', t)} />
      <Button title="Зареєструватися" onPress={() => console.log(form)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 6 },
});
