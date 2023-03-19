# Instructions

Please run this project under the latest LTS version of Node.js.  
Date: 2023/03/18  
Latest: 18.15.0  
Use of NVM for Node version control is recommended.

## Install

Chinese users will probably get error when downloading "Sharp" package.  
Set Chinese mirror hosted at Alibaba for "Sharp" before install node packages.  
For Chinese users, run:  

```text
npm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
npm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
npm install
```

For international users, run:  

```text
npm install
```

## Preprocess

### 1. Tables

2 Tables are required: 'shanten' and 'enumerations'.  
There are 2 options to set up the project before actually serving.  

1. Unzip the pre-downloaded tables.  
2. Compute the tables your own, which takes around 2 minutes (CPU multi-threading).  

### 2. opencv.js

This project makes use of opencv.js.  
The official copy is available at https://docs.opencv.org/${version}/opencv.js  
Currently, version 4.7.0 is attached.  

### 3. liqi.json

liqi.json defines the actions at maj-soul.com.  
It is necessary for websocket messages decode, since the game uses protobuf to exchange information.  
This file can be obtained during user login, and should be updated together with the web game client.  

## Serve

```text
npm run serve
```

It initializes the script and run the proxy on port 22070.  
