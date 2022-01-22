function testfun(){
const date = new Date(Date.now());
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let x = axios.post('https://prod-21.eastus.logic.azure.com:443/workflows/2f223ecad61d4b9481e9cf79e7dac669/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=MX5693MOOvraKjgG28rLF7yv4TAAGIOh3Q7qqWfwJXc'), {
    id: self.crypto.randomUUID(),
    month: months[date.getMonth()],
    day: date.getDate(),
    year: date.getFullYear(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  })
  .then(function (response) {
    console.log(response);
    return response.data
  });}

console.log(x);
