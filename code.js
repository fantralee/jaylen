var a=["【資管系 公告】【預聘招募會】- 緯創資通/力麗企業",
"寫於 週二, 26 四月 2022 10:24",
"【資管系 公告】中部創新自造教育基地~認識創業講座，帶你認識不同的創業議題~歡迎踴躍參加",
"寫於 週二, 26 四月 2022 10:24",
"【資管系 公告】【展翅飛翔】111年圓夢計畫徵件公告",
"寫於 週二, 26 四月 2022 10:20"]
var b=["【資管系 公告】本系藍友峰老師109年度榮獲教育部109年度大專校院教學實踐研究績優計畫",
"寫於 週一, 14 二月 2022 09:03",
"【資管系 公告】恭賀！本系吳純慧教授榮任管理學院第七任院長",
"寫於 週四, 13 一月 2022 12:39",
"【資管系 公告】恭喜本系同學榮獲2021年校慶全國大專暨高中學生專題競賽多項獎項",
"寫於 週一, 29 十一月 2021 18:05"]
var c=["【資管系 公告】亞馬遜AWS校園徵才資訊及4.21線上活動邀請",
"寫於 週五, 08 四月 2022 14:17",
"【資管系 公告】意藍資訊 2022年度徵才計畫⯑智能數據職涯，邀您一同加入！",
"寫於 週五, 08 四月 2022 14:15",
"【資管系 公告】2022年度陽明海運招募訊息",
"寫於 週五, 08 四月 2022 14:14"]
var text=''
function myfunction1()   
 {   
     
    for (i = 0; i < a.length; i++){
        text += a[i] + "<br>";
    } 
    document.getElementById("taboi").innerHTML = text; 
    text=''
}
function myfunction2()   
 {   
    for (i = 0; i < b.length; i++){
        text += b[i] + "<br>";
    } 
    document.getElementById("taboi").innerHTML = text; 
    text=''
}
function myfunction3()   
 {   
    for (i = 0; i < c.length; i++){
        text += c[i] + "<br>";
    } 
    document.getElementById("taboi").innerHTML = text; 
    text=''
}
            