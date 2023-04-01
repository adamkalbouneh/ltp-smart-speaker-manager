from flask import Flask, jsonify, request, session
from flask_session import Session
from flask_bcrypt import Bcrypt
import mysql.connector
import requests
import secrets


bcrypt = Bcrypt()

app = Flask(__name__)

# Configuring sessions
app.config['SECRET_KEY'] = secrets.token_hex(16) # Create a random 32-character hexadecimal string as secret key
app.config['SESSION_TYPE'] = 'filesystem'

# Initialise session
Session(app)


# Connect to the MySQL database
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="comsc",
  database="app_db"
)

# Route for enabling/disabling a skill
@app.route('/skill/<string:skill_name>', methods=['POST'])
def set_skill(skill_name):
    # Get the skill state from the request body
    state = request.json.get('state')

    # Build the request URL for Mycroft's API
    url = f'http://10.0.2.15:8181/skills/{skill_name}/status'

    # Send the request to Mycroft's API with the skill state
    response = requests.post(url, json={'enabled': state})

    # Return the response from Mycroft's API
    return jsonify(response.json())

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

@app.route('/login', methods=['POST'])
def login():
    # Retrieve variables from request
    email = request.json['email']
    password_attempt = request.json['password']

    try:        

        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE email=%s", (email))
        user = cur.fetchone()
        cur.close()
        if bcrypt.check_password_hash(hashed_password, password_attempt):
            return 'Login successful!'
        else:
            return 'Incorrect password provided, please try again'
    except:
        return 'Login error'


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



# Run the Flask app
if __name__ == '__main__':
    app.run()
