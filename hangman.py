from flask import Flask, render_template, url_for
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/help")
def help():
    return render_template('help.html')

@app.route("/singleplayer")
def singleplayer():
    return render_template('singleplayer.html')

@app.route("/win")
def win():
    return render_template('win.html')

@app.route("/lose")
def lose():
    return render_template('lose.html')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=(os.environ.get('VAPOR_LOCAL_PORT')))
