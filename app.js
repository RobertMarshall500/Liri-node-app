

// Grab the movieName which will always be the third node argument.
// var songname = process.argv[2];


;// Then run a request to the OMDB API with the movie specified
// var request = require("request")


var Spotify = require('node-spotify-api');

 
var spotify = new Spotify({

  id: 'bf6fd4c4207342feacd6cbc6799729df',
  secret: 'f053b146991649a0bdccdb12b1567e66'
});


var userinput = process.argv;


 if (userinput[2] === "spotify-this"){
   var song = userinput.slice(3, userinput.length).join(" ");
  //  if (song.length === 0 ){
  //    song = "Beat it";
  //  }
 
  spotify.search({ type: 'track', query: song, limit: 1}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log("Song Name : " + data.tracks.items[0].name); 
console.log("Artist Name : " + data.tracks.items[0].artists[0].name);
console.log("Preview URL : " + data.tracks.items[0].preview_url);
console.log("Album name : " + data.tracks.items[0].album.name);
});
 }



 //Grab the movieName which will always be the third node argument.
 var bands = process.argv[2];

 //Then run a request to the OMDB API with the movie specified
 var queryUrl = "http://www.omdbapi.com/?i=" + bands + "tt3896198&apikey=3f295737";

// // This line is just to help us debug against the actual URL.
// console.log(queryUrl);

 request(queryUrl, function(error, response, body) {

//   // If the request is successful
   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
   }
 });
 // i need to request to pull api data from bands in town 
 // i need if statements on the user input 
 // i need to console.log the data to print to screen