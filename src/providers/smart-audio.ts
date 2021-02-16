
import { Injectable } from '@angular/core';
// import { NativeAudioOriginal } from '@ionic-native/native-audio';

@Injectable()
export class SmartAudio {

    audioType: string = 'html5';
    sounds: any = [];

    constructor() {

    }

    preload(key, asset) {

        if(this.audioType === 'html5'){

            let audio = {
                key: key,
                asset: asset,
                type: 'html5'
            };

            this.sounds.push(audio);

        } else {

            // this.nativeAudio.preloadSimple(key, asset);

            // let audio = {
            //     key: key,
            //     asset: key,
            //     type: 'native'
            // };

            // this.sounds.push(audio);
        }       

    }

    play(key){

        let audio = this.sounds.find((sound) => {
            return sound.key === key;
        });

        if(audio.type === 'html5'){

            let audioAsset = new Audio(audio.asset);
            audioAsset.play();

        } else {

            // this.nativeAudio.play(audio.asset).then((res) => {
            //     console.log(res);
            // }, (err) => {
            //     console.log(err);
            // });

        }

    }

}