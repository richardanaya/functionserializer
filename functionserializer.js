// functionserializer.js
// repo    : https://github.com/richardanaya/functionserializer
// license : MIT

(function (window, module) {
  "use strict";
  window.functionserializer = module.exports = {
    serialize : function(f){
      return {
        data:f.toString(),
        _____SERIALIZED_FUNCTION_____ : true
      }
    },
    deserialize : function(o){
      if(o._____SERIALIZED_FUNCTION_____==true){
        return eval("("+o.data+")")
      }
    }
  };
})(
  typeof window !== "undefined" ? window : {},
  typeof module !== "undefined" ? module : {}
);
