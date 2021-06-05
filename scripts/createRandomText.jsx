let res = ""
const array = "אבגדהוז חטיכל מנס עפצק רשתם ךףץן".split("");
for (let i = 0 ;i<50000;i++){
    res +=  array[Math.floor(Math.random() * array.length)];
    }
res= res.replace(/  +/g," ").replace(/(ף)/g, "$1 ").replace (/(ך)/g, "$1 ").replace (/(ץ)/g, "$1 ").replace (/(ן)/g, "$1 ").replace (/(ם)/g, "$1 ").replace (/(פ )/g, "פ").replace (/(מ )/g, "מ").replace (/(צ )/g, "צ").replace (/(נ )/g, "נ").replace (/(כ)/g, "כ");
console.log(res);
