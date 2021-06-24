import * as React from 'react';
import { Icon } from 'react-native-elements';

import { Text, View } from '../../components/Themed';
import SettingItem from './components/SettingItem';
import SummaryTime from './components/SummaryTime';
import { TimerProvider } from './context';
import defaultStyles from './styles';
import { formatToNumberDisplay, formatToTimeDisplay } from './utils';

export default function TimerScreen() {
  return (
    <TimerProvider>
      <View style={defaultStyles.container}>
        <View style={defaultStyles.timerWrapper}>
          <Text style={defaultStyles.timer}>
            <SummaryTime />
          </Text>
        </View>

        <View style={defaultStyles.playBtnWrapper}>
          <Icon
            style={defaultStyles.playBtn}
            name="play"
            type="font-awesome"
            color="#f04a3e"
            size={40}
          />
        </View>

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
