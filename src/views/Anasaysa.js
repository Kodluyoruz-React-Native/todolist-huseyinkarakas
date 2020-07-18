import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import Resim from '../components/Resim';
import tlfnH from '../helper/tlfnH';

import C from '../controllers/anasayfaC';

import { anasayfaS as S } from './stil';

class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUptade;
    componentWillUnmount = C.cWUnmount;

    ustAlan() {
        const sa = C.splashAktif;

        return (
            <View style={[S.ustAlanK, { display: sa ? 'none' : 'flex' }]} >

            </View>
        );
    }

    render() {
        const sa = C.splashAktif;

        return (
            <View style={[S.K, sa && S.K2]}>
                <View style={!sa && S.logoK}>
                    <Resim
                        source={require('../../assets/logo/logo.png')}
                        height={tlfnH.W(sa ? 60 : 20)}
                    />
                </View>

                {this.ustAlan()}
            </View>
        );
    }
}

export default observer(Anasayfa);