		var str="avadhut";
		var first = str.charAt(0);
		var last=str.charAt(str.length-1);

		var firstcap=first.toUpperCase();
		var lastcap=last.toUpperCase();

		document.getElementById("data").innerHTML =
		"<h3>Lowercase latter:</h3>"+str+
		"<br>"+"<h3>first letter:</h3>"+first+"<h3>last letter:</h3>"+last+
		"<br>"+"<h3>uppercase letter:</h3>"+firstcap+" "+"<h3>Lowercase letter:</h3>"+lastcap;