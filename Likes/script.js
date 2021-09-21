var count1 = 9;
var count2 = 12;
var count3 = 9;
var countLikes1 = document.querySelector("#likes");
var countLikes2 = document.querySelector("#likes2");
var countLikes3 = document.querySelector("#likes3");
function addLike(){
    count1++;
    countLikes1.innerText = count1 + " like(s)";
    console.log(count1);
}
function addLike2(){
    count2++;
    countLikes2.innerText = count2 + " like(s)";
    console.log(count2);
}
function addLike3(){
    count3++;
    countLikes3.innerText = count3 + " like(s)";
    console.log(count3);
}