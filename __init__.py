from flask import Flask                     
from flask_sqlalchemy import SQLAlchemy
from flask import request
from flask import jsonify
#imported required flask libraries

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'  #app.db is the file where both 'Question' and 'Answer' tables are created and data is stored

db = SQLAlchemy(app)
from controllers.QuizController import quiz_controller
app.register_blueprint(quiz_controller)