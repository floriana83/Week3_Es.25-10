/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: stampa il valore di PI 3,14 due volte, una per ogni console.log(PI) 

const PI = 3.14; // 

console.log(PI); // stampa 3,4

if (PI >= 3) { //
  console.log(PI); // stampa 3,4 perchè soddisfa la condizione di if in quanto 3,14 è >= a 3 diversamente non avrebbe stampato nulla
}

// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: Il primo console.log stamperà Il mio colore preferito è:violet. il secondo stamperà Ci sono, 12, mesi in un anno.

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);  
} 
// soddisfa la condizione di if che stabilisce una restituzione di valore vero nel caso in cui la var favColour sia uguale a "violet"
console.log("Ci sono", monthsInAYear, "mesi in un anno."); 

/*stamperà: dato primitivo stringa + parametro impostato nello scope globale + dato primitivo stringa
Ci sono, 12, mesi in un anno. in questo caso lo scope è globale, non deve soddisfare nessuna condizione particolare. */



// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: 
/* primo console.log --> dato primitivo stringa + "," che in questo caso separa le due stringhe + moreIngredients collegato alla funzione
 principale dalla nostra condizione verificata if. 
 La prima stampa sarà :  Sugo di pomodoro freschissimo, rucola, prosciutto crudo e scaglie di grana.
 Il secondo console.log non verrà stampato, in quanto lo scope della dichiarazione theSecond lavora a livello locale all'interno della funzione 
 ed essendo if una conzione esterna non trova alcun collegamento. 
 Cosa fare per farlo funzionare??
 1) Inserire il secondo console.log nella funzione all'interno delle { ... } ma a questo punto essendo uno scope locale, la stampa sarebbe stata:
 Il secondo ingrediente necessario: Sugo di pomodoro freschissimo <-- quindi non sarebbe stato un secondo ingrediente.. quindi opterei per una seconda opzione
 2) Creare un let theSecond globale oltre a quello locale, dove assegnare il secondo ingrediente. per esempio:  let theSecond = origano;
 a quel punto la stampa sarebbe stata: Il secondo ingrediente necessario: origano. */

function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients); 
  

  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);
}

