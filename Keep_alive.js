from flask import Flask, jsonify
import requests
import threading

app = Flask(__name__)

@app.route('/')
def index():
    return "Alive"

def run():
    app.run(host='0.0.0.0',port=8080)

def Keep_alive():
     t= thread(traget=run)
     t.start()
