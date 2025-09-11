/*
//here we start to learn mongodb basic concepts

Data Storage: aisa kuch jaha hum sare users ki info store kr skte hain

Types of DBS - SQL , NoSQL

NoSQL is not a database as its own its a concept.

SQL - data ko ek roop mein rkhna -> tables

NoSQL - ismein objs hote hain

example:- mongoDB is a actual database -> it stores data in the form of objs -> it is based on NoSQL theory.

{
  "name":"palak",
  "age":19
}

Backend has 2 servers - Application Server and Database Server

Application server -> handle routes and accept requests -> node js 

Data ke kaam ko chod ke baki sb Application server krta hai

if ise koi data ki need hoti hai toh yeh data database server se leta hai

database server -> mongodb

terminologies - collections, documents, schemas, keys, models

Collections -> jese apne pass A hai vo bda database hai and uske andr jo alg alg data hai unko collections bolte hai
jese facebook ki collection customers hai

Document - jese A ek database hai aur usmein users ka data hai (i.e collection) aur users mein bhi ek user ke data ko document bolte hai

Database -> Collections -> Document

CODE                                  DATABASE
-----------------------------------------------
mongoose.connect -> means  database create
model create -> collection create hota hai(means agr hum sales model bnayenge toh sales collection bnega)
CREATE code   -> document create





*/







