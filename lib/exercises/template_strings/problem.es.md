Los strings templates de ES6 son una nueva forma de escribir strigs. Que usan los backticks ( `` ) en vez de los quotes ( '' o "" ). Estos brindan habilidades mas poderosas para construir strings. Nos permiten la interpolación de strings, con una sintaxis como:

```js
`Hola, ${persona}! 1 + 1 = ${1 + 1}!`
```

Pueden ser multilinea también, simplemente agregando saltos de línea dentro de tu string:

```js
`Hola,
mundo!`
```

## Reto

Recibirás un nombre como primero parámetro de tu programa (`process.argv[2]`). Debes mostrar un mensaje de dos lineas, primero saludando a la persona, y luego diciéndole su nombre en letra minúscula. Por ejemplo, si el nombre fue `"Domenic"`, debes mostrar:

```
Hola, Domenic!
Tu nombre en letra minúscula es "domenic".
```

Puedes empezar haciendo esto usando constructores ES5 si quieres, pero la solucion correcta usa un _solo_ template string ES6 y no usa el operador `+`.
