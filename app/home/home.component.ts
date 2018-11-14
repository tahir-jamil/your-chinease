import { Component, OnInit } from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService } from '~/data.service';
const firebase = require("nativescript-plugin-firebase");
import * as platformModule from 'tns-core-modules/platform';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {

  playerOptions = {
    audioFile: 'https://www.computerhope.com/jargon/m/example.mp3',
    loop: false,
    completeCallback: function () {
      console.log('finished playing');
    },
    errorCallback: function (errorObject) {
      console.log(JSON.stringify(errorObject));
    },
    infoCallback: function (args) {
      console.log(JSON.stringify(args));
    }
  };


  data;
  searchBarheight;
  imgHeight;
  imgWidth;

  constructor(private routerExtensions: RouterExtensions, private dataService: DataService) {
    this._player = new TNSPlayer();
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



  private _player: TNSPlayer;


  stateAudioSound() {
    this._player
      .playFromUrl(this.playerOptions)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log('something went wrong...', err);
      });
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
}


