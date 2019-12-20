import random   #used to randomly pick 5 integers
from models.QuizModels import Question, Answer
# from models.Quiz import *
from data.QuizData import *
def getQuizQuestions():
    questions = getQuestions()              #gets all questions from database
    temp = []
    rand = random.sample(range(1,25),5)     #selects 5 integers in the range 1 - 25 inorder to select random questions from database 
    for var in rand:
        temp.append(questions[var])
    questions = temp    #questions contains 5 randomly selected questions from them list of questions in the database
    quizList = []       #this is the response that is returned to the client
    for i in questions:
        answers = getAnswersForQuestion(i.question_id)  # getting corresponding options list for every seleced question
        ansList = []
        model = {}                      
        model["question_id"] = i.question_id
        model["question_string"] = i.question_string
        for answer in answers:
            ans = {}
            ans["answer_id"] = answer.answer_id
            ans["value"] = answer.value
            ans["is_correct"]  =  answer.is_correct
            ans["question_id"] =  answer.question_id
            ansList.append(ans)
        model["answers"] = ansList
        quizList.append(model)
    return quizList         #quizlist contains 5 randomly selected questions and corresponding options. Also each option has info whether that option is correct or not