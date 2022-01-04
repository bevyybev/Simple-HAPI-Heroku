# Simple-HAPI-Heroku
>Build Simple CRUD API Using Heroku

## Downloads

- Postman
- Heoku
- Homebrew

## Get Started
> Download files

Install dependancies & run Locally

#### Express

`npm install express`
#### Nodeman

`npm install -g nodemon`

`npm start`

#### Postman
1. Download Postman
2. Create account
3. Create new workbook
4. Test request
   - e.g. Get http://localhost8080
   


####  Push to Heroku
1. Download Heroku
2. Create a new app
3. Follow Heroku deployment instructions


#### Endpoints
https://happy-nodjs.herokuapp.com/

https://happy-nodjs.herokuapp.com/api/books


### Notes
Although successful in devolping this simple API, there were many roadblocks that occured simply due to my machine and current version. I built this app on a MacBook Air with the most recent software update macOS Monetery. Due to the black storage on my machine, I was unable to utilize PostgresSQL my pefferred DB. I also tried installing MS SQL but there is no version compatible with this new mac Monetery update. I proceeded to creating a docaker image and started the sql server on the image. I then utilized Azure Data Studio to build my DB. In the process of trying to get my application to run, I recieved "error = H10". So I decided to create a json document my api could pull from. I will attach the scripts I used for connecting to AZ Sudios in a different repo title 'api24'. In the futre I would use a machine with more storage and one that is compatible with my perferred DB.
