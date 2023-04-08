from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import subprocess

app = Flask(__name__)
CORS(app)

def get_ip_from_mac(mac_address):
    try:
        arp_output = subprocess.check_output(["arp", "-a"]).decode("utf-8")
        arp_lines = arp_output.strip().split("\n")
        for line in arp_lines:
            if mac_address.lower() in line.lower():
                ip_address = line.split()[1].strip("()")
                return ip_address
        return None
    except subprocess.CalledProcessError as e:
        print("Error while running the arp command:", e)
        return None

@app.route("/api/skills", methods=["GET"])
def get_skills():
    mac_address = request.args.get("mac_address")
    ip_address = get_ip_from_mac(mac_address)
    if ip_address is None:
        return jsonify({"error": "IP address not found for the given MAC address"}), 404

    skills_url = f"http://{ip_address}:8181/skills"
    skills = requests.get(skills_url).json()
    return jsonify(skills)

@app.route("/api/skills/<skill_id>", methods=["PATCH"])
def update_skill(skill_id):
    mac_address = request.args.get("mac_address")
    ip_address = get_ip_from_mac(mac_address)
    if ip_address is None:
        return jsonify({"error": "IP address not found for the given MAC address"}), 404

    data = request.get_json()
    patch_url = f"http://{ip_address}:8181/skills/{skill_id}"
    response = requests.patch(patch_url, json=data)
    return response.content

if __name__ == "__main__":
    app.run(debug=True, port=5000)
