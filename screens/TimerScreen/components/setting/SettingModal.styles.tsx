import { Dimensions, StyleSheet } from 'react-native';

const windowDimension = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: windowDimension.width,
    height: windowDimension.height,
    paddingTop: 70,
  },
  closeBtnWrapper: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  closeBtnText: {
    fontSize: 26,
    textAlign: 'center',
  },
  scrollWrapper: {
    width: '100%',
    height: windowDimension.height - 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  value: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  selectedValue: {
    fontSize: 60,
  },
});

export default styles;
