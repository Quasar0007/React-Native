import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from './components/home';
import VideoConf from './components/videoConf';

// import {
//   mediaDevices,
// } from 'react-native-webrtc';

// import {joinRoom} from './components/action/videoAction';

export default function App() {



  const [screen, setScreen] = useState(false)
  const directToConferenceHandler = () => {
    setScreen(true);
  }
  if (!screen) {
    return (
      <Home fun={directToConferenceHandler} />
    );
  } else {
    return (
      <View style={styles.mainView}>
        <VideoConf />
        {/* <VideoConf />
        <VideoConf />
        <VideoConf /> */}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  mainView: {
    // marginTop: 30,
    height: '100%',
    marginTop: 30,
    flex: 1,
    // width:'100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
