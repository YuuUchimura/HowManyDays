// let date;
// let hours;
// let min;
// let sec;
// const body = document.querySelector("body");
// const timer = () => {
//     born = moment('2122-06-18', 'YYYY-MM-DD').diff(moment());
//     date = moment('2122-06-18', 'YYYY-MM-DD').diff(moment(), "day");
//     hours = Math.floor(born / 1000 / 60 / 60) % 24;
//     min = Math.floor(born / 1000 / 60) % 60;
//     sec = Math.floor(born / 1000) % 60;
//     text.textContent = `ドラえもんが誕生するまであと${date}日${hours}時間${min}分${sec}秒`;
// }

// let text = document.createElement("p");
// timer();
// body.appendChild(text);
// setInterval(timer, 1000);


// ここからチャレンジ問題

const search = document.getElementById("dateSearch");
search.addEventListener("click", () => {
    timer();
    start();
});

const id = document.getElementById("diffTime");

const timer = () => {
    const dateSet = document.getElementById("dateSet").value;
    const born = moment(dateSet, 'YYYY-MM-DD').diff(moment());
    const date = moment(dateSet, 'YYYY-MM-DD').diff(moment(), "day");
    const hours = Math.floor(born / 1000 / 60 / 60) % 24;
    const min = Math.floor(born / 1000 / 60) % 60;
    const sec = Math.floor(born / 1000) % 60;
    id.textContent = `${dateSet}まで後${date}日${hours}時間${min}分${sec}秒`;
};
const start = () => {
    setInterval(timer, 1000);
};