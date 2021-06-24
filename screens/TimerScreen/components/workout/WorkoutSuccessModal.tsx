import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { Text, View, Modal } from '../../../../components/Themed';
import defaultStyles from './WorkoutSuccessModal.styles';
import { useTimerContext } from '../../context/TimerContext';
import { redColor } from '../../../../components/Styles';

const WorkoutInfo: React.FC<{
  icon: string;
  color: any;
  backgroundColor: any;
  value: string | number;
  text: string;
}> = ({ icon, value, text, color, backgroundColor }) => {
  return (
    <View style={defaultStyles.workoutInfo}>
      <View
        style={StyleSheet.compose(defaultStyles.workoutInfoIconWrapper, {
          backgroundColor: backgroundColor,
        })}
      >
        <Icon
          style={defaultStyles.workoutInfoIcon}
          name={icon}
          type="font-awesome"
          color={color}
          size={24}
        />
      </View>
      <Text
        style={StyleSheet.compose(defaultStyles.workoutInfoValue, { color })}
      >
        {value}
      </Text>
      <Text style={defaultStyles.workoutInfoText}>{text}</Text>
    </View>
  );
};

const WorkoutSuccessModal: React.FC<{
  modalVisible: boolean;
  onClose?: () => void;
}> = ({ modalVisible, onClose }) => {
  const { config: timerConfig } = useTimerContext() || {};

  return (
    <Modal transparent={true} visible={modalVisible}>
      <View style={defaultStyles.container}>
        <View style={defaultStyles.topContainer}>
          <Text style={defaultStyles.successText}>Congratulations</Text>

          <View style={defaultStyles.successIconWrapper}>
            <Icon
              style={defaultStyles.successIcon}
              name="check"
              type="font-awesome"
              color={redColor}
              size={50}
            />
          </View>

          <Text style={defaultStyles.successText}>Workout Complete</Text>
        </View>

        <View style={defaultStyles.bottomContainer}>
          <View style={defaultStyles.listWorkoutInfo}>
            <WorkoutInfo
              icon="calendar"
              color="green"
              backgroundColor="#d1ffdf"
              value="-"
              text="Days in a row"
            />
            <WorkoutInfo
              icon="heartbeat"
              color={redColor}
              backgroundColor="pink"
              value="-"
              text="Total workouts completed"
            />
            <WorkoutInfo
              icon="battery-half"
              color="#3f55ab"
              backgroundColor="lightblue"
              value="-"
              text="Total workout time"
            />
          </View>

          <View style={defaultStyles.buttonSection}>
            <TouchableOpacity
              activeOpacity={1}
              style={defaultStyles.historyButton}
              onPress={onClose}
            >
              <Text style={defaultStyles.historyButtonText}>Show History</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              style={defaultStyles.doneButton}
              onPress={onClose}
            >
              <Text style={defaultStyles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WorkoutSuccessModal;
