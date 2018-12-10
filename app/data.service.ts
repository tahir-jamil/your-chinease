import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    languageData = [
        { english: "Apple", chinese: "苹果", img: "apple.jpg", fav: false },
        { english: "Butterfly", chinese: "蝴蝶", img: "butterfly.jpg", fav: false },
        { english: "Chair", chinese: "椅子", img: "chair.jpeg", fav: true },
        { english: "Doll", chinese: "娃娃", img: "doll.jpg", fav: true },
        { english: "Elephant", chinese: "象", img: "elephant.jpg", fav: true },
        { english: "Fish", chinese: "鱼", img: "fish.jpg", fav: true },
        { english: "Guitar", chinese: "吉他", img: "guitar.jpg", fav: true },
        { english: "Home", chinese: "家", img: "home.jpg", fav: true },
        { english: "Ice Cream", chinese: "冰淇淋", img: "ice cream.jpg", fav: true },
        { english: "Juice", chinese: "果汁", img: "juice.jpg", fav: true },
        { english: "Key", chinese: "键", img: "key.jpg", fav: true },
        { english: "Lock", chinese: "锁", img: "lock.jpg", fav: true },
        { english: "Monkey", chinese: "猴", img: "monkey.jpg", fav: true },
        { english: "Nose", chinese: "鼻子", img: "nose.jpg", fav: true },
        { english: "Orange", chinese: "橙子", img: "orange.jpg", fav: true },
        { english: "Pen", chinese: "钢笔", img: "pen.jpg", fav: true },
        { english: "Queen", chinese: "女王", img: "queen.jpg", fav: true },
        { english: "Rat", chinese: "鼠", img: "rat.jpg", fav: true },
        { english: "Sun", chinese: "太阳", img: "sun.jpg", fav: true },
        { english: "Train", chinese: "培养", img: "train.png", fav: true },
        { english: "Umbrella", chinese: "雨伞", img: "umbrella.jpg", fav: true },
        { english: "Van", chinese: "从", img: "van.jpg", fav: true },
        { english: "Watermelon", chinese: "西瓜", img: "watermelon.jpg", fav: true },
        { english: "X-Ray", chinese: "x射线", img: "x-ray.jpg", fav: true },
        { english: "Yawn", chinese: "打哈欠", img: "ywan.jpg", fav: true },
        { english: "Zoo", chinese: "动物园", img: "zoo.jpg", fav: true }

    ];

    constructor() { }
}
