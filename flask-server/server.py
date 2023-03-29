from flask import Flask, jsonify, request
import mysql.connector
import requests

app = Flask(__name__)

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


# Run the Flask app
if __name__ == '__main__':
    app.run()
