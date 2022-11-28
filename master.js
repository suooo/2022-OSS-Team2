//현재 날짜 표시
date = new Date();
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
let date_cur = date.getDate()  + "th " + months[date.getMonth()] + " " + date.getFullYear();
document.getElementById('date_cur').innerHTML= date_cur;

//현재시간 표시
let hours = ('0' + date.getHours()).slice(-2); 
let minutes = ('0' + date.getMinutes()).slice(-2);
let time = hours + " : " + minutes; 
document.getElementById('time').innerHTML= time;

  let city = 'seoul'; // 도시 입력받기
  let url_cur = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=19270a9b0c4a7374ce2701c75e2ba16b&units=metric'; // 현재 날씨 api
  let url_fut =  'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=19270a9b0c4a7374ce2701c75e2ba16b&units=metric'; // 미래 날씨 api
    
  // 현재날씨 및 최저 최고 기온 출력
    fetch(url_cur) 
    .then((response) => response.json())
    .then((data) => {
        let temp = Math.floor(data.main.temp); // 현재기온
       
      document.getElementById('temp_cur').innerHTML= temp;

      let temp_today = Math.floor(data.main.temp_min) +"°" + " / " + Math.floor(data.main.temp_max) +"°"; // 당일 최저 최고기온
      document.getElementById('temp_today').innerHTML= temp_today;
  });


   // 3시간 단위의 이후 날씨 출력
    fetch(url_fut) 
    .then((response) => response.json())
    .then((data) => {
   
    let hourly_time1 = data.list[3].dt_txt.slice(11, 13);
    let hourly_time2 = data.list[4].dt_txt.slice(11, 13);
    let hourly_time3 = data.list[5].dt_txt.slice(11, 13);
    let hourly_time4 = data.list[6].dt_txt.slice(11, 13);
    let hourly_time5 = data.list[7].dt_txt.slice(11, 13);
    let hourly_time6 = data.list[8].dt_txt.slice(11, 13);
    
    let hourly_temp1 =Math.floor(data.list[3].main.temp) +"°";
    let hourly_temp2 =Math.floor(data.list[4].main.temp) +"°";
    let hourly_temp3 =Math.floor(data.list[5].main.temp) +"°";
    let hourly_temp4 =Math.floor(data.list[6].main.temp) +"°";
    let hourly_temp5 =Math.floor(data.list[7].main.temp) +"°";
    let hourly_temp6 =Math.floor(data.list[8].main.temp) +"°";
    

        if(hourly_time1<12){
            document.getElementById('hourly_time1').innerHTML= hourly_time1.slice(1.1) + " A.M.";
        }
        else if(hourly_time1==12){
            document.getElementById('hourly_time1').innerHTML= hourly_time1 + " P.M.";
        }
        else{
            document.getElementById('hourly_time1').innerHTML= hourly_time1 - 12 + " P.M.";
        }
        if(hourly_time2<12){
            document.getElementById('hourly_time2').innerHTML= hourly_time2.slice(1.1) + " A.M.";
        }
        else if(hourly_time2==12){
            document.getElementById('hourly_time2').innerHTML= hourly_time2 + " P.M.";
        }
        else{
            document.getElementById('hourly_time2').innerHTML= hourly_time2 - 12+ " P.M.";
        }
        if(hourly_time3<12){
            document.getElementById('hourly_time3').innerHTML= hourly_time3.slice(1.1) + " A.M.";
        }
        else if(hourly_time3==12){
            document.getElementById('hourly_time3').innerHTML= hourly_time3 + " P.M.";
        }
        else{
            document.getElementById('hourly_time3').innerHTML= hourly_time3 - 12 + " P.M.";
        }
        if(hourly_time4<12){
            document.getElementById('hourly_time4').innerHTML= hourly_time4.slice(1.1) + " A.M.";
        }
        else if(hourly_time4==12){
            document.getElementById('hourly_time4').innerHTML= hourly_time4 + " P.M.";
        }
        else{
            document.getElementById('hourly_time4').innerHTML= hourly_time4 - 12 + " P.M.";
        }
        if(hourly_time5<12){
            document.getElementById('hourly_time5').innerHTML= hourly_time5.slice(1.1) + " A.M.";
        }
        else if(hourly_time5==12){
            document.getElementById('hourly_time5').innerHTML= hourly_time5 + " P.M.";
        }
        else{
            document.getElementById('hourly_time5').innerHTML= hourly_time5 - 12 + " P.M.";
        }
        if(hourly_time6<12){
            document.getElementById('hourly_time6').innerHTML= hourly_time6.slice(1.1) + " A.M.";
        }
        else if(hourly_time6==12){
            document.getElementById('hourly_time6').innerHTML= hourly_time6 + " P.M.";
        }
        else{
            document.getElementById('hourly_time6').innerHTML= hourly_time6 - 12 + " P.M.";
        }

    document.getElementById('hourly_temp1').innerHTML= hourly_temp1;
    document.getElementById('hourly_temp2').innerHTML= hourly_temp2;
    document.getElementById('hourly_temp3').innerHTML= hourly_temp3;
    document.getElementById('hourly_temp4').innerHTML= hourly_temp4;
    document.getElementById('hourly_temp5').innerHTML= hourly_temp5;
    document.getElementById('hourly_temp6').innerHTML= hourly_temp6;
   
  });