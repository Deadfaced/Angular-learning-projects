import { Component } from '@angular/core';
import { Character } from '../../shared/character.model';

@Component({
  selector: 'app-katakana-page',
  templateUrl: './katakana-page.component.html',
  styleUrl: './katakana-page.component.css'
})
export class KatakanaPageComponent {
  katakanaChars: Character[] = [
    new Character('ア', 'a', ''),
    new Character('イ', 'i', ''),
    new Character('ウ', 'u', ''),
    new Character('エ', 'e', ''),
    new Character('オ', 'o', ''),

    new Character('カ', 'ka', ''),
    new Character('キ', 'ki', ''),
    new Character('ク', 'ku', ''),
    new Character('ケ', 'ke', ''),
    new Character('コ', 'ko', ''),

    new Character('サ', 'sa', ''),
    new Character('シ', 'shi', 'si'),
    new Character('ス', 'su', ''),
    new Character('セ', 'se', ''),
    new Character('ソ', 'so', ''),

    new Character('タ', 'ta', ''),
    new Character('チ', 'chi', ''),
    new Character('ツ', 'tsu', ''),
    new Character('テ', 'te', ''),
    new Character('ト', 'to', ''),

    new Character('ナ', 'na', ''),
    new Character('ニ', 'ni', ''),
    new Character('ヌ', 'nu', ''),
    new Character('ネ', 'ne', ''),
    new Character('ノ', 'no', ''),

    new Character('ハ', 'ha', ''),
    new Character('ヒ', 'hi', ''),
    new Character('フ', 'hu', 'fu'),
    new Character('ヘ', 'he', ''),
    new Character('ホ', 'ho', ''),

    new Character('マ', 'ma', ''),
    new Character('ミ', 'mi', ''),
    new Character('ム', 'mu', ''),
    new Character('メ', 'me', ''),
    new Character('モ', 'mo', ''),

    new Character('ヤ', 'ya', ''),
    new Character('ユ', 'yu', ''),
    new Character('ヨ', 'yo', ''),

    new Character('ラ', 'ra', ''),
    new Character('リ', 'ri', ''),
    new Character('ル', 'ru', ''),
    new Character('レ', 're', ''),
    new Character('ロ', 'ro', ''),

    new Character('ワ', 'wa', ''),
    new Character('ヲ', 'wo', ''),
    new Character('ン', 'n', ''),

    //dakuten
    new Character('ガ', 'ga', ''),
    new Character('ギ', 'gi', ''),
    new Character('グ', 'gu', ''),
    new Character('ゲ', 'ge', ''),
    new Character('ゴ', 'go', ''),

    new Character('ザ', 'za', ''),
    new Character('ジ', 'ji', ''),
    new Character('ズ', 'zu', ''),
    new Character('ゼ', 'ze', ''),
    new Character('ゾ', 'zo', ''),

    new Character('ダ', 'da', ''),
    new Character('ヂ', 'ji', ''),
    new Character('ヅ', 'zu', ''),
    new Character('デ', 'de', ''),
    new Character('ド', 'do', ''),
    
    new Character('バ', 'ba', ''),
    new Character('ビ', 'bi', ''),
    new Character('ブ', 'bu', ''),
    new Character('ベ', 'be', ''),
    new Character('ボ', 'bo', ''),

    new Character('ヴ', 'vu', ''),
    new Character('ヴァ', 'va', ''),
    new Character('ヴィ', 'vi', ''),
    new Character('ヴェ', 've', ''),
    new Character('ヴォ', 'vo', ''),

    //handakuten
    new Character('パ', 'pa', ''),
    new Character('ピ', 'pi', ''),
    new Character('プ', 'pu', ''),
    new Character('ペ', 'pe', ''),
    new Character('ポ', 'po', ''),

    //yoon
    new Character('キャ', 'kya', ''),
    new Character('キュ', 'kyu', ''),
    new Character('キョ', 'kyo', ''),

    new Character('シャ', 'sha', ''),
    new Character('シュ', 'shu', ''),
    new Character('ショ', 'sho', ''),

    new Character('チャ', 'cha', ''),
    new Character('チュ', 'chu', ''),
    new Character('チョ', 'cho', ''),

    new Character('ニャ', 'nya', ''),
    new Character('ニュ', 'nyu', ''),
    new Character('ニョ', 'nyo', ''),

    new Character('ヒャ', 'hya', ''),
    new Character('ヒュ', 'hyu', ''),
    new Character('ヒョ', 'hyo', ''),

    new Character('ミャ', 'mya', ''),
    new Character('ミュ', 'myu', ''),
    new Character('ミョ', 'myo', ''),

    new Character('リャ', 'rya', ''),
    new Character('リュ', 'ryu', ''),
    new Character('リョ', 'ryo', ''),

    //dakuten yoon
    new Character('ギャ', 'gya', ''),
    new Character('ギュ', 'gyu', ''),
    new Character('ギョ', 'gyo', ''),

    new Character('ジャ', 'ja', ''),
    new Character('ジュ', 'ju', ''),
    new Character('ジョ', 'jo', ''),

    new Character('ビャ', 'bya', ''),
    new Character('ビュ', 'byu', ''),
    new Character('ビョ', 'byo', ''),

    //handakuten yoon
    new Character('ピャ', 'pya', ''),
    new Character('ピュ', 'pyu', ''),
    new Character('ピョ', 'pyo', ''),
  ];


  correctAnswers: number[] = [];
  submitted: boolean = false;
  totalCorrect: number;
  totalAnswers: number;
  score: string;

  shuffle = (array: Character[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  shuffledChars = this.shuffle(this.katakanaChars);

  countCorrectAnswers(event){
    this.correctAnswers.push(event);
  }
  showScore(){
    this.submitted = true;
    this.totalCorrect = this.correctAnswers.length;
    this.totalAnswers = this.katakanaChars.length;
    this.score = ((this.totalCorrect / this.totalAnswers) * 100).toFixed(2);
  }
}
