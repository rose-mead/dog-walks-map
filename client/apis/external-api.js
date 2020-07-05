// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = 'https://www.doc.govt.nz/parks-and-recreation/things-to-do/walking-and-tramping/?Options=DogAccess;true&region-id=3004000'


// export function getData() {
//     return axios.get(url) 
//     .then(response => {
//         console.log(response.data)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }
var request = require('request');
var cheerio = require('cheerio');


// request('https://www.doc.govt.nz/parks-and-recreation/things-to-do/walking-and-tramping/?Options=DogAccess;true&region-id=3004000#activitypanel', function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     console.log(html);
//   }
// });

request('https://www.doc.govt.nz/parks-and-recreation/things-to-do/walking-and-tramping/?Options=DogAccess;true&region-id=3004000#activitypanel', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    // console.log(html);
    var $ = cheerio.load(html);

    let hobbies = [];

    $('h3.related-page-heading').each(function (i, e) {
        hobbies[i] = $(this).text();
    });

    console.log(hobbies);
    // console.log($("div.profile-location"))
    // // console.log($('div.profile-location'))
    // $('div.profile-location').each(function(i, element){
    // //   var a = $(this);
    //   console.log(element);
    // });
  }
});

