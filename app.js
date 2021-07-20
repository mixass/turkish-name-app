var LastWord = "";
const words = ['erkek', 'tarçın','sandalye','kap','oyuncak','reklam','ilim','halı','ışık', 'maymun','şişe','poşet','takı','market','para','ağaç','çamur','ayna','elif','film','fincan','fil','yelken','ne','bardak','kase','tabak','ayak','van', 'masa', 'makas','kadın' ,'kaşık','köpek','kedi','kuş','şaka','ev','koltuk','su'];
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
    return found
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
