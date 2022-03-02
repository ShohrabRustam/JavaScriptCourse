// document.write("hello")

const Employee ={
    Post: function(){
        return "A Software Doveloper";
    },

    changeName:function(name){
                this. name=name;
    }
};

var E1= Object.create(Employee);
E1.name="Rustam";
E1.role="ASE";
E1.changeName("Armaan");
console.log(E1);