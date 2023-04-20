FROM python:3.8-slim-buster

# Set the working directory to /flask-server
WORKDIR /flask-server

# Copy the current directory contents into the container at /flask-server
COPY . /flask-server

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r flask-requirements.txt

# Set the FLASK_APP environment variable
ENV FLASK_APP=server.py

# Expose port 5000 for the Flask app
EXPOSE 5000

# Run the command to start the Flask app
CMD ["flask", "run", "--host=0.0.0.0"]