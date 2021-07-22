var LastWord = "UMUT";
var CurrentlyPoint = 0;
var OldPoint = 0;
var UsedWords = [
    "Umut",
]
function startJs() {
    var word = document.getElementById('word').value;
    word = word.toUpperCase();
    if (checkWord(word) && checkLastLetter(word)) {
        setword(word);
    }else{
        point('-')
    }
    document.getElementById("title").innerHTML = "Kullanılan son kelime";
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
        seconds = 10;
        clearInterval(myVar);
        setInterval(countdownstart,1000);
        return true
    }
    if (found === false) {
        uyari("Boyle bir isim yok");
    }
    if (oldfound === true) {
        uyari("Daha once kullanilmis");
    }
}

function checkLastLetter(word) {
    var FirstLetter = word.slice(0,1);
    var lastLetterofLastWord = LastWord.slice(-1);
    {
        if (lastLetterofLastWord === FirstLetter) {
            return true;
        }else{
            uyari("Kelime son harf ile baslamali")
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

function uyari(text){
    document.getElementById("uyari").innerHTML = text;
}
