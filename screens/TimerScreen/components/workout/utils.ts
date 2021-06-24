import { TimerContextConfig } from '../../context/TimerContext';
import { WorkoutStep } from './WorkoutModal.types';

export const generateWorkoutSteps = (
  config: TimerContextConfig | undefined,
): WorkoutStep[] => {
  if (!config) {
    return [];
  }

  const { work, reset, exercises, rounds, roundReset } = config;
  const result: WorkoutStep[] = [
    {
      name: 'Prepare',
      time: 5,
    },
  ];

  for (let r = 0; r < rounds; r++) {
    for (let e = 0; e < exercises; e++) {
      result.push({
        name: 'Work',
        time: work,
      });

      if (e != exercises - 1) {
        result.push({
          name: 'Rest',
          time: reset,
        });
      }
    }

    if (r != rounds - 1) {
      result.push({
        name: 'Round Reset',
        time: roundReset,
      });
    }
  }

  return result;
};
