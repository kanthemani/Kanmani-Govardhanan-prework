

    var PossibleWords=["apple", "banana", "watermelon", "cantaloupe", "honeydew", "jackfruit", "papaya", "dragonfruit", 
            "pineapple", "durian", "blood orange", "strawberry", "apricot", "kumquat", "pomegranate"];

    const GuessesLeft = 7
    var pauseGame = false
        
    var guessedLetters = []
    var guessingWord = []
    var correctWord
    var Guess
    var wins = 0
        
    resetGame()
        
    document.onkeypress = function(event) {
      
        if (isAlpha(event.key) && !pauseGame) {
            checkForLetter(event.key.toUpperCase())
            }
        }
        
    
    function checkForLetter(letter) {
        var foundLetter = false
        
      
        for (var i=0, j= correctWord.length; i<j; i++) {
             if (letter === correctWord[i]) {
                guessingWord[i] = letter
                foundLetter = true
                
                if (guessingWord.join("") === correctWord) {
                   
                    wins++
                    pauseGame = true
                    updateDisplay()
                    setTimeout(resetGame,5000)
                }
            }
        }
        
        if (!foundLetter) {
           
            if (!guessedLetters.includes(letter)) {
               
                guessedLetters.push(letter)
                
                Guess--
            }
            if (Guess === 0) {
                
                guessingWord = correctWord.split()
                pauseGame = true
                setTimeout(resetGame, 5000)
            }
        }
        
         updateDisplay()
        
    }
    
    function isAlpha (ch){
        return /^[A-Z]$/i.test(ch);
    }
        
    function resetGame() {
        Guess = GuessesLeft
        pauseGame = false
        
        
        correctWord = PossibleWords[Math.floor(Math.random() * PossibleWords.length)].toUpperCase()
        console.log(correctWord)
        
        
        guessedLetters = []
        guessingWord = []
        
        
        for (var i=0, j=correctWord.length; i < j; i++){
            
            if (correctWord[i] === " ") {
                guessingWord.push(" ")
            } else {
                guessingWord.push("_")
            }
        }
        
        
        updateDisplay()
    }
        
    function updateDisplay () {
        document.getElementById("totalWins").innerHTML = wins
        document.getElementById("currentWord").innerHTML = guessingWord.join("")
        document.getElementById("remainingGuesses").innerHTML = Guess
        document.getElementById("guessedLetters").innerHTML =  guessedLetters.join(" ")
    }