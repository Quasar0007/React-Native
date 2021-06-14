import IO from 'socket.io-client';
import Peer from 'react-native-peerjs';
import {ADD_STREAM, MY_STREAM, ADD_REMOTE_STREAM} from './type';

export const API_URI = 'http://192.168.29.166:5000';

export const JOIN_ROOM = () => async(dispatch) => {};