import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    languageData = [
        { english: "chair", chinese: "椅子", img: "chair.jpeg", fav: false },
        { english: "chair", chinese: "椅子", img: "chair.jpeg", fav: false },
        { english: "chair", chinese: "椅子", img: "chair.jpeg", fav: true },
        { english: "chair", chinese: "椅子", img: "chair.jpeg", fav: false },
        { english: "chair", chinese: "椅子", img: "chair.jpeg", fav: false },
        { english: "chair", chinese: "椅子", img: "chair.jpeg", fav: false },
        { english: "chair", chinese: "椅子", img: "chair.jpeg", fav: true },
        { english: "chair", chinese: "椅子", img: "chair.jpeg", fav: false },
    ];

    constructor() { }
}
