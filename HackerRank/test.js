console.log("text.js");

async function getCapitalCity(country) {
  fetch(`https://jsonmock.hackerrank.com/api/countries?name=${country}`)
    .then((response) => (response = response.json()))
    .then((data) => {
      if (data.data.length == 0) console.log(-1);
      console.log("Capital city is: ", data.data[0].capital);

      console.log(data.data[0]);
      console.log(data.data[0].capital);
    })
    .catch((err) => {
      console.log("err", err);
    });
}

getCapitalCity("ethiopia");
