import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/character.model';
import { kanaChars } from '../../kanaChars.service';

@Component({
  selector: 'app-study-room',
  templateUrl: './study-room.component.html',
  styleUrl: './study-room.component.css'
})
export class StudyRoomComponent implements OnInit{
  constructor(private jpChars: kanaChars){}

  hiraganaChars: Character[] = [];
  katakanaChars: Character[] = [];

  ngOnInit() {
    this.hiraganaChars = this.jpChars.hiraganaChars.slice();
    this.katakanaChars = this.jpChars.katakanaChars.slice();
  }

}
