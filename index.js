// #1

const medieinstitutet={
    name: "medieinstitutet",
    address: "area 51",
    zipcode: 6655,
    city: "Los Angeles",
    students:[],
    teachers:[],

};

// #2

let matematik ={
    name: "matematik",
    students:[],
    teacher:[],
    
  // #9
    addStudent:function(student) {             
        this.students.push(student);
        student.subjects.push(this);
    },
    enlistToSubject: function (student){
        this.addStudent(student);
    },

    // #11
    fireTeacher:function(teacher){
        let index = this.teachers.indexOf(teacher);
        if (index !== -1) {
            this.teachers.splice(index, 1);
        }
        for (let subject of subjects) {
            if (subject.teacher === teacher) {
                subject.teacher = null;
            }
        }
    },
    quitSubject: function(student) {
        let index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1); 
            let subjectIndex = student.subjects.indexOf(this);
            student.subjects.splice(subjectIndex, 1);
        }
    },
    removeTeacher: function() {
        this.teacher = null;
    }
};

let engelska ={
    name:"engelska",
    students:[],
    teacher:[],

    addStudent:function(student) {             
        this.students.push(student);
        student.subjects.push(this);
    },
    enlistToSubject: function (student){
        this.addStudent(student);
    },

    fireTeacher:function(teacher){
        let index = this.teachers.indexOf(teacher);
        if (index !== -1) {
            this.teachers.splice(index, 1);
        }
        for (let subject of subjects) {
            if (subject.teacher === teacher) {
                subject.teacher = null;
            }
        }
    },

             
};

let programering ={
    name:"programmering",
    students:[],
    teacher:[],

    addStudent:function(student) {             
        this.students.push(student);
        student.subjects.push(this);
    },
    enlistToSubject: function (student){
        this.addStudent(student);
    },

    removeTeacher:function(teacher){
        let=index = this.teachers.indexOf(teacher);
        this.teacher.splice(index,1)
    },

    fireTeacher:function(teacher){
        let index = this.teachers.indexOf(teacher);
        if (index !== -1) {
            this.teachers.splice(index, 1);
        }
        for (let subject of subjects) {
            if (subject.teacher === teacher) {
                subject.teacher = null;
            }
        }
    },
};

// #3 fem stycken studenter,

let Khaled={
    name:"Khaled",
    age:41,
    gender: "Male",
    subjects:[],

 // #9
    addSubject: function(subject) {            
        this.subjects.push(subject);
        subject.students.push(this);
    },

 // #11
    quitSubject: function(subject) {
    subject.quitSubject(this); 
     }
};


let Ahmed={
    name:"Ahmed",
    age:36,
    gender: "Male",
    subjects:[],

    addSubject: function(subject) {            
        this.subjects.push(subject);
        subject.students.push(this);
    },

    quitSubject: function(student) {
        let index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1); 
            let subjectIndex = student.subjects.indexOf(this);
            student.subjects.splice(subjectIndex, 1);
        }
    }
};

let Eman={
    name:"Eman",
    age:40,
    gender:"Female",
    subjects:[],

    addSubject: function(subject) {            
        this.subjects.push(subject);
        subject.students.push(this);
    },

    quitSubject: function(student) {
        let index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1); 
            let subjectIndex = student.subjects.indexOf(this);
            student.subjects.splice(subjectIndex, 1);
        }
    }
};

let Amr= {
    name:"Amr",
    age: 46,
    gender: "Male",
    subjects:[],

    addSubject: function(subject) {            
        this.subjects.push(subject);
        subject.students.push(this);
    },


    quitSubject: function(student) {
        let index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1); 
            let subjectIndex = student.subjects.indexOf(this);
            student.subjects.splice(subjectIndex, 1);
        }
    }
};

let Nadia={
    name:"Nadia",
    age: 25,
    gender: "Female",
    subjects:[],

     // #9
    addSubject: function(subject) {            
        this.subjects.push(subject);
        subject.students.push(this);
    },

    quitSubject: function(student) {
        let index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1); 
            let subjectIndex = student.subjects.indexOf(this);
            student.subjects.splice(subjectIndex, 1);
        }
    }
};

// #4 två stycken lärare

let Alaa={
    name:"Alaa",
    subjects:[],

    addSubject: function(subject) {
        this.subjects.push(subject);
        subject.teacher=this;
    }
};

let Shamel={
    name:"shamel",
    subjects:[],

    addSubject: function(subject) {
        this.subjects.push(subject);
        subject.teacher=this;
    }
};

// #5

Alaa.subjects.push(engelska);

console.log(Alaa);
console.log(engelska);

// #6

matematik.students.push(Khaled);

console.log(matematik);
console.log(Khaled);

Khaled.subjects.push(matematik);

console.log(Khaled);
console.log(matematik);

// #7

function addSubjectToTeacher(subjects,teacher){
    teacher.subjects.push(subjects);
    subjects.teacher=teacher;
    return teacher;
}

// #8

let niklas={
    name:"niklas",
    subjects:[],
    addSubject: function(subject) {
        this.subjects.push(subject);
        subject.teacher=this;
    },

     // #9
    addTeacher: function(subject) {
        subject.teacher = this;
    },

    // #11
    relegateStudent: function(student, newSubject) {
        let oldSubjectIndex = student.subjects.indexOf(matematik);
        if (oldSubjectIndex !== -1) {
            student.subjects.splice(oldSubjectIndex, 1);
            matematik.students.splice(matematik.students.indexOf(student), 1);
        }
        student.addSubject(newSubject);
    }
};

niklas.addSubject(matematik)

console.log(matematik);
console.log(niklas);


// #10 
niklas.addSubject(matematik);
Khaled.addSubject(matematik);
Nadia.addSubject(matematik);

matematik.addStudent(Khaled);
matematik.addStudent(Nadia);

console.log(niklas);
console.log(matematik);
console.log(Nadia);
console.log(Khaled);

console.log("matematik - subject" + matematik.students);
console.log("Teacher:" + matematik.teacher.name);
console.log("student: " + engelska.students);
matematik.students.forEach(student => console.log(student.name));

console.log("All subjects and their teachers:");
let subjects = [matematik, engelska, programering];

subjects.forEach(subject => {
    console.log(subject.name + ": " + subject.teacher.name);
});


// #11

Khaled.quitSubject(matematik);
console.log(" After Khaled finished Mathematics ");
console.log(matematik);
console.log(Khaled);

niklas.relegateStudent(Nadia, matematik, engelska);
console.log("After Niklas got a new student Nadia in English");
console.log(engelska);
console.log(Nadia);
