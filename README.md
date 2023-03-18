# Instructions

## Installation

Chinese users will probably get error when downloading "Sharp" package.  
Set Chinese mirror hosted at Alibaba for "Sharp" before install node packages.  
For Chinese users to install, run:  

```text
npm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
npm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
npm install
```

For international users, run:  

```text
npm install
```

## Run Script

```text
npm run serve
```

It initializes the script and run the proxy on port 22070.  
