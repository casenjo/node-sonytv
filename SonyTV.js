/*
 * Copyright (C) 2015 Cristian Asenjo
 * License: http://www.gnu.org/licenses/gpl.html GPL version 2 or higher
 */
var Base64 = require('./base64.js').Base64;
var http = require('http');
var fs = require('fs');
var wol = require('wake_on_lan');

exports.SonyTV = function (host, controlUrl, pairUrl, clientid, nickname) {

    var module = {
        host: '',
        controlUrl: '',
        pairUrl: '',
        clientid: '',
        nickname: '',
        authCookie: '',
        regexCookie: /(auth=[^\;]*)/,
        IRCC: {}
    };
    
    module.host = host;
    module.controlUrl = controlUrl;
    module.pairUrl = pairUrl;
    module.clientid = clientid;
    module.nickname = nickname;
    module.IRCC = {
        'Power Off' : 'AAAAAQAAAAEAAAAvAw==',
        'Analog': 'AAAAAgAAAHcAAAANAw==',
        'Audio': 'AAAAAQAAAAEAAAAXAw==',
        'Blue': 'AAAAAgAAAJcAAAAkAw==',
        'ChannelDown': 'AAAAAQAAAAEAAAARAw==',
        'ChannelUp': 'AAAAAQAAAAEAAAAQAw==',
        'Confirm': 'AAAAAQAAAAEAAABlAw==',
        'Display': 'AAAAAQAAAAEAAAA6Aw==',
        'Down': 'AAAAAQAAAAEAAAB1Aw==',
        'EPG': 'AAAAAgAAAKQAAABbAw==',
        'Exit': 'AAAAAQAAAAEAAABjAw==',
        'Forward': 'AAAAAgAAAJcAAAAcAw==',
        'Green': 'AAAAAgAAAJcAAAAmAw==',
        'Home': 'AAAAAQAAAAEAAABgAw==',
        'Input': 'AAAAAQAAAAEAAAAlAw==',
        'Left': 'AAAAAQAAAAEAAAA0Aw==',
        'Mute': 'AAAAAQAAAAEAAAAUAw==',
        'Next': 'AAAAAgAAAJcAAAA9Aw==',
        'Num0': 'AAAAAQAAAAEAAAAJAw==',
        'Num1': 'AAAAAQAAAAEAAAAAAw==',
        'Num2': 'AAAAAQAAAAEAAAABAw==',
        'Num3': 'AAAAAQAAAAEAAAADAw==',
        'Num4': 'AAAAAQAAAAEAAAADAw==',
        'Num5': 'AAAAAQAAAAEAAAAEAw==',
        'Num6': 'AAAAAQAAAAEAAAAFAw==',
        'Num7': 'AAAAAQAAAAEAAAAGAw==',
        'Num8': 'AAAAAQAAAAEAAAAHAw==',
        'Num9': 'AAAAAQAAAAEAAAAIAw==',
        'Options': 'AAAAAgAAAJcAAAA2Aw==',
        'PAP': 'AAAAAgAAAKQAAAB3Aw==',
        'Pause': 'AAAAAgAAAJcAAAAZAw==',
        'Play': 'AAAAAgAAAJcAAAAaAw==',
        'Prev': 'AAAAAgAAAJcAAAA8Aw==',
        'Red': 'AAAAAgAAAJcAAAAlAw==',
        'Return': 'AAAAAgAAAJcAAAAjAw==',
        'Rewind': 'AAAAAgAAAJcAAAAbAw==',
        'Right': 'AAAAAQAAAAEAAAAzAw==',
        'Stop': 'AAAAAgAAAJcAAAAYAw==',
        'SubTitle': 'AAAAAgAAAJcAAAAoAw==',
        'SyncMenu': 'AAAAAgAAABoAAABYAw==',
        'Up': 'AAAAAQAAAAEAAAB0Aw==',
        'VolumeDown': 'AAAAAQAAAAEAAAATAw==',
        'VolumeUp': 'AAAAAQAAAAEAAAASAw==',
        'Wide': 'AAAAAgAAAKQAAAA9Aw==',
        'Yellow': 'AAAAAgAAAJcAAAAnAw==',
        'HDMI1': 'AAAAAgAAABoAAABaAw==',
        'HDMI2': 'AAAAAgAAABoAAABbAw==',
        'HDMI3': 'AAAAAgAAABoAAABcAw==',
        'HDMI4': 'AAAAAgAAABoAAABdAw==',
        'Netflix': 'AAAAAgAAABoAAAB8Aw==',
        
        //not tested:
        'Replay': 'AAAAAgAAAJcAAAB5Aw==',
        'Advance': 'AAAAAgAAAJcAAAB4Aw==',
        'TopMenu': 'AAAAAgAAABoAAABgAw==',
        'PopUpMenu': 'AAAAAgAAABoAAABhAw==',
        'Eject': 'AAAAAgAAAJcAAABIAw==',
        'Rec': 'AAAAAgAAAJcAAAAgAw==',
        'ClosedCaption': 'AAAAAgAAAKQAAAAQAw==',
        'Teletext': 'AAAAAQAAAAEAAAA/Aw==',
        'GGuide': 'AAAAAQAAAAEAAAAOAw==',
        'DOT' : 'AAAAAgAAAJcAAAAdAw==',
        'Digital': 'AAAAAgAAAJcAAAAyAw==',
        'BS' : 'AAAAAgAAAJcAAAAsAw==',
        'CS' : 'AAAAAgAAAJcAAAArAw==',
        'BSCS': 'AAAAAgAAAJcAAAAQAw==',
        'Ddata': 'AAAAAgAAAJcAAAAVAw==',
        'InternetWidgets': 'AAAAAgAAABoAAAB6Aw==',
        'InternetVideo': 'AAAAAgAAABoAAAB5Aw==',
        'SceneSelect': 'AAAAAgAAABoAAAB4Aw==',
        'Mode3D' : 'AAAAAgAAAHcAAABNAw==',
        'iManual' : 'AAAAAgAAABoAAAB7Aw==',
        'Jump' : 'AAAAAQAAAAEAAAA7Aw==',
        'MyEPG': 'AAAAAgAAAHcAAABrAw==',
        'ProgramDescription': 'AAAAAgAAAJcAAAAWAw==',
        'WriteChapter': 'AAAAAgAAAHcAAABsAw==',
        'TrackID' : 'AAAAAgAAABoAAAB+Aw==',
        'TenKey': 'AAAAAgAAAJcAAAAMAw==',
        'AppliCast': 'AAAAAgAAABoAAABvAw==',
        'acTVila': 'AAAAAgAAABoAAAByAw==',
        'DeleteVideo': 'AAAAAgAAAHcAAAAfAw==',
        'EasyStartUp': 'AAAAAgAAAHcAAABqAw==',
        'OneTouchTimeRec': 'AAAAAgAAABoAAABkAw==',
        'OneTouchView' : 'AAAAAgAAABoAAABlAw==',
        'OneTouchRec' : 'AAAAAgAAABoAAABiAw==',
        'OneTouchRecStop' : 'AAAAAgAAABoAAABjAw==',
    };
    module.parseCookie = function(headers) {
        if (headers['set-cookie'] !== undefined) {
            if(module.regexCookie.test(headers['set-cookie'])) {
                console.log('node-sonytv::SonyTV: Parsing cookie');
                var regArr = module.regexCookie.exec(headers['set-cookie']);
                module.authCookie = regArr[1];
                module.saveCookieToken(module.authCookie);
            }
        }
    };
    module.saveCookieToken = function(cookie) {
        var data = {
            Cookie: cookie
        };
        fs.writeFile("./cookie", JSON.stringify(data), function(err) {
            if(err) {
                return console.log('node-sonytv::SonyTV: Error saving cookie - ' + err);
            }
            console.log('node-sonytv::SonyTV: The cookie was saved');
            console.log('node-sonytv::SonyTV: Cookie saved as ' + cookie);
        });
    };
    module.loadCookieToken = function() {
        var data = fs.readFileSync('./cookie'), cookieObj;

        try {
            cookieObj = JSON.parse(data);
            module.authCookie = cookieObj.Cookie;
            console.log('node-sonytv::SonyTV: Cookie loaded as ' + cookieObj.Cookie);
        }
        catch (err) {
            console.log('node-sonytv::SonyTV: pairRequest sent...');
            console.log('node-sonytv::SonyTV: Error parsing JSON from cookie. Was the TV paired?');
            console.log('node-sonytv::SonyTV: ' + err);
        }

    };
    module.pairRequest = function(password) {
      var pairBody = '{'+
          '"id":13,' +
          '"method":"actRegister",' +
          '"version":"1.0",' +
          '"params":[{"clientid":"' + module.clientid + '","nickname":"' + module.nickname + '"},[{"clientid":"' + module.clientid + '","value":"yes","nickname":"' + module.nickname + '","function":"WOL"}]]' +
        '}';
      var pairHeaders = {
        'User-Agent' : 'nha-sony/4',
        'Content-Type': 'application/json',
        'Content-Length': pairBody.length,
      };
      if (password !== undefined && password !== '') { 
        pairHeaders['Authorization'] = 'Basic ' + Base64.encode(':' + password);
      }

        var options = {
          host: module.host,
          path: module.pairUrl,
          port: 80,
          method: 'POST',
          headers: pairHeaders
        };

        var req = http.request(options, function(res) {
            console.log('node-sonytv::SonyTV: pairRequest sent...');
            module.parseCookie(res.headers);
        });

        req.on('error', function(e) {
          console.log('node-sonytv::SonyTV: ' + 'Problem with pairRequest request: ' + e.message);
        });

        // write data to request body
        req.write(pairBody);
        req.end();

    };
    module.sendCmd = function (CMD) {

        // Send IRCC command to TV
        var cmdBody = '<?xml version="1.0"?>' + 
        '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' + 
        '<s:Body><u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1">' + 
        '<IRCCCode>' + 
        module.IRCC[CMD] + 
        '</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>';

        var cmdHeaders = {
            'Content-Type': 'text/xml; charset=UTF-8',
        };
        if (module.authCookie !== '') {
            cmdHeaders['Cookie'] = module.authCookie;
        }

        var options = {
          host: module.host,
          path: module.controlUrl,
          port: 80,
          method: 'POST',
          headers: cmdHeaders
        };

        var req = http.request(options, function(res) {
            console.log('node-sonytv::SonyTV: ' + CMD + ' command sent...');
        });

        req.on('error', function(e) {
          console.log('node-sonytv::SonyTV: ' + 'Problem with sendCmd request: ' + e.message);
        });

        // write data to request body
        req.write(cmdBody);
        req.end();
    };
    module.powerOn = function (mac) {
        console.log('node-sonytv::SonyTV: Power On command sent...');
        if (mac !== undefined && mac !== '') { 
            wol.wake(mac);
            return true;
        }
        return false;
    }
    
    return module;
};



