var LastWord = "";
const words = ['ayna','elif','film','fincan','fil','yelken','ne','bardak','kase','tabak','kaşık','köpek','kedi','kuş','şaka','ev','koltuk','su'];
var CurrentlyPoint = 0
function startJs() {
    var word = document.getElementById('word').value;
    if (checkWord(word) && checkLastLetter(word)) {
        setword(word);
        checkLastLetter(word);
    }else{
        console.log('boyle bir kelime yok')
        point('-')
    }
}

function setword(word) {
    document.getElementById("nowword").innerHTML = word;
    point('+')
    LastWord = word;
}

function checkWord(word) {
    var found = words.includes(word);
    var use = OldWords.includes(word);
    console.log(OldWords);
    if (found === true && use === false){
        return true
    }
}

function checkLastLetter(word) {
    var FirstLetter = word.slice(0,1);
    var lastLetterofLastWord = LastWord.slice(-1)
    console.log('Son harf : '+lastLetterofLastWord,'İlk harf : '+FirstLetter)
    if (lastLetterofLastWord === '') {
        return true;
    }
    {
        if (lastLetterofLastWord === FirstLetter) {
            return true;
        }else{
            return false;
        }
    }
}

function point(stat) {
    if (stat == '+') {
        CurrentlyPoint++;
        console.log('+ geldi point')
    }else{
        CurrentlyPoint--;
        console.log('- geldi point')
    }
    console.log(CurrentlyPoint)
    document.getElementById("point").innerHTML = CurrentlyPoint;
}