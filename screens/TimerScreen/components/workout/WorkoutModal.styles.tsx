import { Dimensions, StyleSheet } from 'react-native';

const windowDimension = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: windowDimension.width,
    height: windowDimension.height,
    paddingTop: 60,
  },
  stepName: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  stepTimeWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepTimeText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -50,
  },
  buttonSection: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 80,
  },
  playBtn: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 500,
    padding: 25,
    paddingLeft: 37,
  },
  pauseButton: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 500,
    padding: 25,
    paddingLeft: 27,
  },
  stopButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -65,
    marginLeft: 240,
  },
});

export default styles;
