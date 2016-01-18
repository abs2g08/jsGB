var Utils = {
    Hex16: function(a) {
        a = a.toString(16);
        while (a.length < 4) a = "0" + a;
        return a.toUpperCase()
    },
    Hex8: function(a) {
        a = a.toString(16);
        if (a.length < 2) a = "0" + a;
        return a.toUpperCase()
    },
    byteString: function(n) {
      if (n < 0 || n > 255 || n % 1 !== 0) {
        throw new Error(n + " does not fit in a byte");
      }
      return ("000000000" + n.toString(2)).substr(-8);
    },    
    AlignLeft: function(a, b) {
        while (a.length < b) a += " ";
        return a
    },
    AlignRight: function(a, b) {
        while (a.length < b) a = " " + a;
        return a
    },
    FormatNumber: function(a, b) {
        var c = a.toFixed(b).split(".");
        return (c[0].split("").reverse().join("").replace(/\d{3}/g, "$&,").replace(/,$/, '').split("").reverse().join("") + (c[1] ? "." + c[1] : ""))
    },
};