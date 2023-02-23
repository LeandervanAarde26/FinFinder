export class serviceCard{
    public Image: string;
    public Title: string;
    public Content: string; 

    constructor(Image: string, Title: string, Content: string ){
        this.Image = Image;
        this.Title = Title;
        this.Content = Content
    }
}