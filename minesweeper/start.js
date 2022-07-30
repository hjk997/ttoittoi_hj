window.onload = function(){

  let help = document.getElementById('test');
  console.log("help");

};

function initTable(){

  let rowSize = document.getElementById("rowSize").value;
  let colSize = document.getElementById("colSize").value;
  let table = document.getElementById('gameBoard');

  if(table.hasChildNodes()){
    console.log(table.childElementCount);
    while(table.hasChildNodes()){
      table.removeChild(table.firstChild);
    }
  }

  if(rowSize < 5 || rowSize > 50){
    alert("가로 사이즈가 너무 큽니다!");
    return;
  }

  if(colSize < 5 || colSize > 50){
    alert("세로 사이즈가 너무 큽니다!");
    return;
  }

  for(let i = 0 ; i < rowSize ; i++){
    // 1. 행을 만든다
    // 2. 열을 만든다
    // 3. 열 안에 이벤트 등록된 버튼을 넣는다
    let row = document.createElement('tr');
    row.setAttribute("id", "tr_" + i);
    for(let j = 0 ; j < colSize ; j++){
      let col = document.createElement('td');
      col.type = 'td';
      col.innerHTML = '<button id="btn_"' + j + '_' + i + ' onclick="pushButton(this)"><img src="./img/carrot.png" height="50" width="50"></button>';
      col.className = 'td_' + j + '_' + i;

      row.append(col);
    }

    table.append(row);
  }
}

function pushButton(btn){

}
