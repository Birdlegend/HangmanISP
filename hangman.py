from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/singleplayer/")
def singleplayer():
    return render_template('singleplayer.html')

@app.route("/multiplayer/")
def multiplayer():
    return render_template('multiplayer.html')

if __name__ == "__main__":
    app.run(debug=True)