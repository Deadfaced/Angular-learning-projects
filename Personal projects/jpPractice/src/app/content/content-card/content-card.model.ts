export class ContentCard{
    romajiTitle: string;
    kanaTitle: string;
    cardPath: string;
    buttonText: string;
    
    constructor(romaji: string, kana:string, path: string, bText: string){
        this.romajiTitle = romaji;
        this.kanaTitle = kana;
        this.cardPath = path;
        this.buttonText = bText;
    }
}