const quotes = [
    {
        quote: "신은 주사위를 던지지 않는다",
        author: "아인슈타인"
    },
    {
        quote: "상상력은 지식보다 더 중요하다. 지식에는 한계가 있지만, 상상력은 세상의 모든 것을 포괄한다",
        author: "아인슈타인"
    },
    {
        quote: "당신의 삶을 사는 데는 단 두 가지 방법이 있다. 하나는 아무것도 기적이 아닌 것처럼 사는 것이고, 다른 하나는 모든 것이 기적인 것처럼 사는 것이다",
        author: "아인슈타인"
    },
    {
        quote: "자신의 운명을 설계하는 것은 바로 나 자신이다",
        author: "아인슈타인"
    },
    {
        quote: "중요한 것은 질문을 멈추지 않는 것이다. 호기심은 존재 자체만으로도 그 이유가 있다",
        author: "아인슈타인"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); // 자식 선택자


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.textContent = `오늘의 명언: ${todaysQuote.quote}`;
author.textContent = `BY ${todaysQuote.author}`;
