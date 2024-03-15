export class Character{
  private char: string;
  private romaji: string;
  private alt: string;

  constructor(char: string, romaji: string, alt: string){
    this.char = char;
    this.romaji = romaji;
    this.alt = alt;
  }
}