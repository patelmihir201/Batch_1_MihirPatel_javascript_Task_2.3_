var table = document.getElementById("StudentData");

function validation() {

  var isDataValid = true;

  const onlynum = /^[0-9]+/;
  const inputs = document.querySelectorAll("#StudentData input");

  inputs.forEach(function (input) {

    if (input.value === "") {
      input.nextElementSibling.textContent = "please enter input";
      input.nextElementSibling.style.color = "red";
      isDataValid = false;

    } else {
      // input.nextElementSibling ?
       input.nextElementSibling.textContent = ""
        // : null;
      //isDataValid = true;
    }
  });

  const numInputs = document.querySelectorAll("#StudentData input[type='number']");

  numInputs.forEach(function (input) {
    if (!(input.value.match(onlynum))) {
      input.nextElementSibling.textContent = "only digit allowed";
      input.nextElementSibling.style.color = "red";
      isDataValid = false;
    } else if ((parseInt(input.value) < 0 || parseInt(input.value) > 100)) {
      input.nextElementSibling.textContent = "Marks should be between 0 to 100";
      input.nextElementSibling.style.color = "red";
      isDataValid = false;
    } else {
    input.nextElementSibling.textContent = "" ;
      // isDataValid = true;
    }
  });

  return isDataValid

}


document.getElementById('submit1').addEventListener('click', function () {
  if (validation()) {
    //console.log(validation())
    SubmitData();
    per_Data();

  }

})




// 

// var id = 6;
function addNewData() {


  var row = table.insertRow(-1);
  var No = row.insertCell(0);
  var Stu_Name = row.insertCell(1);
  var Subject = row.insertCell(2);
  var Marks = row.insertCell(3);
  var Status = row.insertCell(4);
  var Action = row.insertCell(5);

  No.setAttribute("data-label", "No")
  Stu_Name.setAttribute("data-label", "Name")
  Subject.setAttribute("data-label", "Subject")
  Marks.setAttribute("data-label", "Marks")
  Status.setAttribute("data-label", "Status")

  for (let i = 1; i < table.rows.length; i++) {

    No.innerHTML = i;

  }
  // No.innerHTML = id++;
  Stu_Name.innerHTML = "<input type='text' id='stu_name' pattern='[a-z A-Z]+' title='Take only Alphabets !' maxlength = '12' placeholder='Enter a Name' onKeyPress='return ValidateAlpha(event);'><span></span>";
  Subject.innerHTML = "<input type='text' id='subject' pattern='[a-z A-Z]+'  title='Take only Alphabets !' maxlength = '12' placeholder='Enter a Subject' onKeyPress='return ValidateAlpha(event);'><span></span>";
  Marks.innerHTML = "<input type='number' id='marks' pattern='[0-9]+'  onkeypress='Num()' min='0' max='100' placeholder='Enter a Marks' onkeypress='inpNum(event)' ><span></span>";
  Status.innerHTML = '<a class="btn btn-success btn1 me-1" id="Pass" onclick="passbtn(this)">Accept</a><a class="btn btn-danger btn2" onclick="failbtn(this)">Reject</a>';
  Action.innerHTML = '<button class="btn " type="button"  onclick="deleteData(this)"><span> <img src="image/remove.jpg" w-100 class="rounded-circle" alt=""> </span></button>';

  validation()


}







function SubmitData() {

  let result = document.getElementById("ResultData");
  result.innerHTML = ` <tr class="bg-info text-dark">
    <th >No</th>
    <th >Student Name</th>
    <th >Subject</th>
    <th>Marks</th>
    <th>Result</th>
    </tr> 
    `


  let stu_Name_arr = [];
  let Stu_Name = document.querySelectorAll("#stu_name");
  for (i = 0; i < Stu_Name.length; i++) {
    stu_Name_arr.push(Stu_Name[i].value);
  }

  let subject_arr = [];
  let Subject = document.querySelectorAll("#subject");
  for (i = 0; i < Subject.length; i++) {
    subject_arr.push(Subject[i].value);
  }

  let Marks_arr = [];
  let Marks = document.querySelectorAll("#marks");
  for (i = 0; i < Marks.length; i++) {
    Marks_arr.push(Marks[i].value);
    // let Marks_num= Marks_arr.map(Number);
    // console.log(Marks_num)
  }


  let tablerow = table.rows;

  for (i = 1; i < tablerow.length; i++) {
    if (tablerow[i].children[4].firstChild.classList.contains("Pass")) {

      let row = result.insertRow();

      let no_cell = row.insertCell(0);
      let name_cell = row.insertCell(1);
      let subject_cell = row.insertCell(2);
      let marks_cell = row.insertCell(3);
      let Status_cell = row.insertCell(4);

      no_cell.innerHTML = `<p class="counterCell"></p>`;
      name_cell.innerHTML = stu_Name_arr[i - 1];
      subject_cell.innerHTML = subject_arr[i - 1];
      marks_cell.innerHTML = Marks_arr[i - 1];




      if (Marks_arr[i - 1] < 33) {
        row.style.background = "red";
        Status_cell.innerHTML = "Fail";

        // if(document.querySelector(".btn2").addEventListener("click", function(){
        // }));
      }
      else if (Marks_arr[i - 1] > 33) {
        Status_cell.innerHTML = "Pass";

        // if(document.querySelector(".btn1").addEventListener("click", function(){
        // }));
      }
      else {
        Status_cell.innerHTML = "";

      }
    }

  }

  return false

}


