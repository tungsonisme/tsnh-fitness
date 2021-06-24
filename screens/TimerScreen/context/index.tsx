import * as React from 'react';
import { useState } from 'react';

export interface TimerContextConfig {
  work: number;
  reset: number;
  exercises: number;
  rounds: number;
  roundReset: number;
}

interface TimerContextType {
  config: TimerContextConfig;
  updateConfig: (name: string, value: number | undefined) => void;
}

const defaultConfig: TimerContextConfig = {
  work: 30,
  reset: 30,
  exercises: 1,
  rounds: 1,
  roundReset: 30,
};

const TimerContext = React.createContext<TimerContextType | undefined>(
  undefined,
);

export const useTimerContext = () => React.useContext(TimerContext);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [config, setConfig] = useState<TimerContextConfig>(defaultConfig);

  const updateConfig = (name: string, value: number | undefined) => {
    setConfig(currentConfig => ({
      ...currentConfig,
      [name]: value,
    }));
  };

  return (
    <TimerContext.Provider
      value={{
        config,
        updateConfig,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
