import { Dimensions, StyleSheet } from 'react-native';

const windowDimension = Dimensions.get('window');

const styles = StyleSheet.create({
  workoutProgressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
  },
  workoutProgressLabel: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  workoutProgressListItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  workoutProgressItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: 15,
    height: 15,
    borderRadius: 500,
    marginLeft: 5,
  },
  workoutProgressActiveItem: {
    backgroundColor: 'white',
    width: 15,
    height: 15,
    borderRadius: 500,
    marginLeft: 5,
  },
});

export default styles;
