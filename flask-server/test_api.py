import pytest
from server import app
import mysql.connector


@pytest.fixture
def client():
    with app.test_client() as client:
        mydb = mysql.connector.connect(
          host="mysql",
          user="root",
          password="comsc",
          database="mysql"
        )
        # replace the default mydb object with the test database connection object
        app.mydb = mydb
        yield client

# Test login API successful login
def test_login_success(client):
    data = {"email": "testing@testing.co.uk", "password": "password"}
    response = client.post('/login', json=data)
    assert response.status_code == 200
    print("TEST TEST TEST TEST TEST")
    print(response)
    assert response.text == 'Login successful!'

# Test login API with wrong password
def test_login_fail(client):
    data = {"email": "testing@testing.co.uk", "password": "wrong password"}
    response = client.post('/login', json=data)
    assert response.status_code == 200
    assert response.text == 'Incorrect password'

# Test check if email exists API with registered email
def test_check_email_registered(client):
    data = {'email': 'testing@testing.co.uk'}
    response = client.post('/checkEmailExists', json=data)
    assert response.status_code == 200
    assert response.text == 'Email already exists'

# Test check if email exists API with unregistered email
def test_check_email_not_registered(client):
    data = {'email': '@.'}
    response = client.post('/checkEmailExists', json=data)
    assert response.status_code == 200
    assert response.text == 'Email does not exist'    


if __name__ == '__main__':
    pytest.main()        

