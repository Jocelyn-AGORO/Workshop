function intersection(list1, list2) {
    return list1.filter(a => list2.some(id => id === a.id));
}

async function getComportements() {
    const partieId = Math.round(Math.random() * 3);
    console.log(partieId);
    try{
        let response = await fetch("./data/situations.json");
        const situations = await response.json();
        const situation = situations.situations[partieId];
        response = await fetch("./data/comportements.json");
        let comportements = await response.json();
        comportements = comportements.comportements;
        console.log(comportements)
        const result = intersection(comportements, situation.comportements)
        console.log("Result : ", result);
        return result;
    }
    catch (err) {
        console.log(err)
    }
}

async function getCharAttributes(id) {
    try{
        let response = await fetch("./data/caracteres.json");
        const caracteres = await response.json();
        const caractere =  caracteres.caracteres.filter(caracte => caracte.id === id)[0];
        const carAttributes = caractere.attributes;
        response = await fetch("./data/attributs.json");
        const atributs = await response.json();
        let result = intersection(atributs.attributs, carAttributes);
        console.log(result);
        return result;
    }
    catch (err) {
        console.log(err)
    }
}

async function getTopCharacters() {
    try{
        const response = await fetch("./data/caracteres.json");
        const caracteres = await response.json();
        const resutlt =  caracteres.caracteres.slice(0,4)
        console.log(resutlt)
        return resutlt
    }
    catch (err) {
        console.log(err)
    }
}

async function getBottomCharacters() {
    try{
        const response = await fetch("./data/caracteres.json");
        const caracteres = await response.json();
        return caracteres.
                caracteres.slice(3, 7)
    }
    catch (err) {
        console.log(err)
    }
}

getComportements();