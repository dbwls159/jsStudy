//자바 스크립트 = 인터프리터 언어 
//인터프리터(interpreter) 프로그래밍 언어의 소스코드를 바로 실행하는 환경 
//명령형, 함수형, 프로토 타입 기반 객체지향 프로그래밍을 지원하는 멀티패러다임 프로그래밍 언어

// 변수 variable 값을 저장하고 참초하기 위해 사용,
// 한번쓰고 버리는 값이 아닌 유지 할수있는 값을 변수에 담아 사용 
//변수는 위치 저장소 메모리 주소접근을 위한 식별자 

var x ; // 변수 선언
x = 6 ; //정수 값 할당 


var str = 'hello world' // 변수 선언, 문자열 리터럴 값 할당

// js는 동적으로 변수의 타입이 결정된다.
// js의 모든 값은 데이터 타입을 갖는다. 7가지 타입 있음
// 원시타입(number,string,boolean,null,undefined,symbol)
//객체타입(object)

var num1 = 1001; 
var num2 = 10.52;

var string1='hello';
var string2="World";

var bool = true;

var foo= null;

var obj={name:'Lee',gender:'male'};

var array=[1,2,3];

var foo=function() {};

//연산자는 하나이상의 표현식을 대상으로 산술,할당,비교,논리,타입 연산등을 수행해 하나의 값을 만듬
// 연산의 대상을 피연산자라 한다.

var area=5*4;
var str='My name is' +'An'; //문자열 연결
var color = 'red' //할당 연산자
var foo = 3>5; //비교
var bar =(5>3) && (2<4); //논리
var type= typeof 'Hi';
var today =new Data(); //인스턴스 생성 연산자
