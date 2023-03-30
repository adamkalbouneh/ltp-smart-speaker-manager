from flask import Flask, jsonify, request
import requests
import os
import json
from flask import jsonify
from flask_cors import CORS
from mycroft_bus_client import MessageBusClient

app = Flask(__name__)
CORS(app)


SKILLS_DIR = "/opt/mycroft/skills"
# Define your event handlers
def on_speak(message):
    print("Mycroft is speaking:", message.data["utterance"])

def on_utterance(message):
    print("Mycroft heard an utterance:", message.data["utterances"])

# Define the connect_to_mycroft function
def connect_to_mycroft():
    bus = MessageBusClient(host="192.168.1.29", port=8181)
    bus.on('speak', on_speak)
    bus.on('recognizer_loop:utterance', on_utterance)
    bus.run_forever()

@app.route('/skills', methods=['GET'])
def get_skills():
    skills = []

    for skill_folder in os.listdir(SKILLS_DIR):
        if os.path.isdir(os.path.join(SKILLS_DIR, skill_folder)):
            skills.append(skill_folder)

    return jsonify(skills)
    
# Run the Flask app
if __name__ == '__main__':
    from threading import Thread

    mycroft_thread = Thread(target=connect_to_mycroft)
    mycroft_thread.start()

    app.run(host='0.0.0.0', port=5000)
