
var add_button = document.querySelector("#add");

var memo_box = document.querySelector("#memo_box");
var map = new Map();
var theDate = new Date();
var month = [
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

function update(){
  memo_box.innerHTML = '';
  map.clear();
  for(let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    map.set(key, value);
  }
  const temp_map = [...map].sort().reverse();
  for (const [key, val] of temp_map) {
    let stoarr= key.split(' ');
    let m = month[stoarr[0] - 1];
    let date = ' '+ stoarr[1];

    let dummy = document.createElement("div");
    let variable = `` +
      `<label class="memo_label">` +
      `    <input class="memo_checkbox" type="checkbox" name="" value="">` +
      `    <div class="flip_card">` +
      `        <div class="front memo_date">` +
      `            <button class="btn_delete" type="button" name="${key}" onclick='OnClickRemoveButton(this)'><img src="/img/Clear.png" alt=""></button>` +
      `            <div class="wow" style="padding: 10px;">` +
      `                <h3 id="date">${month + date}</h3>` +
      `            </div>` +
      `        </div>` +
      `        <div class="back memo_data">` +
      `            <p id="userText">${val}</p>` +
      `        </div>` +
      `    </div>` +
      `</label>` +
      ``;
      dummy.innerHTML = variable;
      memo_box.appendChild(dummy);
  }
}

window.onload = function() {
  update();
}

add_button?.addEventListener("click", () => {
  // 1. Read the text in #task-input.
  let input = document.querySelector("#memoInput");
  let value = input.value;
  input.value = '';
  if(value.length <= 3){
    alert("You must enter at least 3 characters.")
    return;
  }


  let key1 = `${theDate.getMonth() + 1}`  // today's date variable
  if(key1 < 10)
    key1 = '0' + key1;
  let key2 = `${theDate.getDate()}`;   // testable variable
  if(key2 < 10)
    key2 = '0' + key2;
  let key = key1 + ' ' + key2;
  let stoarr= key.split(' ');
  let month = month[stoarr[0] - 1];
  let date = ' '+ stoarr[1];
  if(map.has(key)){
    if (confirm(`A memo is already written on ${month + date}.\nDo you want to overwrite it?`))
      localStorage.removeItem(key);
    else
      return;
  }
  localStorage.setItem(key, value);

  update();
});

function OnClickRemoveButton(ths){
  let key = ths.getAttribute('name');;
  localStorage.removeItem(key);

  update();
}
