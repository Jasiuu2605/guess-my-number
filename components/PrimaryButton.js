import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log('pressed');
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: '#ffffff40' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: '#4e0329',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
