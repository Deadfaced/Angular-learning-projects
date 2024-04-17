export class Score{
    public correctAnswers = [];
    public wrongAnswers = [];
    public totalAnswers = [];

    onCorrectAnswer(char: string){
        this.correctAnswers.push(char);
    }
    onWrongAnswer(char: string, romaji: string, alt: string){
        this.wrongAnswers.push({char, romaji, alt});
    }
}