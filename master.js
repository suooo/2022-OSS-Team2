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
let date_cur;
if (date.getDate() === 1) {
  date_cur =
    date.getDate() + "st " + months[date.getMonth()] + " " + date.getFullYear();
} else if (date.getDate() === 2) {
  date_cur =
    date.getDate() + "nd " + months[date.getMonth()] + " " + date.getFullYear();
} else if (date.getDate() === 3) {
  date_cur =
    date.getDate() + "rd " + months[date.getMonth()] + " " + date.getFullYear();
} else {
  date_cur =
    date.getDate() + "th " + months[date.getMonth()] + " " + date.getFullYear();
}
document.getElementById("date_cur").innerHTML = date_cur;

//현재시간 표시
let hours = ("0" + date.getHours()).slice(-2);
let minutes = ("0" + date.getMinutes()).slice(-2);
let time = hours + " : " + minutes;
document.getElementById("time").innerHTML = time;

// 위치 정보 가져오기 및 모달창
const add_location = document.querySelector(".add_location");
const modal = document.getElementById("modal");
let city = document.getElementById("location_cur");
let citylenght = sessionStorage.length;

if(citylenght===1){
    sessionStorage.setItem("city_cur", 'seoul');
}
city = sessionStorage.getItem("city_cur");
city_input();

add_location.addEventListener("click", () => {
  modal.style.display = "flex";
});

function modalOn() {
  modal.style.display = "flex";
}
function isModalOn() {
  return modal.style.display === "flex";
}
function modalOff() {
  modal.style.display = "none";
}

const closeBtn = modal.querySelector(".close-area");
closeBtn.addEventListener("click", (e) => {
  modalOff();
});

function slectcity() {
  const seoul = modal.querySelector("#seoul");
  seoul.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Seoul');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const incheon = modal.querySelector("#incheon");
  incheon.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Incheon');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const suwon = modal.querySelector("#suwon");
  suwon.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Suwon');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const chuncheon = modal.querySelector("#chuncheon");
  chuncheon.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Chuncheon');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const cheongju = modal.querySelector("#cheongju");
  cheongju.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Cheongju');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const andong = modal.querySelector("#andong");
  andong.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Andong');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const daejeon = modal.querySelector("#daejeon");
  daejeon.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Daejeon');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const jeonju = modal.querySelector("#jeonju");
  jeonju.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Jeonju');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const daegu = modal.querySelector("#daegu");
  daegu.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Daegu');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const gwangju = modal.querySelector("#gwangju")
  gwangju.addEventListener("click", e => {
      sessionStorage.setItem("city_cur", 'Gwangju');
      city = sessionStorage.getItem("city_cur");
      city_input();    
      modalOff();
  })

  const mokpo = modal.querySelector("#mokpo");
  mokpo.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Mokpo');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const yeosu = modal.querySelector("#yeosu");
  yeosu.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Yeosu');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const busan = modal.querySelector("#busan");
  busan.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Busan');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const ulsan = modal.querySelector("#ulsan");
  ulsan.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Ulsan');
    city = sessionStorage.getItem("city_cur");
    city_input();
    modalOff();
  });

  const jeju = modal.querySelector("#jeju");
  jeju.addEventListener("click", (e) => {
    sessionStorage.setItem("city_cur", 'Jeju');
    city = sessionStorage.getItem("city_cur"); 
    city_input();
    modalOff();
  });
}

slectcity();

