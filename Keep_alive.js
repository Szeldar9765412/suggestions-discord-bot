from flask import Flask, render_template
import threading import Thread

app = Flask(__name__)

@app.route('/')
def index():
    return "Alive"

def run():
    app.run(host='0.0.0.0',port=8080)

def Keep_alive():
     t= Thread(traget=run)
     t.start()
