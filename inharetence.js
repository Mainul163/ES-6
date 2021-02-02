class Parent{
    constructor(){
        this.fatherName="Rafiqul islam";
    }
 
}

class Child extends Parent{
     
     constructor(name){
        super()
         this.Name=name;
     }
}


const baby=new Child("mainul");
console.log(baby);


// add function

// class Child extends Parent{
     
//     constructor(name){
//        super()
//         this.Name=name;
//     }
//     addfunction(){
//        return this.fatherName+" "+this.Name;
       
//    }
// }


// const baby=new Child("mainul");
// console.log(baby.addfunction());