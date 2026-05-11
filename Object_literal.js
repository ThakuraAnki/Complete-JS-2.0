//Object Literal

const Person={
    name:"Ankit",
    age:19,
    isAdmin:false,
    greet(){
        return `hi . i am ${this.name}`;
    }

}
    //Accessing Properties

    //dot notation

   console.log( Person.name);
   //Nracket notation
   console.log(Person["age"]);

   console.log(Person.greet());  
   Person.email="ankit004thakur@gmail.com";
   Person.age=20;
   console.log(Person.email);

