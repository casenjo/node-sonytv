var tv = require('./SonyTV').SonyTV('192.168.1.111', '/sony/IRCC', '/sony/accessControl', 'CLIENT_ID', 'NICKNAME');

tv.pairRequest();
tv.loadCookieToken();
tv.sendCmd('VolumeUp');