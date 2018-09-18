import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  languageData = [
    { english: "chair", chinese: "椅子" },
    { english: "second", chinese: "椅子" },
    { english: "third", chinese: "椅子" },
    { english: "forth", chinese: "椅子" }
  ];
}

