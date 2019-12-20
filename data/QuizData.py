from models.QuizModels import Question, Answer
from __init__ import db   #Importing the db configuration object that is created in the __init__.py file
def getQuestions():
    questionsList = Question.query.all() #gets all the questions from the database
    return questionsList 

def getAnswersForQuestion(question_id):
    answersList = Answer.query.filter_by(question_id=question_id) #filters options based on question_id and returns those options
    return answersList