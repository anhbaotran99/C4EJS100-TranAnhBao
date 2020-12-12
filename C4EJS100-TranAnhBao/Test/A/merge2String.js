function merge2String(s1, s2) {
    let length = Math.max(s1.length, s2.length);
    let result = '';
    for(let i = 0; i < length; i++) {
        let char1 = s1[i];
        let char2 = s2[i];
        if(char1 == undefined) {
            char1 = '';
        }
        if(char2 == undefined) {
            char2 = '';
        }
        result += char1 + char2;
    }
    return result;
}

console.log(merge2String('abc', '123'));
console.log(merge2String('abc', '0123'));
console.log(merge2String('abcd', '123'));