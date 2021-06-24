import * as React from 'react';
import { useRef } from 'react';

import { Text, View } from '../../../components/Themed';
import styles from './ScrollPicker.styles';
import { ScrollPickerConfig } from './ScrollPicker.types';

enum SwipeMove {
  swipeUp,
  swipeDown,
}

const SLOW_CHANGE_INTERVAL_TIME = 250;
const FAST_CHANGE_INTERVAL_TIME = 50;
const NUMBER_OF_CHANGE_TO_INCREASE_SPEED = 5;

export const ScrollPicker: React.FC<{
  config: ScrollPickerConfig;
  value: number | undefined;
  onChange: (value: number) => void;
}> = ({ config: { step, valueTransformer }, value, onChange }) => {
  const touchY = useRef<number>();
  const lastMove = useRef<SwipeMove>();
  const interval = useRef<any>();
  const numberOfChange = useRef<number>(0);

  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>
          {valueTransformer ? valueTransformer(value) : value}
        </Text>
      </View>

      <View
        style={styles.interactContainer}
        onTouchStart={e => (touchY.current = e.nativeEvent.pageY)}
        onTouchMove={e => {
          if (touchY.current === e.nativeEvent.pageY) {
            return;
          }

          const isSwipeUp = (touchY.current || 0) - e.nativeEvent.pageY > 5;
          const isSwipeDown = (touchY.current || 0) - e.nativeEvent.pageY < -5;

          if (isSwipeUp) {
            if (lastMove.current !== SwipeMove.swipeUp) {
              numberOfChange.current = 0;

              clearInterval(interval.current);

              interval.current = setInterval(() => {
                if (
                  numberOfChange.current > NUMBER_OF_CHANGE_TO_INCREASE_SPEED
                ) {
                  clearInterval(interval.current);

                  interval.current = setInterval(() => {
                    onChange(step);
                  }, FAST_CHANGE_INTERVAL_TIME);
                }

                numberOfChange.current = numberOfChange.current + 1;
                onChange(step);
              }, SLOW_CHANGE_INTERVAL_TIME);
            }
            lastMove.current = SwipeMove.swipeUp;
          } else if (isSwipeDown) {
            if (lastMove.current !== SwipeMove.swipeDown) {
              numberOfChange.current = 0;

              clearInterval(interval.current);

              interval.current = setInterval(() => {
                if (
                  numberOfChange.current > NUMBER_OF_CHANGE_TO_INCREASE_SPEED
                ) {
                  clearInterval(interval.current);

                  interval.current = setInterval(() => {
                    onChange(-step);
                  }, FAST_CHANGE_INTERVAL_TIME);
                }

                numberOfChange.current = numberOfChange.current + 1;
                onChange(-step);
              }, SLOW_CHANGE_INTERVAL_TIME);
            }
            lastMove.current = SwipeMove.swipeDown;
          }

          touchY.current = e.nativeEvent.pageY;
        }}
        onTouchEnd={() => {
          clearInterval(interval.current);
          if (lastMove.current === SwipeMove.swipeUp) {
            onChange(step);
          } else if (lastMove.current === SwipeMove.swipeDown) {
            onChange(-step);
          }
          touchY.current = undefined;
          lastMove.current = undefined;
          numberOfChange.current = 0;
        }}
      >
        <Text style={styles.interactText}>SWIPE UP TO INCREASE</Text>
        <Text style={styles.interactText}>SWIPE DOWN TO DECREASE</Text>
      </View>
    </View>
  );
};

export default ScrollPicker;
