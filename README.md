# Representation of floating point numbers in binary system

The project is an improvement on the [Virtual Lab experiment](http://cse11-iiith.vlabs.ac.in/FloatingPointNumbers/Introduction.html?domain=Computer%20Science&lab=CSO%20LabHome) that helps students  to do learn representing floating point numbers in binary system according to IEEE conventions.

The project has an in-built floating point number to binary converter built using `javascript` eliminating the need to download `.swf` file which was previously used.<br/>
A quiz feature is also added which randomly gives 5 questions from an existing database, everytime a user takes the quiz. Grading for the quiz is  also done for the users to evaluate their performance.
## Prerequisites

Before you begin, ensure you have met the following requirements:
<!--- These are just example requirements. Add, duplicate or remove as required --->
* You have installed the latest version of `Python3`. You can use [this](https://www.python.org/downloads/) for installation.
* You have installed the latest version of pip. You can use the following command for linux based machines.
 ```
 sudo apt install python3-pip
 ``` 
* Make sure you have the requirements installed. Use 
```
pip3 install -r requirements.txt 
```
## Using <project_name>

To use , follow these steps:
* Run in the directory of the project,
```
python3 run.py
```
* Open Introduction.html in static/templates directory using a web browser and navigate as pleased.
* To check for broken links in the HTML pages, run in the same folder 
```
python3 test.py
```
### File Description

-- `run.py` <br/>–> The main python file which runs the server <br/>
-- `app.db` <br/> –> This is the main database file which contains "Question" and "Answer" tables from which data will retrieved. <br/>
--`` __init__.py``<br/> –> This is where the flask application object named "app" is created and database configuration is done. <br/> 
–> The project is modularized based on the MVC framework. The concept of Blueprints in Flask is used to register the different controllers in the project. <br/>
-- `controllers/QuizController.py` <br/> This Controller is responsible for routing Quiz related request calls to respective service. <br/>
-- `service/QuizService.py` <br/>–> This is the service class that actually processes the request made by the client.<br/>–> It is responsible to make to make a call to the QuizData methods which get the data from the database. The service class then creates a model with the question and corresponding answers that is returned to the controller which inturn returns to the client. <br/>
-- `data/QuizData.py` <br/>–> This is the layer that is responsible to make the database call and populate the Question and Answer models. <br/>
-- `models/QuizModels.py` <br/>–> This file represents the structure of the Question and Answer model with respect to the database tables. <br/>
-- `static/templates` <br/>–> This is where all the HTMl pages are stored. Routing from one page to another is integrated within the files. <br/>
-- `static/css` <br/>–> The required CSS for all the HTML pages <br/>
-- `static/js` <br/>–> This is where the client calls the launched server whenever Quizzes.html page is opened. This also contains all the processing for the experiment. <br/>
-- `test.py` –> Checks for broken links in the HTML pages and returns OK if none found. <br/>

## Contributors

Thanks to the following people who have contributed to this project:
* [@AnandShivansh](https://github.com/AnandShivansh)

## Contact

If you want to contact me you can reach me at <kalyanadithya12@gmail.com>.
