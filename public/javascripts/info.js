    "use strict"
    function hereDoc(f) {
        return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
    }
    var str = hereDoc(function () {/*

      _    _
     | |  | |
     | |__| |  ☄
     |  __  | | |
     | |  | | | |
     |_|  |_| |_| ✿
    */
    })
    console.log("%c", "padding:220px 320px;line-height:320px;background:url('http://img.hb.aicdn.com/dec61405363e454468e0c25432ad75d605de31329cd9e-R7xxbL_fw658') no-repeat;",str);
