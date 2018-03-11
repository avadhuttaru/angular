function Person(name,age,rollno,section)
	{
		this.name=name;
		this.age=age;
		this.rollno=rollno;
		this.section=section;
	}
	var avadhut=new Person("Avadhut",22,1,"IT");
	var mangesh=new Person("Mangesh",23,2,"IT");

	document.getElementById("data1").innerHTML=
		"Name:"+avadhut.name + " " + "Age:"+avadhut.age +" "+"Rollno:"+avadhut.rollno+ " " +"Section:"+ avadhut.section;
	document.getElementById("data2").innerHTML=
		"Name:"+mangesh.name + " " +"Age:"+mangesh.age +" "+"Rollno:"+mangesh.rollno+ " " +"Section:"+mangesh.section;
