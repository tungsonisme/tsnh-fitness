import { Dimensions, StyleSheet } from 'react-native';
import { redColor } from '../../components/Styles';

const windowDimension = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: windowDimension.height - 170,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: redColor,
  },
  timerWrapper: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: redColor,
  },
  timer: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white',
  },
  playBtnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: -50,
    borderRadius: 500,
    borderWidth: 10,
    borderColor: redColor,
  },
  playBtn: {
    backgroundColor: 'white',
    width: 85,
    height: 85,
    paddingLeft: 10,
    justifyContent: 'center',
    borderRadius: 500,
  },
  listSettingItem: {
    width: '100%',
    paddingTop: 65,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -50,
    zIndex: -1,
  },
  workSettingItem: {
    backgroundColor: '#deffde',
  },
  restSettingItem: {
    backgroundColor: '#fed5d5',
  },
  exercisesSettingItem: {
    backgroundColor: '#e6e6e6',
  },
  roundsSettingItem: {
    backgroundColor: '#e7e7ff',
  },
  roundResetSettingItem: {
    backgroundColor: '#feffb8',
  },
});

export default styles;
