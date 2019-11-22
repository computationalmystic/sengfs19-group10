# Sprint 3

In this sprint, we got three API endpoints working, wrote tests for the endpoints (all in the contributor directory test files), connected the front-end to these apis, and added and modified functionality to the front-end.

For the endpoints, we completed the repo and repo_group API endpoints for committers-locations, issue-locations, and pull-request-locations. Each endpoint gives the contributor id, latitude, longitude, city, and state of anyone who made a commit, issue, or pull-request on a given repo. Because location data was sparse, to make these endpoints we created a new table 'dummy_contributor' with the cntrb_id and cntrb_email using 99 records from the real contributors table. Then, we filled this table with random latitude and longitudes using the random() function. Lastly, we manually found the city and state for each latitude and longitude in the table.

To write the endpoint tests, we added to test_contributor_function.py and test_contributor_routes.py by copying the basic pattern of each test for each of the endpoints. Values and attributes were modified to fit the specific endpoints. 

