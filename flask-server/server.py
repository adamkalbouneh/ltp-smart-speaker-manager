from flask import Flask

app = Flask(__name__)

@app.route("/home")
def home():
    return {"Home": ["Home Page"]}

from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

# Route for enabling/disabling a skill
@app.route('/skill/<string:skill_name>', methods=['POST'])
def set_skill(skill_name):
    # Get the skill state from the request body
    state = request.json.get('state')
    
    # Build the request URL for Mycroft's API
    url = f'http://localhost:8181/skills/{skill_name}/status'
    
    # Send the request to Mycroft's API with the skill state
    response = requests.post(url, json={'enabled': state})
    
    # Return the response from Mycroft's API
    return jsonify(response.json())

# Run the Flask app
if __name__ == '__main__':
    app.run()


if __name__ == "__main__":
    app.run(debug=True)