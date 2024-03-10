/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {
  ColorValue,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const UncontrolledInput = ({
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

  const focusStyle = {
    color: isFocused ? color : '#777',
  };

  return (
    <View style={inputContainerStyle}>
      <Text>Uncontrolled Input</Text>
      <TextInput
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        style={[inputStyle, focusStyle]}
      />
    </View>
  );
};

const ControlledInput = ({
  color,
  placeholder,
}: {
  color: ColorValue;
  placeholder: string;
}) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const focusStyle = {
    color: isFocused ? color : '#777',
  };

  return (
    <View style={inputContainerStyle}>
      <Text>Controlled Input</Text>
      <TextInput
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={setValue}
        placeholder={placeholder}
        value={value}
        style={[inputStyle, focusStyle]}
      />
    </View>
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, containerStyle]}>
      <ControlledInput
        color="rgb(242, 13, 13)"
        placeholder="Type here (controlled)"
      />
      <UncontrolledInput
        color="rgb(13, 13, 242)"
        placeholder="Type here (uncontrolled)"
      />
    </View>
  );
}

const containerStyle = {
  flex: 1,
  gap: 20,
  justifyContent: 'center',
  alignItems: 'center',
} satisfies ViewStyle;

const inputContainerStyle = {
  gap: 5,
  alignItems: 'center',
  width: '100%',
} satisfies ViewStyle;

const inputStyle = {
  padding: 10,
  borderWidth: 1,
  width: '80%',
  borderColor: '#777',
} satisfies TextStyle;

export default App;
