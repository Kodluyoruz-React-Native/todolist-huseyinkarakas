import { StyleSheet } from 'react-native';
import temaH from '../helper/temaH';
import tlfnH from '../helper/tlfnH';

//K  : container
//AK : sunContainer
//B  : button
//BY : buttonText

const W = tlfnH.W;
const H = tlfnH.H;
const R = temaH.renkler;

export const anasayfaS = StyleSheet.create({
    K: {
        flex: 1,
        backgroundColor: 'white',
    },

    K2: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoK: {
        position: 'absolute',
        left: W(2),
        top: H(2),
    },

    ustAlanK: {
        minHeight: W(20) + H(4),
        backgroundColor: R.r1,
        paddingLeft: W(25),
        paddingRight: 15,
        justifyContent: 'center',
    },

    ustAlanY: {
        fontWeight: 'bold',
        fontSize: 15,
        color: R.r2,
        textAlign: 'right'
    },

    notlarK: {
        flex: 1,
        marginTop: H(3),
    },

    notK: {
        backgroundColor: R.r1,
        marginTop: H(1.2),
        marginBottom: H(1.2),
        padding: W(2)
    },

    notButonlarK: {
        borderWidth: 1,

    },

});