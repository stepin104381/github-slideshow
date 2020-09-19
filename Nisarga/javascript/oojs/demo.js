var student={
    name:'Raju',
    age:23,
    hobbies:['Sports','music'],
    address:{
        city:'Bangalore',
        state:'Karnataka'
    }
};

//document.write(student);
console.log(student.name);
console.log(student.address.state);
student.studid=20;
for (const key in student) {
    
        const element = student[key];
        console.log(key+''+element)
        
    }


var student2={
    name:'Nisu',studid:20
};
console.log(student2.name);
