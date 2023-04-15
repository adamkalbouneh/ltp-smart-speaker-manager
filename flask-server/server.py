import os
import time
import threading
import logging
import signal
from flask import Flask, jsonify, request, session, render_template
from flask_session import Session
from flask_bcrypt import Bcrypt
import mysql.connector
from flask_cors import CORS
import flask_socketio
from mycroft_bus_client import MessageBusClient, Message
import uuid
import secrets
import time

app = Flask(__name__, static_folder="react_app/build/static", template_folder="react_app/build")
CORS(app)
socketio = flask_socketio.SocketIO(app, cors_allowed_origins="*")
bus = MessageBusClient(host="raspberrypi", port=8181)

bcrypt = Bcrypt()
# Configuring sessions
app.config['SECRET_KEY'] = secrets.token_hex(16) # Create a random 32-character hexadecimal string as secret key
app.config['SESSION_TYPE'] = 'filesystem'

# Connect to the MySQL database
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="comsc",
  database="app_db"
)
# Initialise session
Session(app)

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
    time.sleep(10)
    bus.emit(Message("recognizer_loop:utterance", {
        "utterances": ["yes"],
        "lang": "en-us",
        }))
    return jsonify({"message": f"Skill installation request sent for {skill_url}"}), 200

@app.route('/uninstall-skill', methods=['POST'])
def uninstall_skill():

    skill_name = request.json.get ("name")
    
    bus.emit(Message("recognizer_loop:utterance", {
        "utterances": ["Uninstall "+skill_name],
        "lang": "en-us",
        }))
    time.sleep(10)
    bus.emit(Message("recognizer_loop:utterance", {
        "utterances": ["yes"],
        "lang": "en-us",
        }))
    return jsonify({"message": f"Skill installation request sent for {skill_name}"}), 200


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

# Route to test database connection
@app.route('/executeQuery', methods=['GET'])
def test_query():
    # Create a cursor object
    mycursor = mydb.cursor()

    # Execute a SQL query
    mycursor.execute("SELECT * FROM test")

    # Fetch the results
    result = mycursor.fetchall()

    # Return the results as a string
    return jsonify({"result": result})

@app.route('/signUp', methods=['POST'])
def signup():
    # Retrieve variables from request
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']

    # Use Bcrypt to hash password
    hashed_password = bcrypt.generate_password_hash(password)

    try:

        # Create a cursor object
        mycursor = mydb.cursor()

        # Execute a SQL query with parameterized values
        sql = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
        val = (name, email, hashed_password)
        mycursor.execute(sql, val)
        mydb.commit()
        

        # Find UserID from email
        sql = "SELECT user_id FROM users WHERE email = %s"
        val = (email,)
        mycursor.execute(sql, val)

        # Fetch the results
        result = mycursor.fetchall()
        
        # Assign userID to user session
        session['userID'] = result[0][0]

        # Do something with the data, like store it in a database
        return 'Signup successful!'
    except:
        return 'Signup error'


@app.route('/checkEmailExists', methods=['POST'])
def check_email_exists():
    # Retrieve email variable from request
    email = request.json['email']

    # Create a cursor object
    mycursor = mydb.cursor()

    # Execute a SQL query with parameterized email value
    sql = "SELECT * FROM users WHERE email = %s"
    val = (email,)
    mycursor.execute(sql, val)

    # Fetch the results
    result = mycursor.fetchall()

    # Check if anything was returned
    if len(result) == 0:
        # If no rows returned - email does not exist in the table
        return "Email does not exist"
    else:
        # If any row(s) returned - email already exists in the table
        return "Email already exists"


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
