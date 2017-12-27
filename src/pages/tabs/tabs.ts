import {Component} from '@angular/core';

import {QuestionsPage} from '../questions/questions';
import {HomePage} from '../home/home';
import {LoginPage} from "../login/login";
import {Events, NavController} from "ionic-angular";
import {CasesPage} from "../cases/cases";
import {ProfilePage} from "../profile/profile";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root: any = null;
    tab2Root: any = CasesPage;
    tab3Root: any = ProfilePage;
    user_type: string;

    constructor(public navCtrl: NavController, public events: Events) {
        this.user_type = window.localStorage.getItem("USER_TYPE");

        events.subscribe('user:logout', () => {
            navCtrl.setRoot(LoginPage);
        });

        if (this.user_type == '1')
            this.tab1Root = HomePage;
        else
            this.tab1Root = QuestionsPage;
    }
}
