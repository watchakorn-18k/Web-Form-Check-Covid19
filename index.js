/*let score_l1 = document.getElementById('lrY').value;
let score_l2 = document.getElementById('lr').value;
let score_l3 = document.getElementById('lrN').value;*/

var result =  document.getElementById('test2');
var test = document.getElementById('test');
let runButton = document.getElementById('run-button');
var score = 0;
var a = [{ 'yes': 9, 'not_sure': 4.5 },
{ 'yes': 8, 'not_sure': 4 },
{ 'yes': 7, 'not_sure': 3.5 },
{ 'yes': 6, 'not_sure': 3 },
{ 'yes': 14, 'not_sure': 7 }, { 'no': 0 }]

function show(id) {

    id = Number(id);
    console.log(id);
    for (i = 0; i < a.length; i++) {
        if (a[i].yes == id & a[2].yes != id ) {
            console.log('ใช่');
            score = score + id;
        }
        else if (a[i].not_sure == id) {
            console.log("ไม่แน่ใจ");
            score = score + id;
        }
        else if (a[i].no == id) {
            console.log('ไม่ใช่');
            score = score + id;
        }
    }

}
function check_1() {
    let text = ''
    if (score > 80) {
        score = 80;}
    if (score >= 35) {
        text = "ติดเชื้อ อาการรุนแรง ต้องเข้า ร.พ.ทันที"
        result.style.background = "rgb(255 66 66)"
        result.style.color = "#fff"
    }
    else if (score >= 25 & score <= 34) {
        text = "อาการกลุ่มไข้หวัดใหญ่ กักตัว ตรวจหาเชื้อด่วน"
        result.style.background = "rgb(255 137 15)"
        result.style.color = "#fff"
    }
    else if (score >= 15 & score <= 24) {
        text = "เฝ้าระวัง ให้เตือนคนรอบข้าง อาจติด แต่ไม่รุนแรง"
        result.style.color = "#333333"
        result.style.background = "rgb(255 226 15)"
    }
    else if (score >= 0 & score <= 14) {
        text = "ไม่ต้องกักตัวเอง แต่ระวังตามปรกติ"
        result.style.background = "#3de23d"
    }
    console.log(text);
    test.innerHTML = score;
    result.innerHTML= text;



}
runButton.addEventListener('click', check_1);