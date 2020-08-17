/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten TypeScript template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import {
  ImageProps,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
  Input,
  Divider,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const BackIcon = (
  props?: Partial<ImageProps>,
): React.ReactElement<ImageProps> => <Icon {...props} name="arrow-back" />;

interface User {
  name: string;
  login: string;
  props: any;
  secureTextEntry: any;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const AlertIcon = (props: User) => (
  <Icon {...props} name="alert-circle-outline" />
);

export const LoginScreen: React.FC<User> = (props) => {
  const [email, setEmail] = React.useState<User>();
  const [password, setPassword] = React.useState<User>();
  const [secureTextEntry, setSecureTextEntry] = React.useState<User>(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderIcon = (props) => (
    <TouchableWithoutFeedback testID="toggleSecureEntry" onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  console.log(props);
  const navigateHome = () => {
    //props.navigation.goBack();
    props.navigation.navigate('Home');
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateHome} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <TopNavigation
          title="Login"
          alignment="center"
          //accessoryLeft={BackAction}
        />
        <Divider />
        <Layout style={styles.layout}>
          <Input
            testID="loginInput"
            value={email}
            label="E-mail"
            placeholder="Place your e-mail"
            onChangeText={(nextValue) => setEmail(nextValue)}
            style={{ paddingBottom: 30 }}
          />
          <Input
            testID="passwordInput"
            value={password}
            label="Password"
            placeholder="Place your password"
            caption="Should contain at least 8 symbols"
            accessoryRight={renderIcon}
            captionIcon={AlertIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={(nextValue) => setPassword(nextValue)}
          />
          <Button
            testID="submitButton"
            style={styles.button}
            appearance="filled"
            onPress={navigateHome}
          >
            Login
          </Button>
        </Layout>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginTop: 40,
    margin: 2,
    width: '100%',
  },
});
