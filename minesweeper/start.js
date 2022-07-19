window.onload = function(){

  let help = document.getElementById('test');
  console.log("help");

  let table = document.getElementById('gameBoard');

  // 지뢰가 할당될 임의 좌표를 5개 지정한다.

  for(let i = 0 ; i < 8 ; i++){
    // 1. 행을 만든다
    // 2. 열을 만든다
    // 3. 열 안에 이벤트 등록된 버튼을 넣는다
    let row = document.createElement('tr');
    for(let j = 0 ; j < 8 ; j++){
      col = document.createElement('td');
      col.type = 'td';
      col.innerHTML = '<button id="btn_"' + i + '_' + j + ' onclick="pushButton(this)"><img src="./img/carrot.png" height="50" width="50"></button>';
      col.className = 'td_' + i + '_' + j;

      row.append(col);
    }

    table.append(row);
  }
};
