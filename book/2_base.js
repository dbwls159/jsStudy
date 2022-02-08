// 키워드 : 수행할 동작 규정 ex) var 키워드는 새로운 변수 생성 지시 

var x= 5+6; //변수 선언

function foo (arg) { //함수 선언

    return ++ arg; //함수종료 및 값의 반환
}

var i = 0 ;

//반복문 
while (1) {

    if(i>5){
        //반복문 탈출
        break;
    }
    console.log(i);
    i++;
}

//문 : 리터럴, 연산자, 표현식, 키워드 등 구성, ; 으로 끝나야함
//문은 코드 블록 {...} 그룹화 할수 있음.함께 실행되어야하는 문을 정의하기 위함.
// 조건문,반복문의 사용으로 제어 = 흐름 제어 
function myFunction(x,y){
    return x+y;
}

if (x>0){
    //something
}

for (var i =0; i<10; i++){
    //something
}