function passbtn(e) {
  if (e.classList.contains("btn1")) {
    e.classList.add("Pass")
    e.nextElementSibling.classList.remove("Fail");
  }

}

function failbtn(e) {
  if (e.classList.contains("btn2")) {
    e.classList.add("Fail")
    e.previousElementSibling.classList.remove("Pass");

  }
}

function deleteData(Data) {

  let confirm1 = confirm("Are you sure you want to delete?");
  if (confirm1) {

    Data.parentNode.parentNode.remove();
    // id--;

    for (let i = 1; i < table.rows.length; i++) {

      table.rows[i].cells[0].innerHTML = i;

    }


  }
}






function per_Data() {
  var table2 = document.getElementById("StudentData");

  let table = document.getElementById("Result_per");
  table.innerHTML = ` <tr class="bg-info text-dark">
    <th >No</th>
    <th >Student Name</th>
    <th >Percentage</th>
    </tr> 
    `
  let stu_Name_arr = [];
  let Stu_Name = document.querySelectorAll("#stu_name");

  for (i = 0; i < Stu_Name.length; i++) {
    stu_Name_arr.push(Stu_Name[i].value);
  }

  let subject_arr = [];
  let Subject = document.querySelectorAll("#subject");
  for (i = 0; i < Subject.length; i++) {
    subject_arr.push(Subject[i].value);
  }

  let Marks_arr = [];
  let Marks = document.querySelectorAll("#marks");
  for (i = 0; i < Marks.length; i++) {
    Marks_arr.push(Marks[i].value);
  }


  let StudentData = [];
  let tablerow = table2.rows;
  for (let index = 0; index < stu_Name_arr.length; index++) {
    if (tablerow[index + 1].children[4].firstChild.classList.contains("Pass")) {
      let object = { name: "", mark: "" }
      object.name = stu_Name_arr[index];
      object.mark = Number.parseInt(Marks_arr[index]);
      StudentData.push(object);
    }
  }



  const resp = StudentData.reduce((arr, ele) => {
    const reduce_dupp_stu = arr.find(x => x.name === ele.name);
    if (!reduce_dupp_stu) return arr.concat(ele);
    return (reduce_dupp_stu.mark += ele.mark, arr);
  }, []);

  // console.log(resp);
  const arr = stu_Name_arr;
  const counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  // console.log(counts);
  resp.forEach(display => {
    display.mark /= counts[display.name];
  });

  // console.log(resp);
  // let table = document.getdisplayById("Result_per");
  resp.forEach(display => {

    let row = table.insertRow(table.length);
    cell0 = row.insertCell(0).classList.add("counterCell");
    cell1 = row.insertCell(1).innerHTML = display.name;
    cell2 = row.insertCell(2).innerHTML = display.mark + "%";

  });
  return false

}





function Search() {
  const myInput = document.querySelector("#myInput");
  myInput.addEventListener("keyup", function() {
    const value = this.value.toLowerCase();
    const tableRows = document.querySelectorAll("#ResultData tr");
    tableRows.forEach(function(row) {
      const text = row.textContent.toLowerCase();
      const shouldShow = text.indexOf(value) > -1;
      row.style.display = shouldShow ? "" : "none";
    });
  });

  // var input, filter, table, tr, name, subject, i;
  // input = document.getElementById("myInput");
  // filter = input.value.toUpperCase();
  // table = document.getElementById("ResultData");
  // tr = table.getElementsByTagName("tr");
  // for (i = 0; i < tr.length; i++) {
  //   name = tr[i].getElementsByTagName("td")[1];
  //   subject = tr[i].getElementsByTagName("td")[2];


  //   if (name || subject) {
  //     name = name.innerText;
  //     subject = subject.innerText;

  //     if ((name.toUpperCase().startsWith(filter)) || (subject.toUpperCase().startsWith(filter))) {
  //       tr[i].style.display = "";

  //     } else {
  //       tr[i].style.display = "none";
  //     }
  //   }
  // }
}

function sortTable(n) {
  var table, rows, change_status, i, x, y, Sort_table, dir, switchcount = 0;
  table = document.getElementById("ResultData");
  change_status = true;

  dir = "asc";

  while (change_status) {

    change_status = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {

      Sort_table = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        if (x.innerHTML.toUpperCase() > y.innerHTML.toUpperCase()) {

          Sort_table = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toUpperCase() < y.innerHTML.toUpperCase()) {

          Sort_table = true;
          break;
        }
      }

    }
    if (Sort_table) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      change_status = true;

      switchcount++;
    } else {

      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        change_status = true;
      }
    }
  }
  // return false;
}




function Num() {

  var mark_ = document.querySelectorAll('#marks');

  var invalidChars = [
    "-",
    "+",
    "e",
  ];
  mark_.forEach(input => {

    input.addEventListener("input", function () {
      this.value = this.value.replace(/[e\+\-]/gi, "");
    });

    input.addEventListener("keydown", function (e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

  });


  var mark_ = document.querySelectorAll('#marks');
  mark_.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value < 0 || input.value > 100) {
        // alert("Marks - Must between 0-100 !");
        // input.value="";
        input.nextElementSibling.innerHTML = "**Enter a Marks Between 0-100";
        input.nextElementSibling.style.color = "red";
        return false
      }
      return false
    })
  })
}


function ValidateAlpha(evt) {
  var keyCode = (evt.which) ? evt.which : evt.keyCode
  if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)

    return false;
  return true;
}