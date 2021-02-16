import { Component } from '@angular/core';
import { SmartAudio } from 'src/providers/smart-audio';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private audio: SmartAudio,
  ) {
    audio.preload('doit', '/assets/sound.mp3')
  }

  doit() {
    this.audio.play('doit')
  }

}
