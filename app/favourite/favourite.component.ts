import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService } from '~/data.service';
import * as platformModule from 'tns-core-modules/platform';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  moduleId: module.id

})
export class FavouriteComponent implements OnInit {
  imgHeight;
  imgWidth;

  constructor(private routerExtensions: RouterExtensions, private userService: DataService) { }

  favData;
  
  ngOnInit() {
   this.favData = this.userService.languageData;
   let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    let deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;

    this.imgHeight = deviceHeight * 0.036;
    this.imgWidth = deviceWidth * 0.06;
  }

  goback() {
    this.routerExtensions.back();
  }

  toggleFav(item) {
    item.fav = !item.fav;
}

}
