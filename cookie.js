/**
 * Manage cookies easily.
 */
;(function(root, name, output){
  if (typeof define == "function" && define.amd) define([], output)
  else root[name] = output()
})(this.window, "Cookie", function() {

    var Cookie = {
        /**
         * Create a cookie
         * @param  {string}                 name  Name of the cookie
         * @param  {string|number|boolean}  value Value of the cookie
         * @param  {array}                  opts  Domain, Path, Expires
         * @return {void}
         */
        create: function(name,value, opts) {
            if(typeof opts === 'undefined') { var opts = {}; }
            if(typeof opts.path === 'undefined') { opts.path = '; path=/'; } else { opts.path = '; path=' + opts.path; }
            if(typeof opts.domain === 'undefined') { opts.domain = ''; } else { opts.domain = '; domain=' + opts.domain; }

            var expires = '; ';
            if (opts.days) {
                var date = new Date();
                date.setTime(date.getTime()+(opts.days*24*60*60*1000));
                expires = "; expires="+date.toGMTString();
            }

            document.cookie = name + "=" + value + expires + opts.domain + opts.path + ';';
        },

        /**
         * Read a cookie
         * @param  {string} name Its name
         * @return {string} value or {null}
         */
        read: function(name){
            var match
            return (match = document.cookie.match(RegExp("\\s*" + name + "\\s*=\\s*([^;]*?)\\s*(?:;|$)\\s*"))) && match[1]
        },

        /**
         * Erase a cookie
         * @param  {string} name Its name
         * @return {void}
         */
        erase: function(name) {
            this.create(name,"",-1);
        }
    };

    return Cookie;
});