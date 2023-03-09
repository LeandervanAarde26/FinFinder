export class UserSecurityModel {
    public id?: string;
    public username: string;
    public Email: string;
    public securityQuestions: [{question: string, answer: string, correct: boolean}];

    constructor(id: string, username: string, Email: string, securityQuestions: [{question: string, answer: string, correct: boolean}] ) {
        this.id = id;
        this.username = username;
        this.Email = Email;
        this.securityQuestions = securityQuestions;
    }
}