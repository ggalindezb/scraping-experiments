zip -x .git/\* -x node_modules/\* -x .gitignore -x layer.zip -r function.zip .
rm -rf nodejs && mkdir nodejs && cp -r node_modules/ nodejs && zip -x .git/\* -x .gitignore -x function.zip -r layer.zip nodejs && rm -rf nodejs
