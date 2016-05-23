Las funciones flecha ayudan a hacer el uso confuso de `this` menos confunso.

Las funciones flecha bindean léxicamente el valor de `this`.  Es muy probable que tú no sepas que quiere decir esto. Y eso está bien.

Lo que necesitas saber es que el valor de `this` en una función flecha es el mismo que se encuentra en el enclosing scope. Esto queire decir que el valor de `this` dentro de una función flecha es el mismo que el que encontramos fuera de esta.
Veamos un ejemplo:

```js
var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(function () {
            console.log(this.yelp);
        });
    }
};
foot.kick();
```

Cuando ocurre la llamada a `console.log()`, un programador JavaScript novato esperaria que `this.yelp` contenga `"Ouch!"`. Pero, en realidad, será `undefined`, porque la función que pasamos a `setImmediate` posee su propio `this` (que por defecto es el objeto global, que no posee una propiedad `yelp`). En ES5, es posible evitar esto usando hacks como:

```js
setImmediate(function () {
    console.log(this.yelp);
}.bind(this));
```

o también:

```js
var that = this;
setImmediate(function () {
    console.log(that.yelp);
});
```

En cambio, en ES6, las funciones flecha nos libran de cosas así y nos permiten concentrarnos en decir lo que queremos decir. Si usamos una función flecha para el callback de `setImmediate`, nuestro código funcionará como esperábamos.

## Reto

Hagamos exactamente esto. Empecemos con el código original del ejemplo anterior, reemplaza la función anónima dada a `setImmediate` con una función flecha.

## Consejo

Para declarar una función flecha que no recibe ningún argumento, puedes usar `() => ...`.
