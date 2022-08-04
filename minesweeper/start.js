var board;
var numOfCarrot;

window.onload = function(){

  let help = document.getElementById('test');
  console.log("help");

};

function initBoard(){

  let rowSize = document.getElementById("rowSize").value;
  let colSize = document.getElementById("colSize").value;
  let table = document.getElementById('gameBoard');

  cleanTable(table);

  if(!isPreferBoardSize(rowSize, colSize)){
    return;
  }

  createTable(table, rowSize, colSize);

  setPositionOfCarrot(rowSize, colSize);
};

function cleanTable(table){
  if(table.hasChildNodes()){
    console.log(table.childElementCount);
    while(table.hasChildNodes()){
      table.removeChild(table.firstChild);
    }
  }
};

function isPreferBoardSize(rowSize, colSize){
  if(rowSize > 50){
    alert("가로 사이즈가 너무 큽니다!");
    return false;
  }

  if(rowSize < 5){
    alert("가로 사이즈가 너무 작습니다!");
    return false;
  }

  if(colSize > 50){
    alert("세로 사이즈가 너무 큽니다!");
    return false;
  }

  if(colSize < 5){
    alert("세로 사이즈가 너무 작습니다!");
    return false;
  }
  return true;
};

function createTable(table, rowSize, colSize){
  for(let i = 0 ; i < rowSize ; i++){
    // 1. 행을 만든다
    // 2. 열을 만든다
    // 3. 열 안에 이벤트 등록된 버튼을 넣는다
    let row = document.createElement('tr');
    row.style = 'border: 1px solid #000000;';
    row.setAttribute("id", "tr_" + i);
    for(let j = 0 ; j < colSize ; j++){
      let col = document.createElement('td');
      col.type = 'td';
      col.style = 'width:50px; height:50px; border: 1px solid #000000;';
      col.onclick = function(){
        pushButton(i, j);
      };
      //col.innerHTML = '<button id="btn_' + i + '_' + j + '" style="width:inherit; height:inherit;" onclick="pushButton(' + i + ',' + j + ')"><img id="img_' + i + '_' + j + '" src="./img/carrot.png" style="width: inherit; height: inherit; display:none"/></button>';
      col.innerHTML = '<img id="img_' + i + '_' + j + '" src="./img/carrot.png" style="width: inherit; height: inherit; display:none;" />';
      col.className = 'td_' + i + '_' + j;

      row.append(col);
    }

    table.append(row);
  }
};

function setPositionOfCarrot(rowSize, colSize){
  board = new Array(rowSize);

  // 지뢰 개수 선정 룰 : 5의 배수당 한 개씩 증가
  numOfCarrot = (rowSize * colSize) / 5;

  for(let i = 0 ; i < colSize ; i++){
    board[i] = new Array(colSize);
  }

  for(let i = 0 ; i < rowSize ; i++){
    for(let j = 0 ; j < colSize ; j++){
      board[i][j] = false;
    }
  }

  for(let i = 0 ; i < numOfCarrot ; i++){
    let x = Math.floor(Math.random() * 10) % colSize;
    let y = Math.floor(Math.random() * 10) % rowSize;

    if(board[x][y]){
      i--;
      continue;
    }
    board[x][y] = true;
    console.log("x : " + x + ",y : " + y);
  }

};

function pushButton(x, y){
  let img = document.getElementById("img_" + x + "_" + y);
  console.log("img_" + x + "_" + y);

  img.style.display = "block";
};
