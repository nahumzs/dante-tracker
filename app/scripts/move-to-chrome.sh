#!/bin/sh

echo "👻  moving to a new folder"
echo "🙅‍ removing manifest.json from build"
rm -f ~/zsilva/js/xolo/app/build/manifest.json
echo "🙅 removing useless favicon.ico"
rm -f ~/zsilva/js/xolo/app/build/favicon.ico
echo "✌️ copy bundle to chrome extension folder"
cp -R ./build/* ../chrome/
echo "✨ done"
