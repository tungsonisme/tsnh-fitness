import * as React from 'react';

import { Text, View } from '../../../../components/Themed';
import styles from './WorkoutProgress.styles';

const WorkoutProgressItem: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <View
    style={
      isActive ? styles.workoutProgressActiveItem : styles.workoutProgressItem
    }
  />
);

const WorkoutProgress: React.FC<{
  label: string;
  progress: number;
  total: number;
}> = ({ label, progress, total }) => {
  const arrays = [];
  for (let i = 0; i < total; i++) {
    arrays.push(i + 1);
  }

  return (
    <View style={styles.workoutProgressContainer}>
      <Text style={styles.workoutProgressLabel}>{label}</Text>

      <View style={styles.workoutProgressListItem}>
        {arrays.map(item => (
          <WorkoutProgressItem key={item} isActive={progress >= item} />
        ))}
      </View>
    </View>
  );
};

export default WorkoutProgress;
