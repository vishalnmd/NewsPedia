let api = "https://newsdata.io/api/1/latest?apikey=pub_49020b2426982e3baff9174122d14619df4f1&q=pizza";

let res;

let data = fetch(api).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    res = data;
})