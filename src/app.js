let pronoun = ["the", "my", "our", "your"];
let adjective = ["ugly", "beautiful", "lazy", "strange"];
let noun = ["mother", "grandma", "brother", "nanny"];
let extension = [".com", ".net", ".es", ".ar"];

for (let pron of pronoun) {
    for (let adj of adjective) {
        for (let n of noun) {
            for (let ext of extension) {
                console.log(pron + adj + n + ext);
            };
        };
    };
};

/* ----> Ejercicio extra: domain hacks <---- */
/*

let word = ["jugar", "pelota", "puedes", "conectar"];
let extension1 = [".com", ".net", ".es", ".ar"];

for (let w of word) {
  for (let e of extension1) {
    if (w.endsWith(e.replace(".", ""))) {
      console.log(`${w.slice(0, -e.length + 1)}${e}`);
    } else {
      console.log(`${w}${e}`);
    }
  }
}

//Otra forma de hacerlo:

let word = ["jugar", "pelota", "puedes", "conectar"];
let extension1 = [".com", ".net", ".es", ".ar"];

for (let w of word) {
    for (let e of extension1) {
        if (w.endsWith(e.replace(".",""))) {
            console.log(`${w.substring(0,w.length - e.replace(".","").length)}${e}`);
        } else {
            console.log(`${w}${e}`);
        };
    };
}

*/
