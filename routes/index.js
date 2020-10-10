const { json } = require('express');
var express = require('express');
const { get } = require('request-promise');
var router = express.Router();
var request=require('request-promise');
/* GET home page. */
async function getdatadiv3(){
  url="https://codeforces.com/api/contest.list?gym=false";
  body=await request(url);
  body_json=JSON.parse(body);
  data=[];
 for(i=0;i<body_json.result.length;i++){
 nm=body_json.result[i].name;
 idy=body_json.result[i].id;
 n = nm.search(/Div. 3/i);
 if(n!=-1)
 data.push({
   name:nm,
   id:idy,
 });
 }
 return data.reverse();
}
async function getdatadiv2(){
  url="https://codeforces.com/api/contest.list?gym=false";
  body=await request(url);
  body_json=JSON.parse(body);
  data=[];
 for(i=0;i<body_json.result.length;i++){
 nm=body_json.result[i].name;
 idy=body_json.result[i].id;
 n1 = nm.search(/Div. 2/i);
 n2 = nm.search(/Educational Codeforces/i);
 n3=nm.search(/Codeforces Round/i);
 if(n1!=-1 && n3!=-1 && n2==-1)
 data.push({
   name:nm,
   id:idy,
 });
 }
 return data.reverse();
}
async function getdatadiv1(){
  url="https://codeforces.com/api/contest.list?gym=false";
  body=await request(url);
  body_json=JSON.parse(body);
  data=[];
 for(i=0;i<body_json.result.length;i++){
 nm=body_json.result[i].name;
 idy=body_json.result[i].id;
 n1 = nm.search(/Div. 1/i);
 n2 = nm.search(/Educational Codeforces/i);
 n3=nm.search(/Codeforces Round/i);
 if(n1!=-1 && n3!=-1 && n2==-1)
 data.push({
   name:nm,
   id:idy,
 });
 }
 return data.reverse();
}
async function getedu(){
  url="https://codeforces.com/api/contest.list?gym=false";
  body=await request(url);
  body_json=JSON.parse(body);
  data=[];
 for(i=0;i<body_json.result.length;i++){
 nm=body_json.result[i].name;
 idy=body_json.result[i].id;
 n2 = nm.search(/Educational Codeforces/i);
 if(n2!=-1)
 data.push({
   name:nm,
   id:idy,
 });
 }
 return data.reverse();
}
//getdatadiv3();
//getdatadiv2();
//getedu();
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/Div1', function(req, res, next) {
  getdatadiv1().then(function(result){
  console.log(result);
  res.render('Div1',{res:result,title:"Div 1"});
  });
});
router.get('/Div2', function(req, res, next) {
  getdatadiv2().then(function(result){
  console.log(result);
  res.render('Div1',{res:result,title:"Div 2"});
  });
});
router.get('/Div3', function(req, res, next) {
  getdatadiv3().then(function(result){
  console.log(result);
  res.render('Div1',{res:result,title:"Div 3"});
  });
});
router.get('/Edu', function(req, res, next) {
  getedu().then(function(result){
  console.log(result);
  res.render('Div1',{res:result,title:"Educational"});
  });
});
module.exports = router;
