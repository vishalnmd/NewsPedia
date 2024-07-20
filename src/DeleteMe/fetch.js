let api = "https://newsapi.org/v2/everything?q=cricket&from=2024-07-11&sortBy=popularity&apiKey=5f9ce4c720ea4daab0fe680193980b4f";

let apiKey = "5f9ce4c720ea4daab0fe680193980b4f";

let option = {
    method:"GET",
    apiKey:"5f9ce4c720ea4daab0fe680193980b4f",
    q:"android"
}

// let response = fetch(api,option);

let globData;

// let data = response.then((json)=>{
//     return json.json();
// }).then((data)=>{
//     globData = data;
//     console.log(globData);
// });

let fetchData = async ()=>{
    let data = await fetch(api,option);
    console.log(data);

    let jdata = await data.json();
    console.log(jdata);

    globData = jdata.articles;
}

fetchData();
console.log(globData);
