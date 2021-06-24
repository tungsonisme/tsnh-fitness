import * as React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../../../components/Themed';
import SettingModal from './SettingModal';
import { useState } from 'react';
import { ScrollPickerConfig } from './ScrollPicker.types';
import { useTimerContext } from '../context';

const windowDimension = Dimensions.get('window');

const defaultStyles = StyleSheet.create({
  container: {
    width: windowDimension.width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const SettingItem: React.FC<{
  label: string;
  name: 'work' | 'reset' | 'exercises' | 'rounds' | 'roundReset';
  containerStyle?: any;
  scrollPickerConfig: ScrollPickerConfig;
}> = ({ label, name, containerStyle, scrollPickerConfig }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { config, updateConfig } = useTimerContext() || {};
  const value = config ? config[name] : undefined;

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View
          style={StyleSheet.compose(defaultStyles.container, containerStyle)}
        >
          <Text style={defaultStyles.label}>{label}</Text>
          <Text style={defaultStyles.value}>
            {scrollPickerConfig.valueTransformer
              ? scrollPickerConfig.valueTransformer(value)
              : value}
          </Text>
        </View>
      </TouchableOpacity>

      <SettingModal
        containerStyle={containerStyle}
        modalVisible={modalVisible}
        label={label}
        initialValue={value}
        onClose={newValue => {
          setModalVisible(false);
          if (updateConfig) {
            updateConfig(name, newValue);
          }
        }}
        scrollPickerConfig={scrollPickerConfig}
      />
    </>
  );
};

export default SettingItem;
