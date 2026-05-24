// var i=1; // bình thường không dùng , nhiều bug, biến toàn cục,khi khai báo lại nó vẫn ăn 
// let a=2;// khi khai báo lại thì bị lỗi
// const c=5; // không thay đổi giá trị

// if (true){
//     i=2;
//     a=3;
// }
// // let không đc khai báo trong {}
// // kiểu dữ liệu: string, number, boolean, undefined (let a rồi không gán giá trị), null ( phải gán bằng null)
// console.log(i)
// console.log(a)

// console.log(typeof(a))

// // toán tử + - * / %
// // > < <= >=
// // == : 10 == '10' -> đúng
// // ===: 10 === '10' -> sai vì kiểu dữ liệu khác nhau
// console.log(10 == "10")


// // kiểu dữ liệu tham chiếu
// // object, array, function
// let fruits= ["táo", "ổi", "cam"]
// let student={
//     name: "Phúc",
//     age: "22",
//     class: "23T_DT4"
// }

// function sum (a, b){
//     console.log(a+b)
//     return a+b;
// }

// let t = sum(3, 4);
// console.log(t)

// if (a<b){

// }
// else if{

// }
// else{

// }
// bitwise: & | ^ ~(not) << >>

// số hoàn hảo, số nguyên tố, số tự nhiên

let n = 22
 

// check số tự nhiên
function stn( n){
    return (n - Math.trunc(n)) == 0
}

console.log(stn(n))

// check số nguyên tố
function prime(n){
    if (~stn(n)) return false; 
    if ( n === 2){
        return true;
    }else if ( n > 2){
        for (let i = 2; i * i <= n; i++){
            if (n % i ==2){
               return false;
                break;
            }
        }
        return true && (n > 0);
    }else{
        return false;
    }
}
console.log(prime(n))
// check số hoàn hảo
function perfect(n){
     let sum = 0;
    for (let i =1 ; i< n; i++){
        if (n % i ==0){
            sum += i;
        }
    }
    if ( sum === n){
        return true;
    }else{
        return false
    }
}
   console.log(perfect(n))

let b = "aaaaa" + n

// "hahaha" + n
// 'hahahaha ${i}'

