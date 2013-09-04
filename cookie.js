;(function(root, name, output){
  if(typeof define == "function" && define.amd) define([], output)
  else root[name] = output()
})(this.window, "Cookie", function(){

  var klass = {}.toString, 
      hasOwn = {}.hasOwnProperty, 
      number = "[object Number]", 
      DAY = 864e5

  /**
   * A function that returns an options object from the given `object` which can be a number (which would be `days`).
   * 
   * @param {Object|Null|Undefined|Number} object
   * @returns {Object}
   * @private
   */
  function toOptions(object, erase) {
    if(typeof object == "number" || klass.call(object) == number) object = { days : object }
    if(!object) object = {}
    if(erase) object.days = null
    return object
  }

  /**
   * A function that returns a string from an options `object`.
   * 
   * @param {Object|Null|Undefined|Number} object Options to convert to a string
   * @param {Boolean} erase Sets the expire date to the day before (cookie removal)
   * @returns {String} Cookie parameters string
   * @private
   */
  function options(object, erase){
    var i, string = "", date
    object = toOptions(object, erase)
    for(i in object) {
      if(!hasOwn.call(object, i)) continue
      string += "; "
      if(i == "days") {
        date = new Date()
        date.setTime(date.getTime() + (erase ? -1 : object[i]) * 864e5)
        string += "expires=" + date.toGMTString()
        continue
      }
      string += i + "=" + object[i]
    }
    return string
  }

  /**
   * A function that returns the value of the cookie matching the given `name` or `null` if doesn't exist
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
   * A function that set the value of the cookie matching the given `name` or `null` if doesn't exist
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
   * A function that set the value of the cookie matching the given `name` or `null` if doesn't exist
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
    get : get,
    set : set,
    remove : remove
  }

});