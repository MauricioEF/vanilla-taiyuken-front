## Important!
It is imporant to test a change by building manually the project.
You can do this by running 

``
 npm run build
``

this will run the build.sh file in this project. However, the build doesn't generate the config file required for the project.

To make it work, it is important that, once the build has finished, to copy the content in config.dev.js and paste it in a manually created file called config.js, this simulating the behavior of the env injection via githubactions.

