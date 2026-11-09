
const multiplyValue =(value : number , multiplier?: number): number =>
{
    if ( multiplier !== undefined ) 
    {
        return  value* multiplier
    }

    else
     {
        return value*2 
     }
}



const processInput = (input : string | number | boolean): string | number  =>
{

if ( typeof input == "string")
{
  return input.trim().toLowerCase() 
}

else if ( typeof input == "number")
{
  return input*10
}

else if ( typeof input == "boolean" && input == true)
{

 return "Active"

}

else 
{

return "Inactive"

}

}

console.log(processInput(553))


const formatCoordinate =(coordinate : readonly [number , number , string]): string =>

{

    const position1 = coordinate[0]
     const position2 = coordinate[1]
      const position3 = coordinate[2]

    

return `Location: ${position3} (${position1}, ${position2})`;



}





const  concatenateArrays =<T>(...arrays : T[][]) : T[] =>

{

return arrays.flat()


}






interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (array: Course[],   minStudents: number): Course[] => {


  const output = array.filter((course) =>

      course.isPublished === true &&
      course.students >= minStudents
  );

  return output;
};












const pluckValues = <T, K extends keyof T>(

  items: T[],

  key: K

): T[K][] => {

  return items.map((item) => item[key]);
};




class Employee {
  protected name: string;
  private baseSalary: number;


    constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

   getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }

}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }


    getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}



const validateAgeAsync = (age: number): Promise<string> => {

  return new Promise<string>((resolve, reject) => {

    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }


  });
};


