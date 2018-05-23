function buy(resolve) {
    setTimeout(() => {
        let a = "vegetable";
        resolve(a);
    }, 2000);
}
function cook(val) {
    console.log(val);
}

// new Promise(function(resolve, reject) {
//     buy(resolve);
// }).then(cook);


