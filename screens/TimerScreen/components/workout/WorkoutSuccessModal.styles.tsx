import { Dimensions, StyleSheet } from 'react-native';

import { redColor } from '../../../../components/Styles';

const windowDimension = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: windowDimension.width,
    height: windowDimension.height,
  },
  topContainer: {
    flexBasis: 370,
    backgroundColor: redColor,
    paddingTop: 60,
    alignItems: 'center',
  },
  successIconWrapper: {
    backgroundColor: 'white',
    borderRadius: 500,
    width: 100,
    height: 100,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  successIcon: {},
  successText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 85,
  },
  bottomContainer: {
    flex: 1,
  },
  listWorkoutInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 60,
    flex: 1,
  },
  workoutInfo: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexBasis: 120,
  },
  workoutInfoIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  workoutInfoIcon: {},
  workoutInfoValue: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 10,
    marginBottom: 3,
  },
  workoutInfoText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    paddingBottom: 50,
  },
  historyButton: {
    width: '47%',
    backgroundColor: 'pink',
    borderRadius: 10,
  },
  historyButtonText: {
    height: 60,
    lineHeight: 60,
    textAlign: 'center',
    color: redColor,
    fontWeight: 'bold',
    fontSize: 20,
  },
  doneButton: {
    flexBasis: '47%',
    backgroundColor: redColor,
    borderRadius: 10,
  },
  doneButtonText: {
    height: 60,
    lineHeight: 60,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
