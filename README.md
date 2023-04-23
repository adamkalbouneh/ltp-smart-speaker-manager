## Name
LTP Smart Speaker Web app

## Description
A web application that connects to the smart speaker which gives the user many abilities. The user, through the web app, enable and disable skills, set routines, enable and disable alarms, talk to the speaker and much more. This web app was designed to help the realitives of the user to set up the device and maintain it.


## Installation
Disclaimer: these instructions are for windows

Starting the database 

Make sure that your computer is connected to the same private WiFi network as the RaspberryPi (public networks cause problems) 

***Provided zip file*** 

Unzip the zip file provided 

(Contact IT for help setting up MySQLWorkbench to run on localhost: root, password: comsc) 

Open MySQLWorkbench application 

Open file `db_initialise.sql` found in database folder 

![IMAGE_DESCRIPTION]('../readmeIMG/Picture1.png')

Run the script by pressing the lightning button shown below 

![IMAGE_DESCRIPTION]('../readmeIMG/Picture2.png')

Press the refresh button and make sure that app_db shows in the schemas in bold 

![IMAGE_DESCRIPTION]('../readmeIMG/Picture3.png')

Starting the server 

Open command prompt in project directory (disclaimer: these commands are for windows) 

Run the following commands: 

`cd flask-server` 

`python.exe -m pip install --upgrade pip` 

`pip install flask` 

`pip install flask_session` 

`pip install mysql-connector-python` 

`pip install flask_bcrypt` 

`pip install mycroft-messagebus-client` 

`python server.py` 

 

 
 

Running react client 

Open another command prompt in project directory 

Run the following commands: 

`cd client` 

`npm install` 

`npm install -g npm@9.6.2` 

`npm install axios` 

`npm install react-router-dom` 

`npm install @mantine/core` 

`npm install @tabler/icons-react` 

`npm start` 

 

Wait a few minutes until the webpage automatically loads or visit `https://localhost:3000/signup` in web browser. 
 
 
 
 
 
 

## Support
vujovicm@cardiff.ac.uk

shahina@cardiff.ac.uk

omarfm@cardiff.ac.uk

kalbouneha@cardiff.ac.uk

allen-harrise@cardiff.ac.uk

## Authors and acknowledgment
Milos Vujovic

Ahmad Shahin

Fatima Marwa Omar

Adam Kalbouneh

Ethan Allen-Harris

## Project status
Completed on 21/04/2023

