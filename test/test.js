var assert = require('assert');
var functionserializer = require("../functionserializer");

describe('functionserializer', function() {
  it('should serialize', function () {
    var f = function(x){
      return x+1;
    }
    var s = functionserializer.serialize(f);
    assert.equal(true, s._____SERIALIZED_FUNCTION_____==true);
  });
  it('should deserialize', function () {
    var o = {
      _____SERIALIZED_FUNCTION_____:true,
      data:"function(x){return x+1;}"
    }
    var s = functionserializer.deserialize(o);
    assert.equal(true, s(1)==2);
  });
  it('should deserialize serialized', function () {
    var f = function(){
      return "hello world";
    }
    var f2 = functionserializer.deserialize(functionserializer.serialize(f));
    assert.equal("hello world", f2());
  });
});
