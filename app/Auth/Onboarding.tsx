import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Onboarding = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.circleLeft}></View>
      <View style={styles.circleRight}></View>
      <View style={styles.circleCenter}></View>
      <View style={styles.circleCenter2}></View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>WebLife</Text>
      </View>
      <View style={styles.signinButton}>
      <Button 
        onPress={() => navigation.navigate('SignIn')} 
        title="Sign In" 
        color="#689399" // 689399
        accessibilityLabel="Sign In" 
      />
      </View>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBDBCD',
  },
  circleLeft: {
    width: 300,
    height: 200,
    borderRadius: 90,
    backgroundColor: '#F8F1EB',
    position: 'absolute',
    top: -50,
    left: -50,
  },
  circleRight: {
    width: 300,
    height: 200,
    borderRadius: 90,
    backgroundColor: '#F8F1EB',
    position: 'absolute',
    bottom: -50,
    right: -50,
  },
  circleCenter: {
    width: 100,
    height: 100,
    borderRadius: 90,
    backgroundColor: '#F8F1EB',
    position: 'absolute',
    top: 400,
    left: 0,
  },
  circleCenter2: {
    width: 100,
    height: 100,
    borderRadius: 90,
    backgroundColor: '#F8F1EB',
    position: 'absolute',
    top: 400,
    right: 0,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F1EB',
    width: 300,
    height: 100,
    borderRadius: 90,
    alignSelf: 'center',
    marginTop: 350,
    shadowColor: '#4C7378', // Shadow color
    shadowOffset: { width: 15, height: 15 }, // Offset for shadow
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 40, // Shadow blur radius
    elevation: 10, // Shadow for Android
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#4C7378',
    fontFamily: Platform.OS === 'ios' ? 'Gill Sans' : 'Monospace',
  },
  signinButton: {
    position: 'absolute',
    bottom: 200,
    alignItems: 'center',
    alignSelf: 'center',
  },
})