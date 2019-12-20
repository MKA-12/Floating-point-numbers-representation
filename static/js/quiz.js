var alphabet = ["a", "b", "c", "d"]
var dic = []
$(document).ready(function () {
    $.get("http://127.0.0.1:5000/quizzes", function (data) {
        if (document.getElementById("q1") != null) {
            var correctchoices = []
            dic = data
            putQuestion(correctchoices)
            localStorage.correctans = correctchoices
        }
    });
});

function putQuestion(correctchoices) {
    if (document.getElementById("q1") != null) {
        for (var i = 0; i < 5; i++) {
            var curr_ques = dic[i]
            var ids = document.getElementById("q" + (i + 1))
            ids.innerText = i + 1 + ")  " + curr_ques.question_string
            var ans_arr = curr_ques.answers
            for (var j = 0; j < 4; j++) {
                var ans_string = ans_arr[j].value
                document.querySelectorAll("#option" + (j + 1))[i].innerHTML = "  " + ans_string
                if (ans_arr[j].is_correct === 1) {
                    correctchoices[i + 1] = alphabet[j]
                }
            }
        }
    }
    return correctchoices
}
var totalquestions = 5
function gradeit() {
    correctchoices = localStorage.correctans
    var temp = [","]
    for (var i = 0; i < correctchoices.length; i++) {
        if (correctchoices[i] !== ',') {
            temp.push(correctchoices[i])
        }
    }
    correctchoices = temp
    var incorrect = null
    for (q = 1; q <= totalquestions; q++) {
        var thequestion = eval("document.myquiz.question" + q)
        for (c = 0; c < thequestion.length; c++) {
            if (thequestion[c].checked == true)
                actualchoices[q] = thequestion[c].value
        }

        if (actualchoices[q] != correctchoices[q]) { //process an incorrect choice
            console.log(actualchoices)
            if (incorrect == null)
                incorrect = q
            else
                incorrect += "/" + q
        }
    }

    if (incorrect == null)
        incorrect = "a/b"
    document.cookie = 'q=' + incorrect
    if (document.cookie == '')
        alert("Your browser does not accept cookies. Please adjust your browser settings.")
    else
        window.location = "results.htm"
}
function showsolution() {
    correctchoices = localStorage.correctans
    var temp = [","]
    for (var i = 0; i < correctchoices.length; i++) {
        if (correctchoices[i] !== ',') {
            temp.push(correctchoices[i])
        }
    }
    correctchoices = temp
    document.getElementById("solutionTableBody").innerHTML = "";
    this.disabled = true
    document.getElementById("showsolution").hidden = false;
    for (var i = totalquestions; i >= 1; i--) {
        var colo = "green"
        var ans = correctchoices[i]
        for (temp = 0; temp < incorrect.length; temp++) {
            if (i == incorrect[temp])
                wrong = 1
        }
        if (wrong == 1) {
            colo = "red"
            wrong = 0
        }
        var str1 = ans
        var str2 = str1.fontcolor(colo);
        let table = document.getElementById("solutionTableBody")
        let row = table.insertRow(0);
        let column1 = row.insertCell(0);
        let column2 = row.insertCell(1);
        column1.innerHTML = i;
        column2.innerHTML = str2;
    }
}
