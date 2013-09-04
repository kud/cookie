;(function(root, name, output){
  if(typeof define == "function" && define.amd) define([], output)
  else root[name] = output()
})(this.window, "Cookie", function(){

  var klass = {}.toString, 
      hasOwn = {}.hasOwnProperty, 
      number = "[object Number]", 
      _date = "[object Date]",
      DAY = 864e5

  /**
   * Returns an options object from the given `object` which can be a number (which would be `days`).
   * 
   * @param {Object|Null|Undefined|Number} object
   * @returns {Object}
   * @private
   */
  function toOptions(object, erase) {
    var type = klass.call(object)
    if(typeof object == "number" || type == number || type == _date ) {
      object = { expires : object }
    }
    if(!object) object = {}
    if(erase) object.expires = null
    return object
  }

  /**
   * Returns a string from an options `object`.
   * 
   * @param {Object|Null|Undefined|Number} object Options to convert to a string
   * @param {Boolean} erase Sets the expire date to the day before (cookie removal)
   * @returns {String} Cookie parameters string
   * @private
   */
  function options(object, erase){
    var i, string = "", date
    object = toOptions(object, erase)
    if("expires" in object) {
      date = new Date()
      date.setTime(erase ? 0 : +object.expires)
      object.expires = date.toGMTString()
    }
    for(i in object) {
      if(!hasOwn.call(object, i)) continue
      string += ";" + i + "=" + object[i]
    }
    return string
  }

  /**
   * Returns the value of the cookie matching the given `name` or `null` if doesn't exist
   * 
   * @param {String} name Cookie name
   * @return {String|Null} Cookie value or `null`
   * @memberOf Cookie
  */
  function get(name){
    var match = document.cookie.match("\\s*" + name + "\\s*=\\s*([^;]*?)\\s*(?:;|$)\\s*")
    return match && match[1]
  }

  /**
   * Sets the value of the cookie matching the given `name` or `null` if doesn't exist
   * 
   * @param {String} name Cookie name
   * @param {String} value Cookie value
   * @param {Object|Number|Null} [opts] Options ([path], [domain], [days])
   * @return Cookie
   * @memberOf Cookie
   */
  function set(name, value, opts){
    document.cookie = name + "=" + value + options(opts)
    return this
  }

  /**
   * Removes the cookie matching `name`. 
   * 
   * @param {String} name Cookie name
   * @param {Object|Number|Null} [opts] Options ([path], [domain])
   * @return Cookie
   * @memberOf Cookie
  */
  function remove(name, opts){
    document.cookie = name + "=" + options(opts, true)
    return this
  }

  /**
   * Cookie object
   * 
   * @type Object
   * @name Cookie
   */
  return {
    DAY : DAY,
    get : get,
    set : set,
    remove : remove
  }

});