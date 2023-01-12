function printArray (arr) {
    let ans = "";
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i] + " ";
    }
    console.log(ans);
}

function randomize (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr [i]];
    }
}

let arr = [1, 2, 5, 50, 124];
randomize(arr);
printArray(arr);