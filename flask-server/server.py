from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

MYCROFT_API_URL = "http://12.168.1.29:8080"  # Replace with your Raspberry Pi IP address and Mycroft API port

@app.route("/api/skills", methods=["GET"])
def get_skills():
    response = requests.get(f"{MYCROFT_API_URL}/list_skills")
    return jsonify(response.json())

@app.route("/api/skills/<skill_name>/toggle", methods=["POST"])
def toggle_skill(skill_name):
    is_enabled = request.json["enabled"]
    if is_enabled:
        requests.post(f"{MYCROFT_API_URL}/enable_skill?skill_name={skill_name}")
    else:
        requests.post(f"{MYCROFT_API_URL}/disable_skill?skill_name={skill_name}")
    return jsonify({"success": True})

if __name__ == "__main__":
    app.run(debug=True)
