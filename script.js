// ex 1
function multiplierPar10NFois(num, n) {
    var result = num
    var cnt = 0
    while (cnt <= n) {
        num = num * 10
        result = result * 10
        console.log(result);
        cnt++

    }
}

//ex 2
function compterCaractèreÀIndex(ch1, n, ch2) {
    var result = 0
    var count = 0
    var caracter = ch1[n]
    while (count <= ch2.length) {
        if (caracter !== ch2[count]) {
            count++

        }
        result = result + 1

    }
    console.log(result);


}

//ex 3
function inverse(ch) {
    var result = ""
    var count = 0
    while (count < ch.length) {
        result = ch[count] + result
        count++


    }
    console.log(result);

}

//ex 4
function obtenirIndiceDe(ch1, c1) {
    var count = 0
    while (c1 !== ch1[count]) {
        count++

    }
    console.log(count);


}


//ex 5
function sommePairs(n1, n2) {
    var result = 0
    var count = n1
    while (count < n2) {
        if (count % 2 === 0) {
            result = result + count
        }
        count++
    }
    console.log(result);
    
}