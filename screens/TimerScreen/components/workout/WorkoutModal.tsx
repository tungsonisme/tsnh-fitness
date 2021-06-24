import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text, View, Modal } from '../../../../components/Themed';
import defaultStyles from './WorkoutModal.styles';
import { WorkoutStep } from './WorkoutModal.types';
import { formatToTimeDisplay } from '../../utils';
import WorkoutProgress from './WorkoutProgress';
import { Icon } from 'react-native-elements';
import { useTimerContext } from '../../context/TimerContext';
import { generateWorkoutSteps } from './utils';
import { redColor } from '../../../../components/Styles';

const colorByStep: { [key: string]: string } = {
  Prepare: '#f9da26',
  Work: '#31b976',
  Rest: redColor,
  'Round Reset': '#f9da26',
};

const WorkoutModal: React.FC<{
  modalVisible: boolean;
  onClose?: () => void;
  showSuccessModal?: () => void;
}> = ({ modalVisible, onClose, showSuccessModal }) => {
  const stepInterval = useRef<any>();
  const [steps, setSteps] = useState<WorkoutStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [stepTime, setStepTime] = useState<number>();
  const [buttonState, setButtonState] = useState<
    'notStarted' | 'running' | 'pause'
  >('notStarted');
  const [currentExercises, setCurrentExercises] = useState<number>(0);
  const [currentRound, setCurrentRound] = useState<number>(0);
  const { config: timerConfig } = useTimerContext() || {};
  const { exercises, rounds } = timerConfig || {};

  useEffect(() => {
    if (modalVisible) {
      setSteps(generateWorkoutSteps(timerConfig));
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      startWorkout();
    }
  }, [modalVisible]);

  const startStepNextStep = () => {
    setCurrentStepIndex(value => {
      const nextStepIndex = value + 1;
      const currentStep = steps[nextStepIndex];

      if (!currentStep) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        stopWorkout();

        if (onClose) {
          onClose();
        }

        if (showSuccessModal) {
          showSuccessModal();
        }

        return -1;
      }

      if (currentStep.name === 'Work') {
        if (
          steps[value].name === 'Prepare' ||
          steps[value].name === 'Round Reset'
        ) {
          setCurrentRound(cr => cr + 1);
          setCurrentExercises(1);
        } else {
          setCurrentExercises(ce => ce + 1);
        }
      }

      setStepTime(currentStep.time);

      clearInterval(stepInterval.current);
      stepInterval.current = setInterval(() => {
        setStepTime(currentStepTime => {
          const newValue = (currentStepTime || 0) - 1;

          if (newValue < 0) {
            startStepNextStep();
            return currentStepTime;
          }

          return newValue;
        });
      }, 1000);

      return value + 1;
    });
  };

  const startWorkout = () => {
    setButtonState('running');
    startStepNextStep();
  };

  const pauseWorkout = () => {
    setButtonState('pause');
    clearInterval(stepInterval.current);
  };

  const continueWorkout = () => {
    setButtonState('running');
    stepInterval.current = setInterval(() => {
      setStepTime(currentStepTime => {
        const newValue = (currentStepTime || 0) - 1;

        if (newValue < 0) {
          startStepNextStep();
          return currentStepTime;
        }

        return newValue;
      });
    }, 1000);
  };

  const stopWorkout = () => {
    setButtonState('notStarted');
    clearInterval(stepInterval.current);
    setStepTime(undefined);
    setCurrentStepIndex(-1);
    setCurrentExercises(0);
    setCurrentRound(0);
    if (onClose) {
      onClose();
    }
  };

  const currentStep = steps[currentStepIndex];
  const { name } = currentStep || {};
  const color = currentStep ? colorByStep[name] : '#f9da26';

  return (
    <Modal transparent={true} visible={modalVisible}>
      <View
        style={{
          ...defaultStyles.container,
          backgroundColor: color,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            if (!currentStep && onClose) {
              onClose();
            }
          }}
        >
          <Text style={defaultStyles.stepName}>
            {currentStep ? name : 'Get Ready'}
          </Text>
        </TouchableOpacity>

        <WorkoutProgress
          label="Exercises"
          progress={currentExercises}
          total={exercises || 0}
        />
        <WorkoutProgress
          label="Round"
          progress={currentRound}
          total={rounds || 0}
        />

        <View style={defaultStyles.stepTimeWrapper}>
          <Text style={defaultStyles.stepTimeText}>
            {formatToTimeDisplay(stepTime)}
          </Text>

          <Text style={defaultStyles.stepName}>
            {(currentStep ? name : 'Click Play to start').toUpperCase()}
          </Text>
        </View>

        <View style={defaultStyles.buttonSection}>
          {buttonState === 'notStarted' && (
            <TouchableOpacity activeOpacity={1} onPress={startWorkout}>
              <Icon
                style={defaultStyles.playBtn}
                name="play"
                type="font-awesome"
                color={color}
                size={50}
              />
            </TouchableOpacity>
          )}

          {buttonState === 'running' && (
            <TouchableOpacity activeOpacity={1} onPress={pauseWorkout}>
              <Icon
                style={defaultStyles.pauseButton}
                name="pause"
                type="font-awesome"
                color={color}
                size={50}
              />
            </TouchableOpacity>
          )}

          {buttonState === 'pause' && (
            <>
              <TouchableOpacity activeOpacity={1} onPress={continueWorkout}>
                <Icon
                  style={defaultStyles.playBtn}
                  name="play"
                  type="font-awesome"
                  color={color}
                  size={50}
                />
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={1} onPress={stopWorkout}>
                <Text style={defaultStyles.stopButtonText}>Stop</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default WorkoutModal;
