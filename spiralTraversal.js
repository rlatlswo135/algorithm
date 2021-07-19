let spiralTraversal = function (matrix) { //2차원 배열의 아이템을 나선형으로 돈 결과를 리턴
/*
let output = spiralTraversal(matrix);
console.log(output);  --> 'ABCFIHGDE'

matrix = [
  ['T', 'y', 'r', 'i'],
  ['i', 's', 't', 'o'],
  ['n', 'r', 'e', 'n'],
  ['n', 'a', 'L', ' '],
];
output = spiralTraversal(matrix);
console.log(output); --> 'Tyrion Lannister'
*/
    let result = []; //결과를 담을 배열
    let index = 0; //matrix의 index
    let pointer = 0; //현재 item을 가르키는 pointer
    let counter =0; //마지막 0을 제거하기위해 쓸  counter 변수
    while( !( result.length !==0 && pointer === 0 && index === 0) ){ //겉에 부분을 다돌고 돌아왓을때 종료(result 길이는 0이 아니겟지?)
      if(matrix.length ===0) return []; //재귀 종료문
      if(index === 0){//첫시작 = matrix[0]의 첫번째 item부터  result에담아줌
        result.push(matrix[index][pointer])
        matrix[index][pointer] = 0
        if(pointer === matrix[index].length - 1) index ++;
        else  pointer ++;
      }
      else if(index > 0 && index !== matrix.length -1){//첫시작 , 끝 제외 중간 = 각 index의 끝부분 담아줌
        if(index > matrix.length - 1)break; //길이를 넘는 Index조회하면 오류나기때문에 그걸 방지위해
        result.push(matrix[index][pointer])
        matrix[index][pointer] = 0
        if(pointer === 0) index --; //끝부분 index를 끝item부터 담으면 pointer는 자연스레 0을 향하고 그때부터는 각 index의 첫부분을 담아줌(순서중요)
        else index ++;
      }
      else{ // 끝부분 => matrix마지막 Index의 끝item부터 result에 담아줌
        result.push(matrix[index][pointer])
        matrix[index][pointer] = 0;
        if(pointer === 0) index --;
        else pointer --;
      }
    }
    while(counter < matrix.length){ //matrix의 0을 제외하는 반복문
      if(matrix[counter].every(item => item ===0)){
        matrix.splice(counter,1) //아이템 배열전체가 0이면통째로 제거
      }else{
        if(matrix[counter].includes(0)){ // 아이템  배열전체가 0은 아니지만 0이 섞여잇으면 제거
          matrix[counter].forEach( (item,idx) => {
            if(item ===0) matrix[counter].splice(idx,1)
          })
        }
        else counter ++;
        //다제거햇으면 그때서야 index ++(counter)-> for of , forEach를 써봣지만 splice썻을때 index가 밀려서 검사하지 않는부분이 생김  그래서 while써줫음
      }
    }
    return result.concat(spiralTraversal(matrix)).join('')  //결국 겉에한바퀴 그다음안쪽한바퀴 그다음안쪽한바퀴.. 반복이기때문에 재귀로 concat후 문자열 출력
  };
  