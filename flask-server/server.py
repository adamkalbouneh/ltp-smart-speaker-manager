import os
import time
import threading
import logging
import signal
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import flask_socketio
from mycroft_bus_client import MessageBusClient, Message
import uuid
import time

app = Flask(__name__, static_folder="react_app/build/static", template_folder="react_app/build")
CORS(app)
socketio = flask_socketio.SocketIO(app, cors_allowed_origins="*")
bus = MessageBusClient(host="raspberrypi", port=8181)

# Set up logger to show request logs
log_format = "%(asctime)s [%(levelname)s] %(message)s"
logging.basicConfig(level=logging.DEBUG, format=log_format)
app.logger.handlers.clear()
app.logger.handlers.extend(logging.getLogger("werkzeug").handlers)

def connect_to_mycroft():
    bus.on('connected', on_connected)
    bus.run_forever()

def on_connected(event):
    print("Connected to Mycroft Message Bus")


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/install-skill', methods=['POST'])
def install_skill():
    
    skill_url = request.json.get("url")
    
    bus.emit(Message("recognizer_loop:utterance", {
        "utterances": ["Install "+skill_url],
        "lang": "en-us",
        }))
    time.sleep(5)
    bus.emit(Message("recognizer_loop:utterance", {
        "utterances": ["yes"],
        "lang": "en-us",
        }))
    return jsonify({"message": f"Skill installation request sent for {skill_url}"}), 200

@app.route('/uninstall-skill', methods=['POST'])
def uninstall_skill():
    
    skill_url = request.json.get("name")
    
    bus.emit(Message("recognizer_loop:utterance", {
        "utterances": ["Uninstall "+skill_url],
        "lang": "en-us",
        }))
    time.sleep(5)
    bus.emit(Message("recognizer_loop:utterance", {
        "utterances": ["yes"],
        "lang": "en-us",
        }))
    return jsonify({"message": f"Skill installation request sent for {skill_url}"}), 200

@app.route('/set-alarm', methods=['POST'])
def set_alarm():
    
    alarm_time = request.json.get("time")
    
    bus.emit(Message("recognizer_loop:utterance", {
        "utterances": ["Set an Alarm for "+alarm_time],
        "lang": "en-us",
        }))
    return jsonify({"message": f"Skill installation request sent for {alarm_time}"}), 200

@app.route('/delete-alarm', methods=['POST'])
def delete_alarm():
    
    alarm_time = request.json.get("time")
    
    bus.emit(Message("recognizer_loop:utterance", {
        "utterances": ["Delete "+alarm_time+" Alarm"],
        "lang": "en-us",
        }))
    return jsonify({"message": f"Skill installation request sent for {alarm_time}"}), 200

@app.route('/send-message', methods=['POST'])
def send_message():
    
    message_json = request.json.get("message")
    
    bus.emit(Message("recognizer_loop:utterance", {
        "utterances": [message_json],
        "lang": "en-us",
        }))
    return jsonify({"message": f" {Message} sent "}), 200


@app.route('/ask-time', methods=['POST'])
def ask_time():
    session_id = str(uuid.uuid4())
    bus.emit(Message("recognizer_loop:utterance", {
        "utterances": ["what's the time"],
        "lang": "en-us",
        "session": session_id
    }))
    return jsonify({"message": "Time request sent to Mycroft"}), 200

def shutdown_server():
    bus.close()
    socketio.stop()

def signal_handler(signal_number, frame):
    print("Shutting down the server...")
    shutdown_server()
    sys.exit(0)

signal.signal(signal.SIGINT, signal_handler)

mycroft_thread = threading.Thread(target=connect_to_mycroft)
mycroft_thread.start()

# Run the Flask server in the main thread
socketio.run(app, host='0.0.0.0', port=5000, use_reloader=False)
