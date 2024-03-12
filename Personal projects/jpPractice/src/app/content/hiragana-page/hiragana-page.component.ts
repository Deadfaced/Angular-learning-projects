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
    new Character('ん', 'n', '')
  ];

  shuffle = (array: Character[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  shuffledChars = this.shuffle(this.hiraganaChars);

}
