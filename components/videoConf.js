import React, { useEffect, useState } from 'react';
// import AgoraUIKit from 'agora-rn-uikit';
import { Camera } from 'expo-camera';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import {Video} from 'react-native-video';

const VideoConf = (props) => {
    // let cameraRef = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === false) {
        return (<View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                setType(
                    hasPermission ? setHasPermission(false) : setHasPermission(true)
                        
                );
            }}>
            <Text style={styles.text}> Video </Text>
        </TouchableOpacity>
    </View> )
      }

    return (
        <View style={styles.main}>
            <Camera style={styles.preview} type={type} useCamera2Api={true}/>
                {/* <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                hasPermission ? setHasPermission(false) : setHasPermission(true)
                                    
                            );
                        }}>
                        <Text style={styles.text}> Video </Text>
                    </TouchableOpacity>
                </View>
            </Camera> */}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        // marginTop: 0,
        borderWidth: 4,
        borderColor: 'red',
        height: '50%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // textView: {
    //     flex: 1,
    //     padding: 10,
    // },
    preview: {
        flex: 1,
        height: '100%',
        width: '100%',
        borderWidth: 1,
        borderColor: 'white',

    },
    // button: {
    //     height: 30,
    // },
    // buttonContainer: {
    //     height: 40,
    // }
})


export default VideoConf
