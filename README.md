# Augur Repo Location Tool (ARLT)

## About ARLT

Augur is focused on prototyping open source software metrics.

Functionally, Augur is a prototyped implementation of the Linux Foundation's [CHAOSS Project](http://chaoss.community) on [open source software metrics](https://github.com/chaoss/metrics). Technically, Augur is a [Flask web application](http://augur.osshealth.io), [Python library](https://oss-augur.readthedocs.io/en/dev/library-documentation/python.html) and [REST server](http://augur.osshealth.io/static/api_docs/) that presents metrics on open source software development project health and sustainability.

The Augur Repo Location Tool utilizes Augurs basic functionalities in order to display where different contributors of a repository are located. 

## Installation and Deployment
These instructions are for mac, ubuntu, or other linux based systems.

1. Clone this repository into your server's public html folder.
2. Set up and activate your python virtual environment.
3. Run the following command to install Augur.
'''
make install
'''
4. During installation, set up the psql database using the provided sample data.
5. Create a new table in the augur_data schema called 'dummy_contributors' using the data provided in 
6. 


