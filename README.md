# Augur Repo Location Tool (ARLT)

branch | status
   --- | ---
master | [![Build Status](https://travis-ci.org/chaoss/augur.svg?branch=master)](https://travis-ci.org/chaoss/augur)
   dev | [![Build Status](https://travis-ci.org/chaoss/augur.svg?branch=dev)](https://travis-ci.org/chaoss/augur)

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/2788/badge)](https://bestpractices.coreinfrastructure.org/projects/2788)

## About ARLT

Augur is focused on prototyping open source software metrics.

Functionally, Augur is a prototyped implementation of the Linux Foundation's [CHAOSS Project](http://chaoss.community) on [open source software metrics](https://github.com/chaoss/metrics). Technically, Augur is a [Flask web application](http://augur.osshealth.io), [Python library](https://oss-augur.readthedocs.io/en/dev/library-documentation/python.html) and [REST server](http://augur.osshealth.io/static/api_docs/) that presents metrics on open source software development project health and sustainability.

The Augur Repo Location Tool uses Augurs basic functionalities in order to display where different contributors of a repository are located. 

## Getting Started

**Please follow the 'Getting Started' guide in our [documentation](https://oss-augur.readthedocs.io/en/master/getting-started/getting-started-toc.html).**

Note: we currently only support (most) UNIX systems. If you would like to use Augur but only have access to a non-Unix system, we recommend setting up an Ubuntu 18.04 VM if you can. 
If this is not feasible for you, please reach out to us at [p9j0r6s0m4a0t8v5@augurlabs.slack.com](mailto:p9j0r6s0m4a0t8v5@augurlabs.slack.com) and we will try to help you come up with a solution. In the meantime, if you have Windows and feel so inclined check out issue [#403](https://github.com/chaoss/augur/issues/403) as a starting point until we can finalize a Windows installation.

## Installation and Deployment

1. Clone this repository in your server's public html folder.
2. Set up and activate your python virtual environment.
3. Run the following command to install Augur.
'''
make install
'''
4. During installation, set up the psql database using the provided sample data.
5. Create a new table in the augur_data schema called 'dummy_contributors' using the data provided in 
6. 


## License, Copyright, and Funding
----------------

Copyright © 2019 University of Nebraska at Omaha, University of Missouri and CHAOSS Project at the Linux Foundation

Augur is free software: you can redistribute it and/or modify it under the terms of the MIT License as published by the Open Source Initiative. See the [LICENSE](LICENSE) file for more details.

This work has been funded through the Alfred P. Sloan Foundation.
