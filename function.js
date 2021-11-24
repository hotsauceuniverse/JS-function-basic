//함수
function sum(x, y) {
  return x + y //return을 쓰면 그 자리에서 종료된다는 의미도 있다.
}

const a = sum(1, 3)
const b = sum(4, 12)

console.log(a)
console.log(b)
console.log(a + b)


function note() {
  console.log(arguments)
  return arguments[0] + arguments[1]
}

console.log(note(7, 3)) //배열형태로 들어감


//화살표 함수
//() => {} vs function () {}

const double = function(x) {
  return x * 2
}
console.log('double: ', double(7))


const doubleArrow = x => x * 2 //단순할 때 return과 중괄호 축약가능
console.log('doubleArrow', doubleArrow(7))
// => 객체데이터는 소괄호로 묶기, 나머지는 중괄호로 묶기


//즉시실행함수 (IIFE)
const c = 7
function one () {
  console.log(c * 2)
}
one();

(function () {
  console.log(c * 2)
})();

(function () {
  console.log(c * 2)
}());


//호이스팅 = 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
const d = 8

three()

function three() {
  console.log(d * 2)
}


//타이머 함수
//setTimeout(함수, 시간) : 일정 시간 후 함수 실행
//setInterval(함수, 시간) : 시간 간격마다 함수 실행
//clearTimeout() : 설정된 Timeout 함수를 종료
//clearInterval() : 설정된 Interval 함수를 종료

const timer = setTimeout(() => {
  console.log('seyoung')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})

const time = setInterval(() => {
  console.log('Jangseyoung')
}, 3000)

const h2El = document.querySelector('h2')
h2El.addEventListener('click', () => {
  clearInterval(time)
})


//콜백 = 함수의 인수로 사용되는 함수
// setTimeout(함수, 시간) => 인수로 사용된 함수를 콜백
function timeout(callback) {
  setTimeout(() => {
    console.log('Hi~~~~!!!')
    callback()
  }, 3000)
}
timeout(() => {
  console.log('Done')
})
