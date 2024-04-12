export class Score{
    public correctAnswers = [];
    public wrongAnswers = [];
    public totalAnswers = [];

    onCorrectAnswer(char: string){
        this.correctAnswers.push(char);
    }
    onWrongAnswer(char: string){
        this.wrongAnswers.push(char);
    }
}