function radixSort(arr) {
    //기수정렬을 내나름대로 구해봣는데, 길이가너무긴 배열이면 시간복잡도때문에 안된다 .. 하 열심히짯는데 어떻게 시간을줄일지는 생각해봐야겟구만
    let placeValue = 1;
    let result = [];
    let maxArr = String(Math.max.apply(null,arr)).split('') //배열의 최댓값을 구해서 각자리수를 배열에담음
    for(let i=0; i<maxArr.length; i++){
      if(i === 0) maxArr[i] = 1
      else maxArr[i] = 0
    } //자릿수만구하면 되니 첫번째인덱스를1 나머지는 0으로하고 join후 숫자로바꾸면 그게 최대자리수가나옴(100의자리 1000의자리)
    let maxPlaceValue = Number(maxArr.join(''))//위의 결과물

    while(placeValue<=maxPlaceValue){
      let testArr = new Array(10).fill([])// 각자릿수에 해당하는값을 넣어줄 배열을만들고 (각자리수의 값은 중복일수있으니 2차원배열로 만든다)
      if(!result.length){
        for(let key of arr){
          let place = parseInt(key/placeValue)%10 //place는 각 자리값인데 자리값이 testArr의 index와 같은곳에 넣어주면 되겟지?
          testArr[place] = testArr[place].concat(key) //넣어준모습 -> Push는 하면안된다 !
        }
      }
      else{
        result = result.flat(); //그다음 2번째일때는 1의자릿수가 처음으로 정렬되고 그 정렬된 다음 배열을 기준으로 해야하니(result를 기준으로)
        for(let key of result){
            let place = parseInt(key/placeValue)%10 //자리수구해주고
            testArr[place] = testArr[place].concat(key) //위와동일
        }
      }
        let copy = JSON.parse(JSON.stringify(testArr)) //카피한 어레이를 result로 만들고 (혹시나 얕은복사때문에 문제생길까봐)
        result = copy
        placeValue = placeValue * 10
        /*1의자리부터 최대자리까지 돌면서 정렬해야하니. 각 자리를 돌면서 정렬한 배열을 담아주고 그걸 기준으로 다시
        돌아주는 느낌. 1의자리 다돌앗으니 그다음 10의자라수 확인 이느낌*/
    }
    return result.flat()
  }
  