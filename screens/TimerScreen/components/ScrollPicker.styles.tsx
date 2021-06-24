import { Dimensions, StyleSheet } from 'react-native';

const windowDimension = Dimensions.get('window');

export const valueItemHeight = 50;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  valueContainer: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  valueText: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: 'bold',
  },
  interactContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  interactText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default styles;
