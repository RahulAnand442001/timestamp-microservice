# **timestamp-microservice**
## Timestamp Microservice - API to get the UNIX time and UTC time.

------------------USAGE-----------------------------------------
### API ENDPOINT- "/api/timestamp/:date_string"

*** NOTE: Date String should be in UTC formate (yyyy-MM-dd) ***
** Return Type : JSON ** 

# Example url 
## ** http://localhost:3000/api/timestamp/2020-12-11 **

#Example Output 
## {"unix":1607644800000,"utc":"Fri, 11 Dec 2020 00:00:00 GMT"}

