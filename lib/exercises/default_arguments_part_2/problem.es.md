En JavaScript, a diferencia que otros lenguajes, los argumentos por defecto pueden ser expresiones:

```js
function log(arg, transform = x => x) {
    console.log(transform(arg));
}

log("Hello");                       // => "Hello"
log("Hello", y => y.toUpperCase()); // => "HELLO"
```

En este ejemplo, el valor por defecto para el argumento `transform` es la función identidad, `x => x`.

Los argumentos por defecto pueden también depender de otros argumentos.

```js
function assertEquals5(val, error = `${val} does not equal 5!`) {
    assert.strictEqual(val, 5, error);
}

assertEquals5(3); // "3 does not equal 5!"
```

## Reto

Para este ejercicio, deberás escribir un modulo Node el cual deberá exportar una funcion que construirá un string realmente importante. Deberá hacer esto agregando un conjunto de signos de exclamación luego del mismo. El número exacto de signos de exclamación debe ser configurable, pero por defecto debera ser igual al tamaño del string. Entonces:

```js
makeImportant("Hi", 5);             // => "Hi!!!!!"
makeImportant("Hi");                // => "Hi!!"
makeImportant("Hello?", undefined); // => "Hello?!!!!!!"
```

Un bonus de conocimiento ES6 que puede ser util: ES6 incluye una función `String.prototype.repeat` que hace exactamente eso que tu puedes imaginar.
