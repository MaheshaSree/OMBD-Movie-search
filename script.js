let movie = [];
let name, temp;
let count=0;
async function getmovies(){
	var nominate = document.getElementById("nomi");
	nomi.innerHTML="Nominate";
	nomi.style="background:#5c768052; border:0.5px solid #5c768052; border-radius:5px;";
	nominate.disabled = false;
    var title = document.getElementById("input-field").value;
    var year = document.getElementById("input-field2").value;
    if (title == "") return
    var poster = document.getElementById("poster")
    poster.src  = "https://cdn.lowgif.com/medium/76aaf121d5d74581-loop-loading-gif-by-derek-fitzpatrick-find-share-on-giphy.gif"
		

    var Title = document.getElementById("Title")
    var Genre = document.getElementById("Genre")
    var Actors = document.getElementById("Actors")
    var Plot = document.getElementById("Plot")
    var Ratings = document.getElementById("Ratings")
    var RunTime = document.getElementById("RunTime")
    var Director = document.getElementById("Director")
    var info = document.getElementById("info")
	
	
    Title.previousSibling.previousSibling.innerHTML = "" ;
    Genre.previousSibling.previousSibling.innerHTML = "" ;
    Actors.previousSibling.previousSibling.innerHTML = "" ;
    Plot.previousSibling.previousSibling.innerHTML = "" ;
    Ratings.previousSibling.previousSibling.innerHTML = "" ;
    RunTime.previousSibling.previousSibling.innerHTML = "" ;
    Director.previousSibling.previousSibling.innerHTML = "" ;
    
    
	info.innerHTML = "" ;
    Title.innerHTML = "" ;
    Genre.innerHTML = "" ;
    Actors.innerHTML = "" ;
    Plot.innerHTML = "" ;
    Ratings.innerHTML = "" ;
    RunTime.innerHTML = "" ;
    Director.innerHTML = "" ;

    try{
    var res1 = await fetch(`https://www.omdbapi.com/?s=${title}&plot=full&y=${year}&apikey=aab51e76`);
    var data1 = await res1.json();
    if(data1.Response == "False" ) {
        Title.innerText = data1.Error;
        poster.src  = "";
        return
    }
    console.log(data1)
    var id = data1.Search[0].imdbID
    var res2 = await fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=aab51e76`);
    var data2 = await res2.json()
    }
    catch(err){
        console.log(err)
        poster.src  = "";
    }
    
    Title.previousSibling.previousSibling.innerHTML = "Title" ;
    Title.innerText = data2.Title +" ("+ data2.Year + ")"
    
	name = data2.Title +" ("+ data2.Year + ")"
	temp = name + "  -Nominated";

    Genre.previousSibling.previousSibling.innerHTML = "Genre" ;
    Genre.innerText = data2.Genre

    Actors.previousSibling.previousSibling.innerText = "Actors"
    Actors.innerText = data2.Actors

    Plot.previousSibling.previousSibling.innerText = "Plot"
    Plot.innerText = data2.Plot

    Ratings.previousSibling.previousSibling.innerText = "Ratings"
    Ratings.innerText = data2.Ratings[0].Value

    RunTime.previousSibling.previousSibling.innerText = "RunTime"
    RunTime.innerText = data2.Runtime

    Director.previousSibling.previousSibling.innerText = "Director"
    Director.innerText = data2.Director;
    poster.src = data2.Poster;
    

    info.innerHTML=  "Info"
    console.log(data2)
	
	let index=0;
	for(index=0;index<count;index++){
		if(temp == movie[index]){
		var nominate = document.getElementById("nomi");
		nominate.disabled = true;
		break;}
	}
	
}

function listDisplay(){
		
	var nominate = document.getElementById("nomi");
	nominate.disabled = true;
	
    var nominateList = document.getElementById("nominateList")
    nominateList.style="border: 1px solid #5c768052; border-radius:5px"
    nominateList.innerText = "Nominated List" + "\n"+ movie.join(" \n") + "\n"+ name + "  - Nominated ";
	
	movie[count++]= name + "  -Nominated";
	console.log(movie);
	
	window.localStorage.setItem('movies', name);
	if(count==5){
		var banner = document.getElementById("banner")
		banner.innerHTML = "You have Nominated 5 movies...!!";
		banner.style = "border: 1px solid #5c768052; background-color:#5c768052; border-radius:5px; padding:35px; font-size:30px; margin:80px; margin-top:20px; text-align:center"
	}
	
}