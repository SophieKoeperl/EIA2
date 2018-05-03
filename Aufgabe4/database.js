var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", main);
    function main(_event) {
        let ButtonSpeichern = document.getElementById("speichern");
        let ButtonRefresh = document.getElementById("refresh");
        let ButtonSuchen = document.getElementById("suchen");
        ButtonSpeichern.addEventListener("click", speichern);
        ButtonRefresh.addEventListener("click", refresh);
        ButtonSuchen.addEventListener("click", suchen);
    }
    //Eingabe speichern
    function speichern(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let courseSelect = document.getElementById("select");
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            course: courseSelect.value
        };
        Aufgabe4.studiInfo[matrikel] = studi;
    }
    //Refresh & Ausgabe der Infos    
    function refresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        for (let matrikel in Aufgabe4.studiInfo) {
            let studi = Aufgabe4.studiInfo[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre " + ", " + studi.course;
            line += studi.gender ? ", (M)" : ", (F)";
            output.value += line + "\n";
        }
    }
    //Suchen
    function suchen(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        let inputs = document.getElementsByTagName("input");
        let matrikel = inputs[6].value;
        console.log(matrikel);
        let studi = Aufgabe4.studiInfo[matrikel];
        console.log(studi);
        if (typeof studi === "undefined") {
            output.value = "No student data found.";
        }
        else {
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre " + ", " + studi.course;
            line += studi.gender ? ", (M)" : ", (F)";
            output.value += line + "\n";
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=database.js.map