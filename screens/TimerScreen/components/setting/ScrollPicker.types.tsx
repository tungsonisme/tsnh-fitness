import * as React from 'react';

export interface ScrollPickerConfig {
  step: number;
  valueTransformer?: (
    value: number | undefined,
  ) => string | number | React.ReactNode;
}
