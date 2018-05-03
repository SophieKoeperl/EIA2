namespace Aufgabe4 {
    window.addEventListener("load", main);

    function main(_event: Event): void {
        let ButtonSpeichern: HTMLButtonElement = <HTMLButtonElement>document.getElementById("speichern");
        let ButtonRefresh: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let ButtonSuchen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("suchen");
        ButtonSpeichern.addEventListener("click", speichern);
        ButtonRefresh.addEventListener("click", refresh);
        ButtonSuchen.addEventListener("click", suchen);
    }

    //Eingabe speichern
    function speichern(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let courseSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("select");
        let studi: Studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            course: courseSelect.value
        };

        studiInfo[matrikel] = studi;
    }

    //Refresh & Ausgabe der Infos    
    function refresh(_event: Event): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        for (let matrikel in studiInfo) {
            let studi: Studi = studiInfo[matrikel];
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre " + ", " + studi.course;
            line += studi.gender ? ", (M)" : ", (F)";
            output.value += line + "\n";
        }
    }


    //Suchen
    function suchen(_event: Event): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
        output.value = "";
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let matrikel: string = inputs[6].value;
        console.log(matrikel);
        let studi: Studi = studiInfo[matrikel];
        console.log(studi);
        if (typeof studi === "undefined") {
            output.value = "No student data found.";
        } else {
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre " + ", " + studi.course;
            line += studi.gender ? ", (M)" : ", (F)";
            output.value += line + "\n";
        }
    }
}