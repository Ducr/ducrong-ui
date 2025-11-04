
#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  cd packages
  npm run build
  # commit
  if [[ `git status --porcelain` ]]; 
  then
    git add .
    git commit -m "release: $VERSION"
    git push
  fi
  npm version $VERSION --message "release: $VERSION"

  if [[ $VERSION =~ [beta] ]]
  then
    npm login
    npm publish --tag beta
  else 
    npm publish
  fi
fi
