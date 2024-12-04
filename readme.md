# Node.js Monorepo

## Overview:
This repository has a main package (the root src/index.mjs), and imports three subpackages contained within the modules/ directory.
It acts as a simple demonstration of a node monorepo.

## Setup:
```
npm install
npm install -ws
npm run build
npm run build -ws
```

## Test:
Test main module:
```
npm run start
```

Test individual submodule:
```
npm run start -w modules/moduleapp
```
