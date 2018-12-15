import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService } from '~/data.service';
const firebase = require("nativescript-plugin-firebase");
import * as platformModule from 'tns-core-modules/platform';
import * as application from 'tns-core-modules/application';

import { TNSPlayer } from 'nativescript-audio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {

  

  private _player: TNSPlayer;

  data;
  searchBarheight;
  imgHeight;
  imgWidth;
  audioUrlValue : any;

  constructor(private routerExtensions: RouterExtensions, private dataService: DataService) {

  }


  ngOnInit() {
    firebase.init({
      persist: true,
      // onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when he re-visits your app
      //   console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
      //   if (data.loggedIn) {
      //     console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
      //   }
      // }
    }).then(
      instance => {
        console.log("firebase.init done");
      },
      error => {
        console.log(`firebase.init error: ${error}`);
      }
    );

    this.data = this.dataService.languageData;
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    let deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;

    this.imgHeight = deviceHeight * 0.036;
    this.imgWidth = deviceWidth * 0.06;
    this._player = new TNSPlayer();
    
  }


  getData() {
    firebase.getCurrentUser()
      .then(user => console.log("User uid: " + user.uid))
      .catch(error => console.log("Trouble in paradise: " + error));

    // firebase.login(
    //   {
    //     type: firebase.LoginType.PASSWORD,
    //     passwordOptions: {
    //       email: 'neelam@translator.com',
    //       password: 'neelam123'
    //     }
    //   })
    //   .then(result => JSON.stringify(result))
    //   .catch(error => console.log(error));

    // firebase.getValue('/words')
    //   .then(result => {
    //     console.log(JSON.stringify(result));
    //   })
    //   .catch(error => console.log("Error: " + error));
  }

  saveData() {
    // to store an array of JSON objects
    firebase.setValue(
      '/companies',
      [
        { name: 'Telerik', country: 'Bulgaria' },
        { name: 'Google', country: 'USA' }
      ]
    );
  }

  dataItems = ['a', 'b', 'v', 'e'];
  onClear() { }
  onSubmit() { }


  playAudio(audioPath) {
    firebase.storage.getDownloadUrl({
      // optional, can also be passed during init() as 'storageBucket' param so we can cache it
      bucket: 'gs://dddd-c7570.appspot.com',
      // the full path of an existing file in your Firebase storage
      remoteFullPath: audioPath
    }).then((url) => {
          this.audioUrlValue  = url;
          console.log("Remote URL: " + this.audioUrlValue);
          if (this.audioUrlValue) { 
            this.stateAudioSound(this.audioUrlValue)
          }
        },
        (error) => {
          console.log("Error: " + error);
        }
    );
  }


  stateAudioSound(audioUrlValue) {
    this._player = new TNSPlayer();

    if (this._player) {
      console.log("------------------ defined"+ "this is the url"+ audioUrlValue);
      
      this._player
      .playFromUrl({
        audioFile:audioUrlValue,
        loop: false,
      })
      .then(() =>  {
        console.log("working audio complete");
      })
      .catch((err)  => {
        console.log('something went wrong...', err);
      });
    } else {
       console.log("------------------ not defined");
    }
  }

  public togglePlay() {
    if (this._player.isAudioPlaying()) {
      this._player.pause();
    } else {
      this._player.play();
    }
  }

  private _trackComplete(args: any) {
    console.log('reference back to player:', args.player);
    // iOS only: flag indicating if completed succesfully
    console.log('whether song play completed successfully:', args.flag);
  }

  private _trackError(args: any) {
    console.log('reference back to player:', args.player);
    console.log('the error:', args.error);
    // Android only: extra detail on error
    console.log('extra info on the error:', args.extra);
  }


  favourite() {
    this.routerExtensions.navigate(['/favorite'], {
      transition: {
        name: 'fade',
        curve: 'linear'
      }
    });
  }


  toggleFav(item) {
      item.fav = !item.fav;
  }

  search() {
    this.routerExtensions.navigate(['/search'], {
      transition: {
        name: 'fade',
        curve: 'linear'
      }
    });
  }
}


