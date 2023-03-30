# ShirTemplateMfeApp

### What is this app

This is a dummy example of a `mfe` (aka remote) application in the context of Module Federation,
written in Angular 14.

### How was this app generated

To generate this application and the default setup for module federation, the following commands
were ran:

- `ng new shir-template-mfe-app --create-application="false"`
- `cd shir-template-mfe-app`
- `ng g application shir-template-mfe-app --routing=true --style=scss`
- `ng add @angular-architects/module-federation@^14.3.0 --project shir-template-mfe-app --port 5001 --type remote`

Eventually other code changes were done manually and the commit messages can be observed for a
detailed description.

### What does this app

It exposes a component (`ExposedComponent`) and a module (`ExposedModule`) in
the `webpack.config.js` file. These are resources that could be consumed by a `host` (aka shell)
application.

The port that this application is running on is `5001`. So in order to be able to consume the
exposed resources, the `host` application will have to connect
to `http://localhost:5001/remoteEntry.js`.
