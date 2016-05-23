En JavaScript, a diferencia de otros lenguajes, los argumentos por defecto pueden ser expresiones:

```js
function log(arg, transform = x => x) {
    console.log(transform(arg));
}

log("Hola");                       // => "Hola"
log("Hola", y => y.toUpperCase()); // => "HOLA"
```

En este ejemplo, el valor por defecto para el argumento `transform` es la función identidad, `x => x`.

Los argumentos por defecto pueden también depender de otros argumentos.

```js
function assertEquals5(val, error = `${val} no es igual a 5!`) {
    assert.strictEqual(val, 5, error);
}

assertEquals5(3); // "3 no es igual a 5!"
```

## Reto

Para este ejercicio, deberás escribir un módulo Node el cual deberá exportar una función que enfatizará un string. Deberá hacer esto agregando un conjunto de signos de exclamación luego del mismo. El número exacto de signos de exclamación debe ser configurable, pero por defecto debera ser igual al tamaño del string. Entonces:

```js
enfatizar("Hola", 5);             // => "Hola!!!!!"
enfatizar("Hola");                // => "Hola!!!!"
enfatizar("Holaaaaa?", undefined); // => "Holaaaaa?!!!!!!!!!"
```

Un bonus de conocimiento ES6 que puede ser útil: ES6 incluye una función `String.prototype.repeat` que hace exactamente eso que tu imaginas.
