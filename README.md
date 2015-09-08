Originally from [shabunin](https://github.com/shabunin/cf-sonytv), this fork removes the necessity of CommandFusion so that it can work on any NodeJS application :)


Usage
=========

Declare a new tv var

```javascript
var tv = require('./SonyTV').SonyTV('TV_IP_OR_HOST_HERE', 'URL_CONTROL', 'URL_PAIR', 'CLIENT_ID', 'NICKNAME');
```

URL_CONTROL is usually '/sony/IRCC' or just '/IRCC'. If you find out others let me know!

URL_PAIR is '/sony/accessControl'. This was left as a parameter just in case other SonyTVs have different ones.

CLIENT_ID is a unique UUID that you should make using uuidgen or similar.

NICKNAME is the nickname for the device that will be associated with that client ID.


After that you'll have to call ```tv.pairRequest()``` twice. The first time you call it the TV will show you the pairing PIN.

The second time you call it, make sure to include the PIN as a parameter of the function, this will allow the auth cookie to be saved for later.

Once that's done you can call the sendCmd with the proper command to send the messages over.

If you want to use an existing cookie, make sure to call ```tv.loadCookieToken()``` before doing the ```sendCmd()``` call.



List of tested commands
==========

 Analog,
 Audio,
 Blue,
 ChannelDown,
 ChannelUp,
 Confirm,
 Display,
 Down,
 EPG,
 Exit,
 Forward,
 Green,
 Home,
 Input,
 Left,
 Mute,
 Next,
 Num0,
 Num1,
 Num2,
 Num3,
 Num4,
 Num5,
 Num6,
 Num7,
 Num8,
 Num9,
 Options,
 PAP,
 Pause,
 Play,
 Prev,
 Red,
 Return,
 Rewind,
 Right,
 Stop,
 SubTitle,
 SyncMenu,
 Up,
 VolumeDown,
 VolumeUp,
 Wide,
 Yellow,
 HDMI1,
 HDMI2,
 HDMI3,
 HDMI4

List of untested commands:
=========
Replay,
Advance,
TopMenu,
PopUpMenu,
Eject,
Rec,
ClosedCaption,
Teletext,
GGuide,
DOT,
Digital,
BS,
CS,
BSCS,
Ddata,
InternetWidgets,
InternetVideo,
SceneSelect,
Mode3D,
iManual,
Jump,
MyEPG,
ProgramDescription,
WriteChapter,
TrackID,
TenKey,
AppliCast,
acTVila,
DeleteVideo,
EasyStartUp,
OneTouchTimeRec,
OneTouchView,
OneTouchRec,
OneTouchRecStop
