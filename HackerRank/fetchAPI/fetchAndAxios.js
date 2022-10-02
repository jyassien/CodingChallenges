const axios = require("axios");


// fetch: is a web API, to fetch data from a server.
// async function getCapitalCity(country) {
//   fetch(`https://jsonmock.hackerrank.com/api/countries?name=${country}`)
//     .then((response) => (response = response.json()))
//     .then((data) => {
//       if (data.data.length == 0) console.log(-1);
//       console.log("Capital city is: ", data.data[0].capital);

//       console.log(data.data[0]);
//       console.log(data.data[0].capital);
//     })
//     .catch((err) => {
//       console.log("err", err);
//     });
// }

async function getCapitalCity2(country) {
  let response = await axios(
    `https://jsonmock.hackerrank.com/api/countries?name=${country}`
  );
  let data = await response.data;
  if (data.data.length == 0) return -1; // If the given country does not exist.
  console.log(data.data[0].capital);

  //   return data.data[0].capital;
}

// getCapitalCity("Ethiopia");
getCapitalCity2("ethiopia");
