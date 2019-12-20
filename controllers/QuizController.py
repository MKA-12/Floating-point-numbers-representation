from flask import jsonify
from service.QuizService import *
from flask_cors import cross_origin
from flask import Blueprint
quiz_controller = Blueprint('quiz_controller', __name__)
@quiz_controller.route("/quizzes", methods=["GET"])
@cross_origin()
def getQuizQues():
    questions =  getQuizQuestions()     #gets 5 randomly selected questions and corresponding options
    return jsonify(questions)           #A JSON consisting of questions array is returned by the server when requested by the client