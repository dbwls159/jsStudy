   //함수 calc()선언과 구현을 하고 있다.
   function calc(){
    var currentYear=2022; //올해 년도 변수 currentYear 저장
    //사용자로부터 입력 받은 값을 변수 brithYear에 저장함.
    var brithYear =prompt("태어난 연도: ","YYYY");

    //변수 age를 0으로 초기화
    var age =0;
    
    //실제 나이르 구하기 위한 코드 
    age = currentYear - brithYear + 1 ;

    //document는 현재 웹 브러우저의 페이지를 의미, 
    //querySelector()는 id가 result인 웹요서div를 의미,
    //innerHTML은 대입한값으로 html문서에 대체 하시오.
    document.querySelector("#result").innerHTML=
        "당신의 나이: "+age+"세"; 
}