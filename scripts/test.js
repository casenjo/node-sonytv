//var tv = require('./SonyTV');

var tv = require('./SonyTV').SonyTV('192.168.1.111', '/IRCC', '/sony/accessControl', 'CLIENT_ID', 'NICKNAME');

tv.pairRequest();
//tv.sendCmd('Power Off');





//SonyTV.pairRequest('PASSWORD');
/*var SonyTV = function (host, controlUrl, pairUrl, clientid, nickname) {

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
        if (headers['Set-Cookie'] !== undefined) {
            if(module.regexCookie.test(headers['Set-Cookie'])) {
                var regArr = module.regexCookie.exec(headers['Set-Cookie']);
                module.authCookie = regArr[1] + ';';
                module.saveCookieToken();
            }
        }
    };
    module.saveCookieToken = function() {
      //replace this function by yours
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
          'Content-Type': 'application/json'
        };
      if (password !== undefined && password !== '') { 
        pairHeaders['Authorization'] = 'Basic ' + Base64.encode(':' + password);
      }
      //POST REQUEST HERE
      // CF.request(module.host + module.pairUrl, 'POST', pairHeaders, pairBody,
      //   function (status, headers, body) {
      //       if (status == 200) {
      //           //CF.log('Pair request response: status:' + status + ' headers: ' + JSON.stringify(headers) + '  body : ' +body);
      //           module.parseCookie(headers);
      //       } else {
      //           coonsole.log('SonyTV(' + module.host + ') error: pair request returned status ' + status);
      //       }
      //   });
    };
    module.sendCmd = function (CMD) {
        // Send IRCC command to TV
        var cmdBody = '<?xml version="1.0"?>' +
        '<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
        '<SOAP-ENV:Body>' + '<m:X_SendIRCC xmlns:m="urn:schemas-sony-com:service:IRCC:1">' +
        '<IRCCCode xmlns:dt="urn:schemas-microsoft-com:datatypes" dt:dt="string">' +
            module.IRCC[CMD] +
        '</IRCCCode>' +
        '</m:X_SendIRCC>' +
        '</SOAP-ENV:Body>' +
        '</SOAP-ENV:Envelope>';
        var cmdHeaders = {
            'Content-Type': 'text/xml; charset=utf-8',
            'SOAPAction': '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"'
        };
        if (module.authCookie !== '') {
            cmdHeaders['Cookie'] = module.authCookie;
        }

        
        // POST REQUEST HERE
        

        // CF.request(module.host + module.controlUrl,
        //     'POST', cmdHeaders, cmdBody,
        //     function (status, headers, body) {
        //         if (status == 200) {
        //             //CF.log("Form data sent");
        //         } else {
        //             CF.log('SonyTV(' + module.host + ') error: sendCmd request returned status ' + status);
        //         }
        //     });
    };
    return module;

};*/
//var tv=SonyTV('http://192.168.1.124', '/IRCC', '/sony/accessControl', 'CLIENT_ID', 'NICKNAME');
//SonyTV.pairRequest('PASSWORD');
//tv.SonyTV('http://192.168.1.124', '/IRCC', '/sony/accessControl', 'CLIENT_ID', 'NICKNAME');






/*
// pair the TV
TV.Sony1.pairRequest('PASSWORD');


var pairSony1 = function() {
  CF.getJoin('s1', function(join, value, tokens) {
    TV.Sony1.pairRequest(value); 
  });
  CF.getJoin(CF.GlobalTokensJoin, function(j, v, tokens, tags) {
    var authCookie = tokens["[authCookie]"]; 
    if (authCookie !== 0) {
      TV.Sony1.authCookie = authCookie;
    }
  });
};

TV.Sony1.saveCookieToken = function() {
  if (TV.Sony1.authCookie !== '') {
    CF.setToken(CF.GlobalTokensJoin, "[authCookie]", TV.Sony1.authCookie);
  }
};
*/