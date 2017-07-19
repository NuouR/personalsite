from flask import Flask
from flask import Flask,render_template
import random

app = Flask(__name__)

@app.route('/')
def index():	
	return render_template("home.html")

@app.route('/hello')
def Hello():
	return "Hello,World!!!!"

@app.route('/randomQuote')
def Random():
	a=['one','two','three','four','five']
	return (random.choice(a))





if __name__=="__main__":
	app.run()