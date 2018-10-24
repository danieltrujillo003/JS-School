# Challenge C02: RESTful APIs and HTTP requests

This file shows a step-by-step of the challenge, consisting in getting JSON info of **the list of characters of Cable & Deadpool (2004) #46 (Zombie Variant)** and **the list of all stories when Agent X (Nijo) appears**, using the MARVEL developer API and Postman from the initial setup to the final result.

### Setup

1. Download and install the [latest version](https://www.getpostman.com/) of Postman.

2. Get into [MARVEL Developer Portal](https://developer.marvel.com/docs) and create a MARVEL account.

3. Once the account is created, go to 'My Developer Account' to get the public key and the private key needed to setup Postman later.  
![Public and Private Keys](img/keys.png)

4. Search for an online [MD5 hash generator](http://www.md5.cz/) to generate a hash to be used in Postman entering the previously obtained data as shown: **timestamp + private key + public key**. It will throw a result like this:  
![Hash generated](img/hash.png)

5. With all the data to begin, the queries will be executed with this initial template:

    >http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

### Try out the MARVEL developer API

1. Go to the 'Interactive Documentation' of the MARVEL developer portal and get familiar with all the collections of the API.  
![Some API Collections](img/collections.png)

2. Choose the first *Characters* collection and, in the parameters section, input "Thor" in the "title" parameter to get info about Thor, then click Try it out! button to get the query in the API.  
![Thor info](img/thor.png)

### Let's get to work

1. Look for the collection needed in the MARVEL API, in this case we will look for the **Cable & Deadpool** *series*  
![Series Collection](img/series.png).  
In the parameters section, input "Cable" in the "titleStartsWith" parameter and "2004" in the "startYear", then click Try it out! button to get a more accurate query in the API.  
![Parameters](img/query.png)

2. In the Response Body, the first object of the query will be **Cable & Deadpool (2004 - 2008)**, So get the ID above to further queries.  
![Series ID](img/seriesID.png)

3. Now Postman work. Look for the next collection needed in the API, i.e. *comics by series*, to get the query parameter. Then enter the url template in Postman adjusting it with the portion of url gotten previously and the ID of the series.  
![Comics by series Query URL](img/comics.png)  
The box below dynamically shows the parameters of the url that can be changed as desired, and other needed parameters can be added to get an accurate query. Let's add 'limit' parameter with a value of 100 to make sure the comic needed will be displayed.

4. Search for the #46 (Zombie Variant) in the Postman results and get the comic ID.  
![Comic ID](img/comicID.png)

5. Again in the MARVEL API, look for the next collection and take the query parameter. Then replace it in Postman with the comic ID to get a url similar to this:
    >http://gateway.marvel.com/v1/public/comics/21845/characters?ts=1&apikey=a5e13ec9e372657aa6c9375209b81499&hash=a56c18ad05cffec3b6e05ee892cec590&limit=100

    The current result will be **the list of characters of Cable & Deadpool (2004) #46 (Zombie Variant)** with a total of 10 characters.  
    ![Characters result](img/characters.png)  
    (The full JSON result can be found in the ***characters.json*** file)

6. Fortunately, the first character displayed is **Agent X (Nijo)**, so get the character ID and use the right query parameter found in the API to compose a full quey URL similar to this:
    >http://gateway.marvel.com/v1/public/characters/1011031/stories?ts=1&apikey=a5e13ec9e372657aa6c9375209b81499&hash=a56c18ad05cffec3b6e05ee892cec590&limit=100

    Input it in Postman and get as result **the list of all stories when Agent X (Nijo) appears** with a total of 23 stories.  
    ![stories result](img/stories.png)  
    (The full JSON result can be found in the ***nijo.json*** file)

Feel free to choose the collections as you like and trace a different path to get the requested info, or look for other info as you like.