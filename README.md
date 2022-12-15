# FontAwesome icons list

A simple tool to export icons from FontAwesome to lists of each types with name and CSS class name.

Icons came from [this page](https://fontawesome.com/download).

## How to run

```bash
# Clone the repository
git clone https://github.com/Torvaldi/fontawesome-icons-list.git
# Go to the downloaded directory
cd fontawesome-icons-list
# Run yarn
yarn
# Copy icons.json file from FontAwesome archive to src/icons.json
cp path/to/fontawesome/icons.json ./src/icons.json
# Compile application
npx tsc
# Run application
node ./build/src/index.js
```

The final content should be on the `icons.json` file at the root of the directory.
