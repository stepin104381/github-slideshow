function  Student(name,city){
    this.name=name;
    this.city=city;
    this.getDetails=function(){
        console.log('welcome',this.name,'from',this.city)
    }
}

var stud=new Student('Raju','ban');
console.log(stud);
stud.getDetails();

Student.prototype.studId=90;
Student.prototype.greetMessage=(username)=>{
    console.log('great Day',username);
}

stud.greetMessage('Ram');