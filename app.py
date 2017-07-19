from flask import Flask
from flask import Flask,render_template
import random

app = Flask(__name__)

@app.route('/welcome')
def welcome():	
	return render_template("welcome.html")

@app.route('/home')
def home():	
	return render_template("home.html")

@app.route('/about')
def about():	
	return render_template("about.html")

@app.route('/contact.html')
def contact():	
	return render_template("contact.html")

@app.route('/mario')
def proj():	
	return render_template("mario.html")

@app.route("/display")
def ex():
	mylist= ['nour','ola','batool','maisam','ola']
	display=False
	return render_template('display.html', display=display, list=mylist)
 




	


@app.route('/hello')
def Hello():
	return "Hello,World!!!!"

@app.route('/randomQuote')
def Random():
	a=['one','two','three','four','five']
	return (random.choice(a))





if __name__=="__main__":
	app.run()