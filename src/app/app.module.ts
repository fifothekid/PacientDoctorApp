import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {HomePage} from '../pages/home/home';
import {CasesPage} from '../pages/cases/cases';
import {TabsPage} from '../pages/tabs/tabs';
import {RegistrationPage} from '../pages/registration/registration';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {FormattingService} from "../providers/formatting-service";
import {QuestionsPage} from "../pages/questions/questions";

import {KeysPipe} from "../pipes/keys-pipe";
import {DoctorsPage} from "../pages/doctors/doctors";
import {QueuePage} from "../pages/queue/queue";
import {ExtendedHttpService} from '../providers/extended-http.service';
import {HttpModule, Http} from '@angular/http';
import {AndroidPermissions} from "@ionic-native/android-permissions";
import {Camera} from '@ionic-native/camera';
import {Ionic2RatingModule} from 'ionic2-rating';

import {Push} from '@ionic-native/push';
import {ProfilePage} from "../pages/profile/profile";
import {LogoutPage} from "../pages/logout/logout";
import {NativeAudio} from "@ionic-native/native-audio";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        QuestionsPage,
        HomePage,
        TabsPage,
        LoginPage,
        RegistrationPage,
        DoctorsPage,
        QueuePage,
        CasesPage,
        ProfilePage,
        LogoutPage,
        KeysPipe
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        Ionic2RatingModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        QuestionsPage,
        HomePage,
        TabsPage,
        LoginPage,
        DoctorsPage,
        QueuePage,
        CasesPage,
        ProfilePage,
        LogoutPage,
        RegistrationPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        FormattingService,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        {provide: Http, useClass: ExtendedHttpService},
        AndroidPermissions,
        Camera,
        Push,
        NativeAudio
    ]
})
export class AppModule {
}
