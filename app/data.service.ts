import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class DataService {
    
    languageData = [
        { english: "Apple", chinese: "苹果", img: "apple.jpg", fav: false , englishAudio:"apple.mp3",chineseAudio:"apple female.mp3"},
        { english: "Butterfly", chinese: "蝴蝶", img: "butterfly.jpg", fav: false , englishAudio:"butterfly.mp3",chineseAudio:"butterfly female.mp3"},
        { english: "Chair", chinese: "椅子", img: "chair.jpeg", fav: false , englishAudio:"chair.mp3",chineseAudio:"chair female.mp3"},
        { english: "Doll", chinese: "娃娃", img: "doll.jpg", fav: false , englishAudio:"doll.mp3",chineseAudio:"doll female.mp3"},
        { english: "Elephant", chinese: "象", img: "elephant.jpg", fav: false , englishAudio:"elephant.mp3",chineseAudio:"elephant female.mp3"},
        { english: "Fish", chinese: "鱼", img: "fish.jpg", fav: false , englishAudio:"fish.mp3",chineseAudio:"fish female.mp3"},
        { english: "Guitar", chinese: "吉他", img: "guitar.jpg", fav: false , englishAudio:"guitar.mp3",chineseAudio:"guitar female.mp3"},
        { english: "Home", chinese: "家", img: "home.jpg", fav: false , englishAudio:"home.mp3",chineseAudio:"home female.mp3"},
        { english: "Ice Cream", chinese: "冰淇淋", img: "icecream.jpg", fav: false , englishAudio:"ice cream.mp3",chineseAudio:"ice cream female.mp3"},
        { english: "Juice", chinese: "果汁", img: "juice.jpg", fav: false , englishAudio:"juice.mp3",chineseAudio:"juice female.mp3"},
        { english: "Keyboard", chinese: "键盘", img: "keyboard.jpg", fav: false , englishAudio:"keyboard.mp3",chineseAudio:"keyboard female.mp3"},
        { english: "Lock", chinese: "锁", img: "lock.jpg", fav: false , englishAudio:"lock.mp3",chineseAudio:"lock female.mp3"},
        { english: "Monkey", chinese: "猴", img: "monkey.jpg", fav: false , englishAudio:"monkey.mp3",chineseAudio:"monkey female.mp3"},
        { english: "Nose", chinese: "鼻子", img: "nose.jpg", fav: false , englishAudio:"nose.mp3",chineseAudio:"nose female.mp3"},
        { english: "Orange", chinese: "橙子", img: "orange.jpg", fav: false , englishAudio:"orange.mp3",chineseAudio:"orange female.mp3"},
        { english: "Pen", chinese: "钢笔", img: "pen.jpg", fav: false , englishAudio:"pen.mp3",chineseAudio:"pen female.mp3"},
        { english: "Queen", chinese: "女王", img: "queen.jpg", fav: false , englishAudio:"queen.mp3",chineseAudio:"queen female.mp3"},
        { english: "Rocket", chinese: "火箭", img: "rocket.jpg", fav: false , englishAudio:"rocket.mp3",chineseAudio:"rocket female.mp3"},
        { english: "Sun", chinese: "太阳", img: "sun.jpg", fav: false , englishAudio:"sun.mp3",chineseAudio:"sun female.mp3"},
        { english: "Train Station", chinese: "火车站", img: "train station.jpg", fav: false , englishAudio:"train station.mp3",chineseAudio:"train station female.mp3"},
        { english: "Umbrella", chinese: "雨伞", img: "umbrella.jpg", fav: false , englishAudio:"umberella.mp3",chineseAudio:"umberella female.mp3"},
        { english: "Van", chinese: "从", img: "van.jpg", fav: false , englishAudio:"van.mp3",chineseAudio:"van female.mp3"},
        { english: "Watermelon", chinese: "西瓜", img: "watermelon.jpg", fav: false , englishAudio:"watermelon.mp3",chineseAudio:"watermelon female.mp3"},
        { english: "X-Ray", chinese: "x射线", img: "x-ray.jpg", fav: false , englishAudio:"x-ray.mp3",chineseAudio:"x-ray female.mp3"},
        { english: "Yawn", chinese: "打哈欠", img: "ywan.jpg", fav: false , englishAudio:"yawn.mp3",chineseAudio:"yawn female.mp3"},
        { english: "Zoo", chinese: "动物园", img: "zoo.jpg", fav: false , englishAudio:"zoo.mp3",chineseAudio:"zoo female.mp3"} 
    ];
    
    constructor() { }

    firstTime(): void {
        console.log("the data is set into the local storage once")
        localStorage.setItem('wordArray', JSON.stringify(this.languageData)); // save updated array back to localstorage
    }
    
    getWords() {
        console.log("get data from local storage")
        return JSON.parse(localStorage.getItem('wordArray')) || []; 
    }
}


// icre cream englishÇ