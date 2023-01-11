class Student {
  readonly studentId: number;
  name: string;
  private _testGrades: [number | undefined, number | undefined, number | undefined, number | undefined];
  private _essayGrades: [number | undefined, number | undefined];

  constructor (studentId: number, name: string, testGrades: [number, number, number, number], essayGrades: [number, number]) {
    this.studentId = studentId;
    this.name = name;
    this._testGrades = testGrades;
    this._essayGrades = essayGrades;
  }

    sum(): number | undefined {
      let sum = 0;

      const allGrades = [...this._testGrades, ...this._essayGrades]

      allGrades.forEach(grade => { 
        if(grade !== undefined){
          sum = sum + grade;
        }
      })


      return sum;
    }

    avarage(): number | undefined {
      let sum = 0;
      let average = 0;

      const allGrades = [...this._testGrades, ...this._essayGrades]

      allGrades.forEach(grade => { 
        if(grade !== undefined){
          sum = sum + grade;
        }
      })

      average = sum / allGrades.length


      return average
    }
}