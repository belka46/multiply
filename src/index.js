module.exports = function multiply(first, second) {
    let arrStr1 = first.split('').reverse();
    let arrStr2 = second.split('').reverse();
    let mult = [];
    for (let i = 0; i < arrStr1.length; i++) {
        for (let j = 0; j < arrStr2.length; j++) {
            let res = arrStr1[i] * arrStr2[j];
            if(mult[i + j]){
                mult[i + j] += res;
            }else mult[i + j] = res;
        }
    }
    for (let i = 0; i < mult.length; i++) {
        let num = mult[i] % 10;
        let move = Math.floor(mult[i] / 10);
        mult[i] = num;
        if (mult[i + 1]){
            mult[i + 1] += move;
        }else if (move){
            mult[i + 1] = move;
        }
    }
    return mult.reverse().join('');
}