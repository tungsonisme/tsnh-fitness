import * as React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { Text, View } from '../../components/Themed';
import SettingItem from './components/setting/SettingItem';
import SummaryTime from './components/setting/SummaryTime';
import { TimerProvider } from './context/TimerContext';
import defaultStyles from './styles';
import { formatToNumberDisplay, formatToTimeDisplay } from './utils';
import WorkoutModal from './components/workout/WorkoutModal';
import WorkoutSuccessModal from './components/workout/WorkoutSuccessModal';
import { redColor } from '../../components/Styles';

export default function TimerScreen() {
  const [workoutModalVisible, setWorkoutModalVisible] = useState(false);
  const [workoutSuccessModalVisible, setWorkoutSuccessModalVisible] =
    useState(false);

  return (
    <TimerProvider>
      <View style={defaultStyles.container}>
        <View style={defaultStyles.timerWrapper}>
          <Text style={defaultStyles.timer}>
            <SummaryTime />
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setWorkoutModalVisible(true);
          }}
        >
          <View style={defaultStyles.playBtnWrapper}>
            <Icon
              style={defaultStyles.playBtn}
              name="play"
              type="font-awesome"
              color={redColor}
              size={40}
            />
          </View>
        </TouchableOpacity>

        <WorkoutModal
          modalVisible={workoutModalVisible}
          onClose={() => {
            setWorkoutModalVisible(false);
          }}
          showSuccessModal={() => {
            setWorkoutSuccessModalVisible(true);
          }}
        />

        <WorkoutSuccessModal
          modalVisible={workoutSuccessModalVisible}
          onClose={() => {
            setWorkoutSuccessModalVisible(false);
          }}
        />

        <View style={defaultStyles.listSettingItem}>
          <SettingItem
            label="Work"
            name="work"
            containerStyle={defaultStyles.workSettingItem}
            scrollPickerConfig={{
              step: 5,
              valueTransformer: formatToTimeDisplay,
            }}
          />
          <SettingItem
            label="Reset"
            name="reset"
            containerStyle={defaultStyles.restSettingItem}
            scrollPickerConfig={{
              step: 5,
              valueTransformer: formatToTimeDisplay,
            }}
          />
          <SettingItem
            label="Exercises"
            name="exercises"
            containerStyle={defaultStyles.exercisesSettingItem}
            scrollPickerConfig={{
              step: 1,
              valueTransformer: formatToNumberDisplay,
            }}
          />
          <SettingItem
            label="Rounds"
            name="rounds"
            containerStyle={defaultStyles.roundsSettingItem}
            scrollPickerConfig={{
              step: 1,
              valueTransformer: formatToNumberDisplay,
            }}
          />
          <SettingItem
            label="Round Reset"
            name="roundReset"
            containerStyle={defaultStyles.roundResetSettingItem}
            scrollPickerConfig={{
              step: 5,
              valueTransformer: formatToTimeDisplay,
            }}
          />
        </View>
      </View>
    </TimerProvider>
  );
}
