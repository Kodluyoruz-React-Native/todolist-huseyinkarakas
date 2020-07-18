import { observable, action, decorate } from 'mobx';

class anasayfaC {
    cDMount = () => { //açılıştan hemen sonra
        setTimeout(() => this.splashAktif = false, 2000);
    }
    cDUptade = () => { //update'ten hemen sonra

    }
    cWUnmount = () => { //kapanıştan hemen önce

    }

    splashAktif = true; //true: splash göster, false: anasayfa göster
}

decorate(
    anasayfaC,
    {
        cDMount: action,
        cDUptade: action,
        cWUnmount: action,

        splashAktif: observable,
    }
);

export default new anasayfaC();