import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View, Modal } from '../../../../components/Themed';
import defaultStyles from './SettingModal.styles';
import { ScrollPicker } from './ScrollPicker';
import { ScrollPickerConfig } from './ScrollPicker.types';

const SettingModal: React.FC<{
  modalVisible: boolean;
  onClose: (value: number | undefined) => void;
  containerStyle?: any;
  label: string;
  initialValue: number | undefined;
  scrollPickerConfig: ScrollPickerConfig;
}> = ({
  modalVisible,
  onClose,
  containerStyle,
  label,
  initialValue,
  scrollPickerConfig,
}) => {
  const [selectedValue, setSelectedIndex] = useState<number | undefined>(
    initialValue,
  );

  return (
    <Modal transparent={true} visible={modalVisible}>
      <View style={StyleSheet.compose(defaultStyles.container, containerStyle)}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            onClose(selectedValue);
          }}
        >
          <View style={defaultStyles.closeBtnWrapper}>
            <Text style={defaultStyles.closeBtnText}>{label}</Text>
          </View>
        </TouchableOpacity>

        <View style={defaultStyles.scrollWrapper}>
          {modalVisible && (
            <ScrollPicker
              config={scrollPickerConfig}
              value={selectedValue}
              onChange={step => {
                setSelectedIndex(value => {
                  if ((value || 0) + step <= 0) {
                    return value;
                  }
                  return (value || 0) + step;
                });
              }}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default SettingModal;
