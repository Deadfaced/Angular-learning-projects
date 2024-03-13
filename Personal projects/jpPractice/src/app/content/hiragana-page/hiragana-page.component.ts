import { Component } from '@angular/core';
import { Character } from '../../shared/character.model';

@Component({
  selector: 'app-hiragana-page',
  templateUrl: './hiragana-page.component.html',
  styleUrl: './hiragana-page.component.css'
})
export class HiraganaPageComponent {
  hiraganaChars: Character[] = [
    new Character('あ', 'a', ''),
    new Character('い', 'i', ''),
    new Character('う', 'u', ''),
    new Character('え', 'e', ''),
    new Character('お', 'o', ''),

    new Character('か', 'ka', ''),
    new Character('き', 'ki', ''),
    new Character('く', 'ku', ''),
    new Character('け', 'ke', ''),
    new Character('こ', 'ko', ''),

    new Character('さ', 'sa', ''),
    new Character('し', 'shi', 'si'),
    new Character('す', 'su', ''),
    new Character('せ', 'se', ''),
    new Character('そ', 'so', ''),

    new Character('た', 'ta', ''),
    new Character('ち', 'chi', ''),
    new Character('つ', 'tsu', ''),
    new Character('て', 'te', ''),
    new Character('と', 'to', ''),

    new Character('な', 'na', ''),
    new Character('に', 'ni', ''),
    new Character('ぬ', 'nu', ''),
    new Character('ね', 'ne', ''),
    new Character('の', 'no', ''),

    new Character('は', 'ha', ''),
    new Character('ひ', 'hi', ''),
    new Character('ふ', 'hu', 'fu'),
    new Character('へ', 'he', ''),
    new Character('ほ', 'ho', ''),

    new Character('ま', 'ma', ''),
    new Character('み', 'mi', ''),
    new Character('む', 'mu', ''),
    new Character('め', 'me', ''),
    new Character('も', 'mo', ''),

    new Character('や', 'ya', ''),
    new Character('ゆ', 'yu', ''),
    new Character('よ', 'yo', ''),

    new Character('ら', 'ra', ''),
    new Character('り', 'ri', ''),
    new Character('る', 'ru', ''),
    new Character('れ', 're', ''),
    new Character('ろ', 'ro', ''),

    new Character('わ', 'wa', ''),
    new Character('を', 'wo', 'o'),
    new Character('ん', 'n', ''),

    //dakuten
    new Character('が', 'ga', ''),
    new Character('ぎ', 'gi', ''),
    new Character('ぐ', 'gu', ''),
    new Character('げ', 'ge', ''),
    new Character('ご', 'go', ''),

    new Character('ざ', 'za', ''),
    new Character('じ', 'ji', ''),
    new Character('ず', 'zu', ''),
    new Character('ぜ', 'ze', ''),
    new Character('ぞ', 'zo', ''),

    new Character('だ', 'da', ''),
    new Character('ぢ', 'ji', ''),
    new Character('づ', 'zu', ''),
    new Character('で', 'de', ''),
    new Character('ど', 'do', ''),

    new Character('ば', 'ba', ''),
    new Character('び', 'bi', ''),
    new Character('ぶ', 'bu', ''),
    new Character('べ', 'be', ''),
    new Character('ぼ', 'bo', ''),

    //handakuten
    new Character('ぱ', 'pa', ''),
    new Character('ぴ', 'pi', ''),
    new Character('ぷ', 'pu', ''),
    new Character('ぺ', 'pe', ''),
    new Character('ぽ', 'po', ''),

    //yoon
    new Character('きゃ', 'kya', ''),
    new Character('きゅ', 'kyu', ''),
    new Character('きょ', 'kyo', ''),
    
    new Character('しゃ', 'sha', ''),
    new Character('しゅ', 'shu', ''),
    new Character('しょ', 'sho', ''),
    
    new Character('ちゃ', 'cha', ''),
    new Character('ちゅ', 'chu', ''),
    new Character('ちょ', 'cho', ''),
    
    new Character('にゃ', 'nya', ''),
    new Character('にゅ', 'nyu', ''),
    new Character('にょ', 'nyo', ''),
    
    new Character('ひゃ', 'hya', ''),
    new Character('ひゅ', 'hyu', ''),
    new Character('ひょ', 'hyo', ''),
    
    new Character('みゃ', 'mya', ''),
    new Character('みゅ', 'myu', ''),
    new Character('みょ', 'myo', ''),
    
    new Character('りゃ', 'rya', ''),
    new Character('りゅ', 'ryu', ''),
    new Character('りょ', 'ryo', ''),
    
    //dakuten yoon
    new Character('ぎゃ', 'gya', ''),
    new Character('ぎゅ', 'gyu', ''),
    new Character('ぎょ', 'gyo', ''),
    
    new Character('じゃ', 'ja', ''),
    new Character('じゅ', 'ju', ''),
    new Character('じょ', 'jo', ''),
    
    new Character('びゃ', 'bya', ''),
    new Character('びゅ', 'byu', ''),
    new Character('びょ', 'byo', ''),

    //handakuten yoon
    new Character('ぴゃ', 'pya', ''),
    new Character('ぴゅ', 'pyu', ''),
    new Character('ぴょ', 'pyo', ''),
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

  shuffledChars = this.shuffle(this.hiraganaChars);

  countCorrectAnswers(event){
    this.correctAnswers.push(event);
  }
  showScore(){
    this.submitted = true;
    this.totalCorrect = this.correctAnswers.length;
    this.totalAnswers = this.hiraganaChars.length;
    this.score = ((this.totalCorrect / this.totalAnswers) * 100).toFixed(2);
  }

}
