//select  any text in indesign and run this script:
var res = ""
var array = "אבגדהוז חטיכל מנס עפצק רשתם ךףץן".split("");
for (var i = 0 ;i<10000;i++){
    res +=  array[Math.floor(Math.random() * array.length)];
    }
res= res.replace(/  +/g," ").replace(/(ף)/g, "$1 ").replace (/(ך)/g, "$1 ").replace (/(ץ)/g, "$1 ").replace (/(ן)/g, "$1 ").replace (/(ם)/g, "$1 ").replace (/(פ )/g, "פ").replace (/(מ )/g, "מ").replace (/(צ )/g, "צ").replace (/(נ )/g, "נ").replace (/(כ)/g, "כ");
activeDocument.selection[0].parent.texts[0].contents=res;
