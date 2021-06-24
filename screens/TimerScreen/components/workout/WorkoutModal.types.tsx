import * as React from 'react';

export interface WorkoutStep {
  name: 'Prepare' | 'Work' | 'Rest' | 'Round Reset';
  time: number;
}