function city_input() {
  document.getElementById("location_cur").innerHTML = city;
  let url_cur =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=19270a9b0c4a7374ce2701c75e2ba16b&units=metric"; // 현재 날씨 api
  let url_fut =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=19270a9b0c4a7374ce2701c75e2ba16b&units=metric"; // 미래 날씨 api

  // 현재날씨 및 최저 최고 기온 출력
  fetch(url_cur)
    .then((response) => response.json())
    .then((data) => {
      let temp = Math.floor(data.main.temp); // 현재기온
      document.getElementById("temp_cur").innerHTML = temp;

      let temp_today =
        Math.floor(data.main.temp_min) +
        "°" +
        " / " +
        Math.floor(data.main.temp_max) +
        "°"; // 당일 최저 최고기온
      document.getElementById("temp_today").innerHTML = temp_today;

      let weather = data.weather[0].main;

      if (weather === "Clear"){
        document.getElementById("temp_cur_img").src = "/img/temp_cur_img.png";
        document.getElementsByClassName("bg_img")[0].style.backgroundImage = 'url("/img/bg_img_clear.png")';
      }      
      //맑음 사진
      else if (weather === "Rain"){
        document.getElementById("temp_cur_img").src = "/img/temp_cur_img.png";
        document.getElementsByClassName("bg_img")[0].style.backgroundImage = 'url("/img/bg_img_rain.png")';
      }
      //비 사진
      else if (weather === "Snow"){
        document.getElementById("temp_cur_img").src = "/img/temp_cur_img.png";
        document.getElementsByClassName("bg_img")[0].style.backgroundImage = 'url("/img/bg_img_snow.png")';
      }
      //눈 사진
      else if (weather === "Clouds"){
        document.getElementById("temp_cur_img").src = "/img/temp_cur_img.png";
        document.getElementsByClassName("bg_img")[0].style.backgroundImage = 'url("/img/bg_img_cloudy.png")';
      }
      // 날씨에 맞게 css 이미지 변경
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
      let weather_fut = [
        data.list[3].weather[0].main,
        data.list[4].weather[0].main,
        data.list[5].weather[0].main,
        data.list[6].weather[0].main,
        data.list[7].weather[0].main,
        data.list[8].weather[0].main,
      ];

      let hourly_temp1 = Math.floor(data.list[3].main.temp) + "°";
      let hourly_temp2 = Math.floor(data.list[4].main.temp) + "°";
      let hourly_temp3 = Math.floor(data.list[5].main.temp) + "°";
      let hourly_temp4 = Math.floor(data.list[6].main.temp) + "°";
      let hourly_temp5 = Math.floor(data.list[7].main.temp) + "°";
      let hourly_temp6 = Math.floor(data.list[8].main.temp) + "°";

      if (hourly_time1 < 12) {
        document.getElementById("hourly_time1").innerHTML =
          hourly_time1.slice(1.1) + " A.M.";
      } else if (hourly_time1 == 12) {
        document.getElementById("hourly_time1").innerHTML =
          hourly_time1 + " P.M.";
      } else {
        document.getElementById("hourly_time1").innerHTML =
          hourly_time1 - 12 + " P.M.";
      }
      if (hourly_time2 < 12) {
        document.getElementById("hourly_time2").innerHTML =
          hourly_time2.slice(1.1) + " A.M.";
      } else if (hourly_time2 == 12) {
        document.getElementById("hourly_time2").innerHTML =
          hourly_time2 + " P.M.";
      } else {
        document.getElementById("hourly_time2").innerHTML =
          hourly_time2 - 12 + " P.M.";
      }
      if (hourly_time3 < 12) {
        document.getElementById("hourly_time3").innerHTML =
          hourly_time3.slice(1.1) + " A.M.";
      } else if (hourly_time3 == 12) {
        document.getElementById("hourly_time3").innerHTML =
          hourly_time3 + " P.M.";
      } else {
        document.getElementById("hourly_time3").innerHTML =
          hourly_time3 - 12 + " P.M.";
      }
      if (hourly_time4 < 12) {
        document.getElementById("hourly_time4").innerHTML =
          hourly_time4.slice(1.1) + " A.M.";
      } else if (hourly_time4 == 12) {
        document.getElementById("hourly_time4").innerHTML =
          hourly_time4 + " P.M.";
      } else {
        document.getElementById("hourly_time4").innerHTML =
          hourly_time4 - 12 + " P.M.";
      }
      if (hourly_time5 < 12) {
        document.getElementById("hourly_time5").innerHTML =
          hourly_time5.slice(1.1) + " A.M.";
      } else if (hourly_time5 == 12) {
        document.getElementById("hourly_time5").innerHTML =
          hourly_time5 + " P.M.";
      } else {
        document.getElementById("hourly_time5").innerHTML =
          hourly_time5 - 12 + " P.M.";
      }
      if (hourly_time6 < 12) {
        document.getElementById("hourly_time6").innerHTML =
          hourly_time6.slice(1.1) + " A.M.";
      } else if (hourly_time6 == 12) {
        document.getElementById("hourly_time6").innerHTML =
          hourly_time6 + " P.M.";
      } else {
        document.getElementById("hourly_time6").innerHTML =
          hourly_time6 - 12 + " P.M.";
      }

      document.getElementById("hourly_temp1").innerHTML = hourly_temp1;
      document.getElementById("hourly_temp2").innerHTML = hourly_temp2;
      document.getElementById("hourly_temp3").innerHTML = hourly_temp3;
      document.getElementById("hourly_temp4").innerHTML = hourly_temp4;
      document.getElementById("hourly_temp5").innerHTML = hourly_temp5;
      document.getElementById("hourly_temp6").innerHTML = hourly_temp6;

      for (let i = 0; i < 6; i++) {
        if (weather_fut[i] === "Clear")
          document.getElementById("temp_fut" + i + "_img").src =
            "/img/temp_cur_img.png";
        //맑음 사진
        else if (weather_fut[i] === "Rain")
          document.getElementById("temp_fut" + i + "_img").src =
            "/img/temp_cur_img.png";
        //비 사진
        else if (weather_fut[i] === "Snow")
          document.getElementById("temp_fut" + i + "_img").src =
            "/img/temp_cur_img.png";
        //눈 사진
        else if (weather_fut[i] === "Clouds")
          document.getElementById("temp_fut" + i + "_img").src =
            "/img/temp_cur_img.png";
      } // 3시간후 날씨에 맞게 css 이미지 변경
    });
}

$(function () {
  $(".menu").hover(
    function () {
      //mouseover
      $(this).attr("src", "/img/Clear.png");
    },
    function () {
      //mouseout
      $(this).attr("src", "/img/Hamburger.png");
    }
  );

  $(".close-area").hover(
    function () {
      //mouseover
      $(this).attr("src", "/img/Clear_hover.png");
    },
    function () {
      //mouseout
      $(this).attr("src", "/img/Clear.png");
    }
  );
});
