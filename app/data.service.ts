import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    languageData = [
        { english: "Apple", chinese: "苹果", img: "apple.jpg", fav: false , englishAudio:"apple.mp3",chineseAudio:"apple female.mp3"},
        { english: "Butterfly", chinese: "蝴蝶", img: "butterfly.jpg", fav: false , englishAudio:"butterfly.mp3",chineseAudio:"butterfly female.mp3"},
        { english: "Chair", chinese: "椅子", img: "chair.jpeg", fav: true , englishAudio:"chair.mp3",chineseAudio:"chair female.mp3"},
        { english: "Doll", chinese: "娃娃", img: "doll.jpg", fav: true , englishAudio:"doll.mp3",chineseAudio:"doll female.mp3"},
        { english: "Elephant", chinese: "象", img: "elephant.jpg", fav: true , englishAudio:"elephant.mp3",chineseAudio:"elephant female.mp3"},
        { english: "Fish", chinese: "鱼", img: "fish.jpg", fav: true , englishAudio:"fish.mp3",chineseAudio:"fish female.mp3"},
        { english: "Guitar", chinese: "吉他", img: "guitar.jpg", fav: true , englishAudio:"guitar.mp3",chineseAudio:"guitar female.mp3"},
        { english: "Home", chinese: "家", img: "home.jpg", fav: true , englishAudio:"home.mp3",chineseAudio:"home female.mp3"},
        { english: "Ice Cream", chinese: "冰淇淋", img: "ice cream.jpg", fav: true , englishAudio:"ice cream.mp3",chineseAudio:"ice cream female.mp3"},
        { english: "Juice", chinese: "果汁", img: "juice.jpg", fav: true , englishAudio:"juice.mp3",chineseAudio:"juice female.mp3"},
        { english: "Keyboard", chinese: "键盘", img: "keyboard.jpg", fav: true , englishAudio:"keyboard.mp3",chineseAudio:"keyboard female.mp3"},
        { english: "Lock", chinese: "锁", img: "lock.jpg", fav: true , englishAudio:"lock.mp3",chineseAudio:"lock female.mp3"},
        { english: "Monkey", chinese: "猴", img: "monkey.jpg", fav: true , englishAudio:"monkey.mp3",chineseAudio:"monkey female.mp3"},
        { english: "Nose", chinese: "鼻子", img: "nose.jpg", fav: true , englishAudio:"nose.mp3",chineseAudio:"nose female.mp3"},
        { english: "Orange", chinese: "橙子", img: "orange.jpg", fav: true , englishAudio:"orange.mp3",chineseAudio:"orange female.mp3"},
        { english: "Pen", chinese: "钢笔", img: "pen.jpg", fav: true , englishAudio:"pen.mp3",chineseAudio:"pen female.mp3"},
        { english: "Queen", chinese: "女王", img: "queen.jpg", fav: true , englishAudio:"queen.mp3",chineseAudio:"queen female.mp3"},
        { english: "Rocket", chinese: "火箭", img: "rocket.jpg", fav: true , englishAudio:"rocket.mp3",chineseAudio:"rocket female.mp3"},
        { english: "Sun", chinese: "太阳", img: "sun.jpg", fav: true , englishAudio:"sun.mp3",chineseAudio:"sun female.mp3"},
        { english: "Train Station", chinese: "火车站", img: "train station.jpg", fav: true , englishAudio:"train station.mp3",chineseAudio:"train station female.mp3"},
        { english: "Umbrella", chinese: "雨伞", img: "umbrella.jpg", fav: true , englishAudio:"umberella.mp3",chineseAudio:"umberella female.mp3"},
        { english: "Van", chinese: "从", img: "van.jpg", fav: true , englishAudio:"van.mp3",chineseAudio:"van female.mp3"},
        { english: "Watermelon", chinese: "西瓜", img: "watermelon.jpg", fav: true , englishAudio:"watermelon.mp3",chineseAudio:"watermelon female.mp3"},
        { english: "X-Ray", chinese: "x射线", img: "x-ray.jpg", fav: true , englishAudio:"x-ray.mp3",chineseAudio:"x-ray female.mp3"},
        { english: "Yawn", chinese: "打哈欠", img: "ywan.jpg", fav: true , englishAudio:"yawn.mp3",chineseAudio:"yawn female.mp3"},
        { english: "Zoo", chinese: "动物园", img: "zoo.jpg", fav: true , englishAudio:"zoo.mp3",chineseAudio:"zoo female.mp3"}

    ];

    constructor() { }
}
