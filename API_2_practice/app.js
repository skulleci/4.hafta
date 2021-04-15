const inputValue = document.querySelector(".inputValue");
const submitButton = document.querySelector(".submitButton");
const names = document.querySelector(".name");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const icon = document.querySelector('.icon');

window.addEventListener('load', () => {
    const getCitys = () => {
    return axios.get('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=ce27b58ce285f0299f0de1cb104d4c9c');
    }
    submitButton.addEventListener('click', async () => {
        const { data } = await getCitys();
        console.log(data);
        names.innerHTML = data.name;
        temp.innerHTML = Math.floor(`${data.main.temp}`- 273.15) +" " + "C";
        desc.innerHTML = data.weather[0].description;
        icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    });
});