var $ = function (id) {
    return document.getElementById(id);
}

var PossibleWords=["apple", "banana", "watermelon", "cantaloupe", "honeydew", "jackfruit", "papaya", "dragonfruit", 
            "pineapple", "durian", "blood orange", "strawberry", "apricot", "kumquat", "pomegranate"];

var word = PossibleWords[Math.floor(Math.random() * PossibleWords.length)];     
var answer= PossibleWords[word];
var myLength = answer.length;
var display=[myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft=9;
var output="";

var setup = function()
{
    for (var i=0; i<answer.length; i++)
    {
        display[i] = "_";
        output = output + display[i];
    }
    document.getElementById("PossibleWords").innerHTML = output;
    output ="";
}



