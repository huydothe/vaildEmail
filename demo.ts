export class EmailRegExp{
    private emailRegExp:RegExp=/^[A-Z|0-9|a-z]{1}[a-z|0-9]*@[A-Z|0-9|a-z]+\.[a-z|A-Z|0-9]+$/
    public validate(regex : string): boolean{
        return this.emailRegExp.test(regex);
    }
}