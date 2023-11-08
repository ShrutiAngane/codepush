/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Demo from './Demo';
import codePush from "react-native-code-push";

let CodePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    installMode: codePush.InstallMode.IMMEDIATE,
    updateDialog: false,
  }

AppRegistry.registerComponent(appName, () => codePush(CodePushOptions)(Demo));
