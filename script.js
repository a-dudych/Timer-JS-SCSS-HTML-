const setClock = () => {
    const today = new Date();
    const { hours, minutes, seconds, period } = formatTime(today);

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;

    document.querySelector(".date").innerHTML = formatDate(today)
}

const formatTime = (todayDate) => {
    let hours = todayDate.getHours();
    let minutes = todayDate.getMinutes();
    let seconds = todayDate.getSeconds();

    let period = hours >= 12 ? "PM" : "AM";
    console.log(period)

    hours = hours > 12 ? hours - 12 : hours;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return { hours, minutes, seconds, period }
}

const formatDate = (today) => {
    const date = today.getDate();
    const year = today.getFullYear();
    const day = today.toLocaleString("default", {weekday: "long"})
    const month = today.toLocaleString("default", {month: "short"});

    return `${date} ${month} ${day}, ${year}`
}

setClock()
setInterval(setClock, 1000)