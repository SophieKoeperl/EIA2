var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", main);
    let address = "https://app-sophie.herokuapp.com";
    let inputs = document.getElementsByTagName("input");
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
        let convert = JSON.stringify(studi);
        console.log(convert);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + convert, true);
        xhr.addEventListener("readystatechange", handleStateChangeInsert);
        xhr.send();
    }
    function handleStateChangeInsert(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function refresh(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=refresh", true);
        xhr.addEventListener("readystatechange", handleStateChangeRefresh);
        xhr.send();
    }
    function handleStateChangeRefresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    function suchen(_event) {
        let mtrkl = inputs[6].value;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=search&searchFor=" + mtrkl, true);
        xhr.addEventListener("readystatechange", handleStateChangeSearch);
        xhr.send();
    }
    function handleStateChangeSearch(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=aufgabe6.js.map