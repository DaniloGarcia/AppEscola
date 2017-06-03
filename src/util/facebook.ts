import {Injectable} from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook'

@Injectable()
export class FacebookLogin {

    constructor(
        private fb: Facebook) {
    }

    login(sussessCallBack, errorCallBack){

        this.fb.login(['user_friends'])
            .then((res: FacebookLoginResponse) => {
            sussessCallBack(res)
        })
        .catch(e => {
            errorCallBack(e);
        });

    }

}