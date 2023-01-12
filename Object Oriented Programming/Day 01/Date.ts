
const datePattern: RegExp = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

interface GeneralObject{
  [key: string]: any;
}

const months: any = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December"
}
class Data {
  day: string;
  month: string;
  year: string;
  fullDate: Date;
  dateFormats: GeneralObject;



  constructor (formatedDate: string) {
    const splitDate: Array<string> = formatedDate.split('/')

    if(!datePattern.test(formatedDate)) {
      
      this.day =  "01";
      this.month = "01";
      this.year = "1900";
      this.fullDate = new Date("01/01/1900");
     
    } else {
      this.day = splitDate[0];
      this.month = splitDate[1];
      this.year = splitDate[2];
      this.fullDate = new Date(formatedDate);
    }

    this.dateFormats = {
      "dd/mm/aaaa" : formatedDate,
      "aaaa-mm-dd": `${this.year}-${this.month}-${this.day}`,
      "dd de M de aa": `${this.day} de ${ this.getMonth() } de ${this.year.slice(-2)}`,
      "dd, M de aaaa": `${this.day}, ${this.getMonth()} de ${this.year}`
    }

  }

  getMonth(): string {

    console.log(months[this.month]);
    return months[this.month];
  }

  isLeapYear (): Boolean {

    return parseInt(this.year) % 4 == 0? true : false 
  }


 
  compare(date: Data) {

    if(this.fullDate < date.fullDate) return -1
    else if ( this.fullDate > date.fullDate) return 1
    return 0
  }

  format(template: string): string {
    return this.dateFormats[template]? this.dateFormats[template] : "Format not supported"
  }

}


const par: Data = new Data("02/09/1993");

console.log(par.isLeapYear());
par.getMonth();