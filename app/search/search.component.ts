import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService } from '~/data.service';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import * as platformModule from 'tns-core-modules/platform';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  moduleId: module.id
})
export class SearchComponent implements OnInit {

  public searchPhrase = {};
  searchData = [];
  imgHeight: number;
  imgWidth: number;

  constructor(private routerExtensions: RouterExtensions, private dataService: DataService) { }

  ngOnInit() {
    let deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    let deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;

    this.imgHeight = deviceHeight * 0.036;
    this.imgWidth = deviceWidth * 0.06;
  }

  goback() {
    this.routerExtensions.back();
  }

  public onSubmit(args) {
    this.searchData = [];
    this.searchPhrase = {};
    let searchBar = <SearchBar>args.object;
    this.searchPhrase = this.dataService.languageData.filter(item => {
      if (item.english.toLowerCase() == searchBar.text.toLowerCase()) {
        return item;
      }
    })

    if (this.searchPhrase[0]) {
      this.searchData.push(this.searchPhrase[0]);
    } else {
      this.searchData.push({word:true});
    }
  }


  toggleFav(item) {
    item.fav = !item.fav;
  }

}
