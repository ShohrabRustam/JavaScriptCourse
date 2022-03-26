let students = [
     {
         name:"Shohrab",
         age : 21
     },
     {
         name: "Rustam",
         age: 23
     }

    ];

    const student= students.find(s=>{
        return s.age===21;
    });

    console.log(student);
    