module.exports = {
    replace : function(str, map) {
        let res = '';
        for(i in str) {
            let c = str.charAt(i);
            let replace_value = map[c];
            if (replace_value !== undefined) {
                res += replace_value;
            } else {
                res += c;
            }
        }
        return res;
    }
}