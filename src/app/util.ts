export class Util {

    static brFormatDateToShort(date: string):string {

        
         
         
         return date.toString().substr(4,4)+date.toString().substr(2,2)+date.toString().substr(0,2);
    }
}