import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, View } from 'react-native';
import FastImage, {
  FastImageProps,
  ImageStyle,
  Priority,
} from 'react-native-fast-image';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { ImagePlaceHolder } from '../../Constants';
import { Colors } from '../../Themes';
import { makeUrl } from '../../Utilities';

declare type Cache = 'immutable' | 'web' | 'cacheOnly';
declare type Source = {
  uri?: string;
  headers?: {
    [key: string]: string;
  };
  priority?: Priority;
  cache?: Cache;
};

export interface Props extends FastImageProps {
  style?: StyleProp<ImageStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  size?: number;
  circular?: boolean;
  resizeMode?: 'stretch' | 'contain' | 'cover';
  source: Source;
  placeHolderType?: 'Car' | 'User' | 'Default';
  loaderType?: 'SkeletonPlaceholder' | 'ActivityIndicator' | 'None';
}

const Image: React.FC<Props> = ({
  circular,
  size,
  resizeMode,
  style,
  imageStyle,
  source,
  placeHolderType,
  loaderType,

  ...restProps
}) => {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [uri, seturi] = useState(source);

  const placeHolderUri = useRef(
    placeHolderType === 'Car'
      ? ImagePlaceHolder.placeHolderVehicle
      : placeHolderType === 'User'
        ? ImagePlaceHolder.placeHolderUser
        : ImagePlaceHolder.placeHoldersimple
  ).current;

  const onLoadStart = () => {
    setloading(true);
  };

  const onLoadEnd = () => {
    setloading(false);
  };

  const onError = (e) => {
    seterror(true);
  };

  const loader = (Stl) => {
    return loading ? (
      <ActivityIndicator
        style={[styles.loader, styles.imageStyle, Stl, { zIndex: -1 }]}
        size={responsiveFontSize(4)}
        color={Colors.white}
      />
    ) : null;
  };

  useEffect(() => {
    let url = makeUrl(source, placeHolderUri);

    if (url.uri) {
      seturi(url);
    } else {
      seturi(source);
    }

    seterror(false);
  }, [source]);

  return circular ? (
    <>
      <View
        style={[
          styles.imageStyle,
          style,
          circular && {
            height: size,
            width: size,
            borderRadius: size / 2,
            overflow: 'hidden',
          },
        ]}>
        <FastImage
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          resizeMode={resizeMode}
          source={uri}
          style={[styles.imageStyle, imageStyle]}
          {...restProps}
        />
        {loading && loaderType !== 'None' && loader()}
      </View>
    </>
  ) : (
    <View>
      <FastImage
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        resizeMode={resizeMode}
        source={uri}
        style={[styles.imageStyle, style]}
        {...restProps}
      />
      {loading && loaderType !== 'None' && loader(style)}
    </View>
  );
};

Image.defaultProps = {
  size: responsiveFontSize(5),
  circular: false,
  style: {
    height: '100%',
    width: '100%',
  },

  resizeMode: 'cover',
  placeHolderType: 'Default',
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  loader: {
    position: 'absolute',
    alignSelf: 'center',
  },
});

export default Image;
