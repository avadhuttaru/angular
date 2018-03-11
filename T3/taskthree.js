function mounth (d) 
	{
		if(d%2==0)
		{
			document.getElementById("data").innerHTML ="No of day in current mounth:31";
		}
		else
			if(d==1)
			{
				document.getElementById("data").innerHTML ="No of day in current mounth:28";
			}
			else
			{
				document.getElementById("data").innerHTML ="No of day in current mounth:30";
			}
	}

		var date = new Date().getMonth();
		mounth(date);
