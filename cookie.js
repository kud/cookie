/**
 * Manage cookies easily.
 */
define([], function() {

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
            if(typeof opts.path === 'undefined') { opts.path = 'path=/'; } else { opts.path = 'path=' + opts.path; }
            if(typeof opts.domain === 'undefined') { opts.domain = ''; } else { opts.domain = 'domain=' + opts.domain + '; '; }

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
         * @return {null}
         */
        read: function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
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