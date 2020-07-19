import { observable, action, decorate } from 'mobx';
import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class tlfnH {
    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;

    W = d => (this.w * d / 100);
    H = d => (this.h * d / 100);

    sbh = getStatusBarHeight(); //durum çubuğu yüksekliği
    sbhi = getStatusBarHeight(true); // durum çubuğu yüksekliği sadece ios, android: 0

    android = Platform.OS === 'android';
    ios = Platform.OS === 'ios';
}

decorate(
    tlfnH,
    {
        w: observable,
        h: observable,

        W: action,
        H: action,

        android: observable,
        ios: observable,
    }
);

export default new tlfnH();