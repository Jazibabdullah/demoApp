import React, {FC} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  Modal,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export interface Props {
  loading: boolean;
  wrapper?: StyleProp<ViewStyle>;
  size?: Number;
  color?: string;
  fullScreen?: Boolean;
  style?: StyleProp<ViewStyle>;
  type?: 'Simple' | 'MarketPlace' | 'Garage';
  from?: any;
  onLoaderPressed?(): void;
}

const Loader: FC<Props> = ({
  wrapper,
  size,
  fullScreen,
  style,
  color,
  loading,
  type,
  from,
  onLoaderPressed,
}) => {
  const onLoaderPressedLocal = () => {
    onLoaderPressed && onLoaderPressed();
  };
  return fullScreen ? (
    <>
      {loading ? (
        <Modal
          animationType="none"
          transparent={true}
          visible={true}
          onRequestClose={() => {}}>
          <SafeAreaView style={[styles.wrapper, wrapper]}>
            <TouchableOpacity
              disabled={!from}
              onPress={onLoaderPressedLocal}
              style={styles.imageView}>
              <ActivityIndicator size={size} color={color} />
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
      ) : null}
    </>
  ) : loading ? (
    <View style={[styles.imageView, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  ) : null;
};

Loader.defaultProps = {
  fullScreen: false,
  size: responsiveFontSize(6),
  color: '#5AB1A2',
  type: 'Simple',
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  imageView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Loader;
