<h2>Installation</h2>
Chinese users will probably get error when downloading "Sharp" package.<br>
Set Chinese mirror hosted at Alibaba for "Sharp" before install node packages.<br>
For Chinese users to install, run:<br>
<code>
npm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"<br>
npm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"<br>
npm install
</code><br>
For international users, run:<br>
<code>npm install</code>
<hr>
<h2>Run Script</h2>
<code>npm run serve</code><br>
It initializes the script and run the proxy on port 22070.