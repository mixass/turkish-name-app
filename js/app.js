var LastWord = "UMUT";
var CurrentlyPoint = 0;
var UsedWords = [
    "Umut",
]
function startJs() {
    var word = document.getElementById('word').value;
    word = word.toUpperCase();
    if (checkWord(word) && checkLastLetter(word)) {
        setword(word);
        SetBackground("#07D341")
    }else{
        point('-')
        SetBackground("#FE0505")
    }
    document.getElementById("title").innerHTML = "used last name";
}

function setword(word) {
    document.getElementById("nowword").innerHTML = word;
    point('+')
    LastWord = word;
    UsedWords.push(word);
}

function checkWord(word) {
    var found = words.includes(word);
    var oldfound = UsedWords.includes(word);
    if (found === true && oldfound === false) {
        return true
    }
    if (found === false) {
        pushNotification ('Not exist the name ' + word, 'red');

    }
    if (oldfound === true) {
        pushNotification ('This name has been used before', 'red');
    }
}

function checkLastLetter(word) {
    var FirstLetter = word.slice(0,1);
    var lastLetterofLastWord = LastWord.slice(-1);
    {
        if (lastLetterofLastWord === FirstLetter) {
            return true;
        }else{
            pushNotification ('Name must start with the last letter', 'red');
            return false;
        }
    }
}

function point(stat) {
    if (stat == '+') {
        CurrentlyPoint++;
    }else {
        CurrentlyPoint--;
    }
    document.getElementById("point").innerHTML = CurrentlyPoint;
}

function SetBackground(color) {
    document.body.style.backgroundColor = color
}