import json
import pytest
import requests

@pytest.fixture
def url():
    return 'http://127.0.0.1:5000'

# Test login API successful login
def test_login_success(url):
    data = {"email": "testing@testing.co.uk", "password": "password"}
    response = requests.post(url + '/login', json=data)
    assert response.status_code == 200
    assert response.text == 'Login successful!'

# Test login API with wrong password
def test_login_fail(url):
    data = {"email": "testing@testing.co.uk", "password": "wrong password"}
    response = requests.post(url + '/login', json=data)
    assert response.status_code == 200
    assert response.text == 'Incorrect password'

# Test check if email exists API with registered email
def test_check_email_registered(url):
    data = {'email': 'testing@testing.co.uk'}
    response = requests.post(url + '/checkEmailExists', json=data)
    assert response.status_code == 200
    assert response.text == 'Email already exists'

# Test check if email exists API with unregistered email
def test_check_email_not_registered(url):
    data = {'email': '@.'}
    response = requests.post(url + '/checkEmailExists', json=data)
    assert response.status_code == 200
    assert response.text == 'Email does not exist'    


if __name__ == '__main__':
    pytest.main()        

