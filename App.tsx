import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>🏠</Text>
        <Text style={styles.title}>Flat Manager Mobile</Text>
        <Text style={styles.subtitle}>
          Quick resident and maintenance updates from your phone.
        </Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    borderRadius: 20,
    backgroundColor: '#1e293b',
    borderColor: '#334155',
    borderWidth: 1,
    paddingVertical: 28,
    paddingHorizontal: 22,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 42,
    marginBottom: 10,
  },
  title: {
    color: '#f8fafc',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#cbd5e1',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
});
