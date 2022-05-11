import React, {forwardRef} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

import {Colors, Fonts} from '../../Themes';

//import {Ionicons} from '../../constants/icons';

export interface Props extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  lableTextStyle?: StyleProp<TextStyle>;
  textInputStyle?: StyleProp<ViewStyle>;
  mask?: string;
  value?: string;
  onChangeText?(text: any): void;
  ref?: any;
  onPressIn?: any;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  maxLength?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  type?: 'PriceInput' | 'PercentageInput' | 'Default';
  onSubmitEditing?(): void;
  multiline?: boolean;
}

const TextInput = forwardRef<RNTextInput, Props>(
  (
    {
      style,
      editable,
      mask,
      onChangeText,
      onPressIn,
      value,
      title,
      disabled,
      titleStyle,
      containerStyle,
      placeholder,
      maxLength,
      autoCapitalize,
      type,
      onSubmitEditing,
      multiline,
      ...restProps
    },
    ref,
  ) => {
    const textChange = (formatted, extracted) => {
      onChangeText(formatted);
    };
    return (
      <View style={[containerStyle]}>
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        {disabled ? (
          <Text
            style={[
              styles.textInput,
              styles.disableTextInput,
              !value && styles.placeholderText,
              style,
            ]}></Text>
        ) : (
          <RNTextInput
            style={[styles.textInput, style]}
            {...restProps}
            placeholder={placeholder}
            value={value}
            autoCapitalize={autoCapitalize}
            onChangeText={onChangeText}
            editable={editable}
            maxLength={maxLength}
            multiline={multiline}
            {...{ref}}
            {...{onSubmitEditing}}
          />
        )}
      </View>
    );
  },
);
TextInput.defaultProps = {
  returnKeyType: 'done',
  ref: null,
  maxLength: 70,
  autoCapitalize: 'sentences',
};

const styles = StyleSheet.create({
  textInput: {
    fontFamily: Fonts.regular,
    fontSize: responsiveFontSize(1.7),
    color: Colors.darkText,
    height: responsiveFontSize(1),
    paddingHorizontal: '4%',
  },
  placeholderText: {
    color: Colors.placeHolder,
  },
  disableTextInput: {
    alignSelf: 'center',
    lineHeight: responsiveHeight(4),
  },
  title: {
    fontSize: responsiveFontSize(2),
    color: Colors.darkText,
    textTransform: 'capitalize',
    paddingVertical: responsiveHeight(1),
  },
});

export default TextInput;
