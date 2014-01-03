var tape = require("tape")
  , cookie = require("../")

tape("Cookie", function(test){

  test.equal(cookie.DAY, 864e5, "Cookie contains a DAY const")
  cookie.set("foo", "bar")
  test.equal(cookie.get("foo"), "bar", "Gets and sets correctly")
  cookie.remove("foo")
  test.equal(cookie.get("foo"), null, "Succesfully removes cookies")
  cookie.set("baz", "foo", 100)
  setTimeout(function(){
    test.equal(cookie.get("baz"), null, "Expiration")
    test.end()
  }, 200)

})
