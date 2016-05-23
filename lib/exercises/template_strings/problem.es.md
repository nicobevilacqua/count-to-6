Los template strings de ES6 son una nueva forma de escribir strigs. Que usan los backticks ( `` ) en vez de los quotes ( '' o "" ). Estos nos brindan características más poderosas. Nos permiten la interpolación de strings, con una sintaxis como:

```js
`Hola, ${persona}! 1 + 1 = ${1 + 1}!`
```

Que pueden ser multilinea también, simplemente agregando saltos de línea dentro de tu string:

```js
`Hola,
mundo!`
```

## Reto

Recibirás un nombre como primer parámetro de tu programa (`process.argv[2]`). Debes mostrar un mensaje de dos lineas, primero saludando a la persona, y luego diciéndole su nombre en letra minúscula. Por ejemplo, si el nombre fuese `"Domenic"`, deberás mostrar:

```
Hola, Domenic!
Tu nombre en letra minúscula es "domenic".
```

Puedes empezar haciendo esto usando constructores ES5 si quieres, pero la solución correcta usa un _solo_ template string ES6 y no usa el operador `+`.
