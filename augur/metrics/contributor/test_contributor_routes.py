import requests
import pytest

@pytest.fixture(scope="session")
def metrics():
    pass

def test_contributors_by_group(metrics):
    response = requests.get('http://localhost:5000/api/unstable/repo-groups/20/contributors')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1
    assert data[0]["total"] > 0


def test_contributors_by_repo(metrics):
    response = requests.get('http://localhost:5000/api/unstable/repo-groups/20/repos/21000/contributors')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1
    assert data[0]["total"] > 0

def test_contributors_new_by_group(metrics):
    response = requests.get('http://localhost:5000/api/unstable/repo-groups/24/contributors-new')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1
    assert data[0]["count"] > 0


def test_contributors_new_by_repo(metrics):
    response = requests.get('http://localhost:5000/api/unstable/repo-groups/20/repos/21070/contributors-new')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1
    assert data[0]["count"] > 0

def test_top_committers_by_repo(metrics):
    response = requests.get('http://0.0.0.0:5000/api/unstable/repo-groups/22/repos/21334/top-committers')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1
    assert data[0]['commits'] > 0

def test_top_committers_by_group(metrics):
    response = requests.get('http://0.0.0.0:5000/api/unstable/repo-groups/22/top-committers')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1
    assert data[0]['commits'] > 0

def test_committer_by_repo(metrics):
    response = requests.get('http://localhost:5000/api/unstable/repo-groups/21/repos/21222/committers')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1

def test_committer_by_group(metrics):
    response = requests.get('http://localhost:5000/api/unstable/repo-groups/21/committers?period=year')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1

def test_committers_locations_by_group(metrics):
    response = requests.get('http://localhost:5000/api/unstable/repo-groups/20/committers-locations')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1
    assert data[0]["cntrb_lat"] != 0
    
def test_committers_locations_by_repo(metrics):
    response = requests.get('http://localhost:5000/api/unstable/repo-groups/20/repos/21000/committers-locations')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1
    assert data[0]["cntrb_lat"] != 0

def test_issue_locations_by_group(metrics):
    response = requests.get('http://localhost:5000/api/unstable/repo-groups/20/issue-locations')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1
    assert data[0]["cntrb_lat"] != 0
    
def test_issue_locations_by_repo(metrics):
    response = requests.get('http://localhost:5000/api/unstable/repo-groups/20/repos/21000/issue-locations')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1
    assert data[0]["cntrb_lat"] != 0
    
def test_pull_request_locations_by_group(metrics):
    response = requests.get('http://localhost:5000/api/unstable/repo-groups/20/pull-request-locations')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1
    assert data[0]["cntrb_lat"] != 0
    
def test_pull_request_locations_by_repo(metrics):
    response = requests.get('http://localhost:5000/api/unstable/repo-groups/20/repos/21000/pull-request-locations')
    data = response.json()
    assert response.status_code == 200
    assert len(data) >= 1
    assert data[0]["cntrb_lat"] != 0
