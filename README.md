# functionserializer

A micro library for serializing and deserializing functions to strings

```javascript
function greet(){
  return "Hello World!";
}
```
Sometimes you need to pass this across boundries that are JSON only.

```javascript
var o = functionserializer.serialize(greet);
var f = functionserializer.deserialize(o);
f(); // "Hello World!"
```
