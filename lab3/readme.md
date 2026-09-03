node package manager
API: any API can be of 4 types:
GET: CRUD
POST: Create
Put/Patch: Update

API can be responsed by server with status code and json data 
API generally start with API/version
by default browser can check only getRequest to check other 3 request type like post, put, delete we require frontend or third party or API tester like Postman, thunderClient, echoAPI

## server can set header to send data
res.writeHeader()
res.setHeader()

## server can set status code

res.statusCode()
res.writeHeader()

## request methods
get
post
put/patch
delete

## route
/-> home/index/localhost
/prod/2369->sare products ko return jo 2369 par h
