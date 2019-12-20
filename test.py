from __init__ import app
import unittest


class FlaskTestCase(unittest.TestCase):
	def test_index(self):
		tester = app.test_client(self)
		response = tester.get('/static/templates/Quizzes.html')
		self.assertEqual(response.status_code,200)
	def test_index1(self):		
		tester = app.test_client(self)
		response = tester.get('/static/templates/content.html')
		self.assertEqual(response.status_code,200)
	def test_index2(self):		
		tester = app.test_client(self)
		response = tester.get('/static/templates/Experiment.html')
		self.assertEqual(response.status_code,200)
	def test_index3(self):		
		tester = app.test_client(self)
		response = tester.get('/static/templates/Feedback.html')
		self.assertEqual(response.status_code,200)
	def test_index4(self):		
		tester = app.test_client(self)
		response = tester.get('/static/templates/Introduction.html')
		self.assertEqual(response.status_code,200)
	def test_index5(self):		
		tester = app.test_client(self)
		response = tester.get('/static/templates/Manual.html')
		self.assertEqual(response.status_code,200)
	def test_index6(self):		
		tester = app.test_client(self)
		response = tester.get('/static/templates/Objective.html')
		self.assertEqual(response.status_code,200)
	def test_index7(self):		
		tester = app.test_client(self)
		response = tester.get('/static/templates/Procedure.html')
		self.assertEqual(response.status_code,200)
	def test_index8(self):		
		tester = app.test_client(self)
		response = tester.get('/static/templates/References.html')
		self.assertEqual(response.status_code,200)
	def test_index9(self):		
		tester = app.test_client(self)
		response = tester.get('/static/templates/results.htm')
		self.assertEqual(response.status_code,200)
	def test_index10(self):		
		tester = app.test_client(self)
		response = tester.get('/static/templates/Theory.html')
		self.assertEqual(response.status_code,200)
if __name__ == '__main__':
	unittest.main()		