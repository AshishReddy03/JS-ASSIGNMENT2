function check(n) {
    if (n < 0) {
        console.log("NEGATIVE NUMBER");
    }
    else if (n > 0) {
        console.log("POSITIVE NUMBER");
    }
    else {
        console.log("ZERO")
    }
}

function fact(n) {
    let f = 1;
    if (n < 0) {
        console.log("ENTER A POSITIVE NUMBER");
    }
    else {
        for (let i = 1; i <= n; i++) {
            f = f * i;
        }
        return f;
    }
}

function larger(a, b) {
    if (a > b)
        return a;
    else
        return b;
}

// function palindrome(n) {
//     let r;
//     let sum = 0;
//     let temp;
//     temp = n;
//     while (n > 0) {
//         r = n % 10;
//         sum = (sum * 10) + r;
//         n = Math.floor(n / 10);

//     }
//     if (sum == temp) {
//         return "PALINDROME";
//     }
//     else
//         return "NOT A PLAINDROME"
// }

function palindrome(name) {
    let rev = "";
    for (let i = name.length - 1; i >= 0; i--) {
        rev += name[i];
    }
    if (rev == name)
        return "PALINDROME";
    else
        return "NOT A POLINDROME";
}

function prime(n) {
    let c = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            c += 1
        }
    }
    if (c == 2)
        return "PRIME NUMBER";
    else
        return "NOT A PRIME NUMBER"
}

function calculate(a, b, op) {
    if (op == '+')
        return a + b;
    else if (op == '-')
        return a - b;
    else if (op == '*')
        return a * b;
    else if (op == "/")
        return a / b;
}

function vowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'e') {
            count += 1;
        }
    }
    return count;
}

function divisor(n) {
    sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            sum += i;
        }

    }
    if (sum == n)
        return "PERFECT NUMBER";
    else
        return "NOT A PERFECT NUMBER";
}

function fib(n) {
    let n1 = 0;
    let n2 = 1;
    for (let i = 1; i <= n; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    } nextTerm;
}

function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
}