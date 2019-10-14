function kebabToSnake(str) {
    var newStr=str.replace(/-/g , "_");
    return newStr
}
function sing() {
    console.log("twinkel twinkle...");
    console.log("How I wonder...");
}
var colors = ["red","orange","yellow"];


var movies = [
    {name: "In Bruges",
	rating: 5,
	hasWatched: false},
    {name: "Frozen",
	rating: 4.5,
	hasWatched: true},
    {name: "Mad Max Fury Road",
	rating: 5,
	hasWatched: true}
]
movies.forEach(function(movie){
	if (movie.hasWatched == true) {
		console.log("You have watched " + "\"" + movie.name + "\"" + " - "+ movie.rating + " stars")}
	else {console.log("You have not seen " + "\"" + movie.name + "\"" + " - "+ movie.rating + " stars")}
})