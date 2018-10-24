export class Mask {
    public cepMask: Array<string | RegExp>;
    public cnpjMask: Array<string | RegExp>;
    public rgMask: Array<string | RegExp>;
    public cpfMask: Array<string | RegExp>;
    public phoneMask: Array<string | RegExp>;
    public celMask: Array<string | RegExp>;
    public placamask: Array<string | RegExp>;
    public decimalNumberUnMask: string | RegExp;
    public unmask: string | RegExp;
    public placaunmask: string | RegExp;
  constructor() {
    this.cepMask = [/\d/ , /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    this.cnpjMask = [ /\d/ , /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/ , /\d/, /\d/, '/', /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/];
    this.cpfMask = [ /\d/ , /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/ , /\d/, /\d/, '-', /\d/, /\d/];
    this.rgMask = [ /\d/ , /\d/ , /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
    this.phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/ , /\d/ , /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this.celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/ , /\d/ , /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this.placamask = [/[a-zA-Z]/ , /[a-zA-Z]/, /[a-zA-Z]/, '-', /\d/, /\d/, /\d/, /\d/];
    this.unmask = /\D/g;
    this.placaunmask = /\W/g;
    this.decimalNumberUnMask = /[^\d.-]/g;
  }

}
//.replace(/\D/g, '');
//// Extract digits, minus sign and decimal
//number = value.toString().replace(/[^\d.-]/g, '');
