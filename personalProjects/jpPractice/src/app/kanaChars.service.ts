import { Injectable } from "@angular/core";
import { Character } from "./shared/character.model";

@Injectable()

export class kanaChars{
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
    
      shuffle = (array: Character[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      
    
      shuffledHiraganaChars = this.shuffle(this.hiraganaChars.slice());
      shuffledKatakanaChars = this.shuffle(this.katakanaChars.slice());
}