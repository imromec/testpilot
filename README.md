![Test Pilot Logo](testpilot/frontend/static-src/images/copter.png)

# Test Pilot

Test Pilot is an opt-in platform that allows us to perform controlled tests of new high-visibility product concepts in the general release channel of Firefox.

Test Pilot is not intended to replace trains for most features, nor is it a test bed for concepts we do not believe have a strong chance of shipping in general release. Rather, it is reserved for features that require user feedback, testing, and tuning before they ship with the browser.

[![Build](https://img.shields.io/circleci/project/mozilla/testpilot.svg?maxAge=2592000)](https://circleci.com/gh/mozilla/testpilot/) [![Coverage](https://img.shields.io/coveralls/mozilla/testpilot.svg?maxAge=2592000)](https://coveralls.io/r/mozilla/testpilot) [![Requirements](https://img.shields.io/requires/github/mozilla/testpilot.svg?maxAge=2592000)](https://requires.io/github/mozilla/testpilot/requirements/?branch=master)


## Table of Contents

- Developing Test Pilot
    - [Quickstart](docs/development/quickstart.md) - Get your development environment working.
    - [Add-on](addon/README.md) - Working on the Test Pilot add-on.
    - [Docker](docs/development/docker.md) - Docker tips and tricks.
    - [Testing](docs/development/testing.md) - Automated testing.
    - [Deployment](docs/development/deployment.md) - Deploying Test Pilot to staging and production
    - [Verifying deployments](docs/development/verification.md) - Verifying Test Pilot deployments.
    - [Add-on environment](docs/development/environment.md) - Configuring to which server the add-on connects.
- Developing experiments
    - [Variant testing](docs/experiments/variants.md) - Creating variant (e.g. A/B) tests in experiments.
    - [Example experiments](docs/experiments/)
- Metrics
    - [Telemetry](docs/metrics/telemetry.md) - How we use Firefox telemetry.
    - [Google Analytics](docs/metrics/ga.md) - How we use Google Analytics.
    - [New features](docs/metrics/new_features.md) - Everything needed to instrument something new.
- [Process](docs/process.md) - How we create, triage, and assign work.
- [FAQ](docs/faq.md)
- [Contributing to Test Pilot](CONTRIBUTING.md)
- [Code of conduct](docs/code_of_conduct.md)
- [License](LICENSE.md)


## More Information

- Wiki: https://wiki.mozilla.org/Test_Pilot
- IRC: #testpilot on irc.mozilla.org
