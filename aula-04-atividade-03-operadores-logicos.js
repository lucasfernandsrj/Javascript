/*
(E lógico) - Retorna expr1 caso possa ser convertido para falso; 
senão, retorna expr2. Assim, quando utilizado com valores booleanos, 
&& retorna verdadeiro caso ambos operandos sejam verdadeiros; 
caso contrário, retorna falso.
*/

var a1 =  true && true;     // t && t retorna true
var a2 =  true && false;    // t && f retorna false
var a3 = false && true;     // f && t retorna false
var a4 = false && (3 == 4); // f && f retorna false
var a5 = "Gato" && "Cão";   // t && t retorna Cão
var a6 = false && "Gato";   // f && t retorna false
var a7 = "Gato" && false;   // t && f retorna false

/*
(OU lógico) -  Retorna expr1 caso possa ser convertido para verdadeiro; 
senão, retorna expr2. Assim, quando utilizado com valores booleanos, 
|| retorna verdadeiro caso ambos os operandos sejam verdadeiro; 
se ambos forem falsos, retorna falso.
*/

var o1 =  true || true;     // t || t retorna true
var o2 = false || true;     // f || t retorna true
var o3 =  true || false;    // t || f retorna true
var o4 = false || (3 == 4); // f || f retorna false
var o5 = "Gato" || "Cão";   // t || t retorna Gato
var o6 = false || "Gato";   // f || t retorna Gato
var o7 = "Gato" || false;   // t || f retorna Gato

/*

(Negação lógica) Retorna falso caso o único operando possa ser convertido para verdadeiro; 
senão, retorna verdadeiro.

*/

var n1 = !true;   // !t retorna false
var n2 = !false;  // !f retorna true
var n3 = !"Gato"; // !t retorna false

console.log(o5);