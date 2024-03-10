/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {
  ColorValue,
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Input = ({
  color,
  placeholder,
}: {
  color: ColorValue;
  placeholder: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <TextInput
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
      style={[
        {
          padding: 10,
          borderWidth: 1,
          width: '80%',
          borderColor: '#777',
          color: isFocused ? color : undefined,
        },
      ]}
    />
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={[
          backgroundStyle,
          {flex: 1, gap: 20, justifyContent: 'center', alignItems: 'center'},
        ]}>
        <Input color="rgb(242, 13, 13)" placeholder="Type here" />
      </View>
    </SafeAreaView>
  );
}

export default App;
