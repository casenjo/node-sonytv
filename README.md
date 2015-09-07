Originally from [shabunin](https://github.com/shabunin/cf-sonytv), this fork removes the necessity of CommandFusion so that it can work on any NodeJS application :)

Usage
=========

Added module.pairRequest(password) function. The pairing procces: first you send pair request without password and password will be shown on tv screen, then send pair request again but with password. In this gui input password in text box with s1 join.

==========

There's three files in forder "scripts".
First - SonyTV.js describes our module for multiple instances.
Second - userMain.js shows how to declare module for specific tv.
Three parameters required for declaration. First - host, second controlUrl of IRCC service. You can try 'IP/IRCC' or 'IP/sony/IRCC'. If it won't work you can look upnp description of your tv and there will be controlURL for IRCC. Third - url for pairing /sony/accessControl. 

Then after you declare your tv you can control it by adding JavaScript commands 'your instance'.sendCmd('cmdName')

List of tested commands:
=========

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

List of no tested commands:
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
