const form = document.getElementById("form");
const studentInput = document.getElementById("student");
const subjectInput = document.getElementById("subject");
const gradeInput = document.getElementById("grade");
const tableBody = document.getElementById("tableBody");
const averageEl = document.getElementById("average");
const countEl = document.getElementById("count");
const clearBtn = document.getElementById("clear");

let data = JSON.parse(localStorage.getItem("grades")) || [];

function render(){
  tableBody.innerHTML = "";
  let total = 0;
  data.forEach((item,index)=>{
    total += parseFloat(item.grade);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.student}</td>
      <td>${item.subject}</td>
      <td class="grade">${item.grade}</td>
      <td class="actions">
        <button onclick="editRow(${index})">✏️</button>
        <button onclick="deleteRow(${index})">🗑️</button>
      </td>`;
    tableBody.appendChild(row);
  });
  countEl.textContent = data.length;
  averageEl.textContent = data.length ? (total/data.length).toFixed(2) : 0;
  localStorage.setItem("grades",JSON.stringify(data));
}

form.addEventListener("submit", e=>{
  e.preventDefault();
  const student = studentInput.value.trim();
  const subject = subjectInput.value.trim();
  const grade = gradeInput.value.trim();
  if(student && subject && grade){
    data.push({student,subject,grade});
    form.reset();
    render();
  }
});

function deleteRow(i){
  data.splice(i,1);
  render();
}

function editRow(i){
  const item = data[i];
  studentInput.value = item.student;
  subjectInput.value = item.subject;
  gradeInput.value = item.grade;
  data.splice(i,1);
  render();
}

clearBtn.addEventListener("click",()=>{
  if(confirm("Deseja limpar todos os registros?")){
    data=[];
    render();
  }
});

render();
