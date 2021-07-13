function addition(par) {
    document.querySelector('#calculations').value = document.querySelector('#calculations').value + par;
};

function cleaning() {
    let clear = '';
    document.querySelector('#calculations').innerHTML = clear;
};

function del() {
    let val = document.querySelector('#calculations').value;
    if (val[val.length - 2] === '(' || val.slice(-1) === ')') {
        document.querySelector('#calculations').value = val.slice(0, val.length - 2);
    }
    else if (val.slice(-1) === ' ') {
        document.querySelector('#calculations').value = val.slice(0, val.length - 3);
    }
    else {
        document.querySelector('#calculations').value = val.slice(0, val.length - 1);
    }
};

function result() {
    let calc = document.querySelector('#calculations').value;
    let arr = calc.split(' ');
    let result2;

    while (arr.includes('(', 0)) {
        let i1 = arr.indexOf('(', 0);
        let j2 = arr.indexOf(')', 0);
        let first = arr.slice(i1 + 1, j2);
        while (first.includes('*', 0) || first.includes('/', 0)) {
            let i = first.indexOf('*', 0);
            let j = first.indexOf('/', 0);
            if (i === -1 || j === -1) {
                i === -1 ? (
                result2 = +first[j - 1],
                result2 /= +first[j + 1],
                first.splice(j - 1, 3, result2)
                ) : (
                    result2 = +first[i - 1],
                    result2 *= +first[i + 1],
                    first.splice(i - 1, 3, result2)
                );
            }
            else {
                i > j ? (
                    result2 = +first[j - 1],
                    result2 /= +first[j + 1],
                    first.splice(j - 1, 3, result2)
                    ) : ( 
                        result2 = +first[i - 1],
                        result2 *= +first[i + 1],
                        first.splice(i - 1, 3, result2)
                        );
            }
        }
    
        while (first.includes('+', 0) || first.includes('-', 0)) {
            let i = first.indexOf('+', 0);
            let j = first.indexOf('-', 0);
            if (i === -1 || j === -1) {
                i === -1 ? (
                result2 = +first[j - 1],
                result2 -= +first[j + 1],
                first.splice(j - 1, 3, result2)
                ) : (
                    result2 = +first[i - 1],
                    result2 += +first[i + 1],
                    first.splice(i - 1, 3, result2)
                );
            }
            else {
                i > j ? (
                    result2 = +first[j - 1],
                    result2 -= +first[j + 1],
                    first.splice(j - 1, 3, result2)
                    ) : ( 
                        result2 = +first[i - 1],
                        result2 += +first[i + 1],
                        first.splice(i - 1, 3, result2)
                        );
            }
        }
        arr.splice(i1, j2 - i1 + 1, first[0]);
    }

    while (arr.includes('*', 0) || arr.includes('/', 0)) {
        let i = arr.indexOf('*', 0);
        let j = arr.indexOf('/', 0);
        if (i === -1 || j === -1) {
            i === -1 ? (
            result2 = +arr[j - 1],
            result2 /= +arr[j + 1],
            arr.splice(j - 1, 3, result2)
            ) : (
                result2 = +arr[i - 1],
                result2 *= +arr[i + 1],
                arr.splice(i - 1, 3, result2)
            );
        }
        else {
            i > j ? (
                result2 = +arr[j - 1],
                result2 /= +arr[j + 1],
                arr.splice(j - 1, 3, result2)
                ) : ( 
                    result2 = +arr[i - 1],
                    result2 *= +arr[i + 1],
                    arr.splice(i - 1, 3, result2)
                    );
        }
    }

    while (arr.includes('+', 0) || arr.includes('-', 0)) {
        let i = arr.indexOf('+', 0);
        let j = arr.indexOf('-', 0);
        if (i === -1 || j === -1) {
            i === -1 ? (
            result2 = +arr[j - 1],
            result2 -= +arr[j + 1],
            arr.splice(j - 1, 3, result2)
            ) : (
                result2 = +arr[i - 1],
                result2 += +arr[i + 1],
                arr.splice(i - 1, 3, result2)
            );
        }
        else {
            i > j ? (
                result2 = +arr[j - 1],
                result2 -= +arr[j + 1],
                arr.splice(j - 1, 3, result2)
                ) : ( 
                    result2 = +arr[i - 1],
                    result2 += +arr[i + 1],
                    arr.splice(i - 1, 3, result2)
                    );
        }
    }
    document.querySelector('#calculations').innerHTML = arr[0];
};
