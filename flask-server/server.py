from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

MYCROFT_API_URL = "https://api.mycroft.ai/v1"

@app.route("/api/pair", methods=["POST"])
def pair_device():
    pairing_code = request.json["pairing_code"]
    
    response = requests.post(
        f"{MYCROFT_API_URL}/device/code",
        json={"code": pairing_code}
    )
    
    if response.status_code == 200:
        device_info = response.json()
        # Store the device information, including the access token, for future API requests
        # ...
        return jsonify({"status": "success"})
    else:
        return jsonify({"status": "error", "message": "Invalid pairing code"})

if __name__ == "__main__":
    app.run()
