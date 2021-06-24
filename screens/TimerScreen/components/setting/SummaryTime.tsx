import * as React from 'react';

import { useTimerContext } from '../../context/TimerContext';
import { formatToTimeDisplay } from '../../utils';

const SummaryTime: React.FC = () => {
  const { config } = useTimerContext() || {};
  const {
    work = 0,
    reset = 0,
    exercises = 0,
    rounds = 0,
    roundReset = 0,
  } = config || {};

  const summaryTime =
    work * exercises * rounds +
    reset * (exercises - 1) * rounds +
    roundReset * (rounds - 1);

  return <>{formatToTimeDisplay(summaryTime)}</>;
};

export default SummaryTime;
