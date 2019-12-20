from __init__ import db #importing database file

class Question(db.Model):               #A question class which associates each question with an id and question string
    __tablename__ = "Question"
    question_id = db.Column(db.Integer,primary_key=True,autoincrement=True) #primary key is true for id inorder to have unique question ids
    question_string = db.Column(db.String(200),unique=True) #corresponding question string attached to class
    

    def __init__(self,question_id,question_string):         #constructor function for the class
        self.question_id = question_id
        self.question_string = question_string


class Answer(db.Model):             # An Answer which associates each possible answer with an answer_id and question_id and also the answer_string
    __tablename__ = "Answer"
    answer_id = db.Column(db.Integer,primary_key=True,autoincrement=True)   #primary key true inorder to have unique answer_id's
    value = db.Column(db.String(200))                   #the answer string itself
    is_correct = db.Column(db.Integer)                  #to check whether the current option is the right one for the corresponding question
    question_id = db.Column(db.Integer,foreign_key=True)    #every answer is associated with question id. Here question_id acts as a FOREIGN KEY to the question_id in the Question table.
    def __init__(self,answer_id,value,is_correct,question_id): #constructor function for the above class
        self.answer_id = answer_id
        self.value = value
        self.question_id = question_id
        self.is_correct = is_correct
