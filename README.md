# Attend

Cross-platform mobile application for automatically recording student attendance.



## Getting Started

[Install React Native and its dependencies.](https://facebook.github.io/react-native/docs/getting-started.html) Follow directions under 'Building Projects with Native Code' tab.

### Setup
On the command line, clone project using Git Large File Storage:
```
git lfs clone https://github.com/shylaclark/attend.git
```
Change directory to project root:
```
cd attend/AttendApp
```
Install dependencies:
```
npm install
```
Link native dependencies:
```
react-native link 
```

## Test App

On the command line, run the following from the project root:
### iOS
```
react-native run-ios
```

### Android
Open AVD Manager in Android Studio and select green arrow to launch emulator.
```
react-native run-android
```
### Troubleshooting
1. Clear watchman watches:
```
watchman watch-del-all
```
2. Clean node_modules folder:
```
rm -rf --cache node_modules
```
3. Reset packager cache:
```
rm -fr $TMPDIR/react-*
```
or
```
npm start -- --reset-cache
```
4. Clean cache:
```
npm cache clean
```
Shut down and restart Xcode and Simulator (iOS) or Android Studio and Emulator where open.

## Course

* Course: Agile Software Engineering (CSCI 6363)
* Career: Graduate
* Term: Fall 2017
* Instructor: Dr. Minhaz Zibran


## Tools

### Agile

* Planning: [CA Agile (Rally)](https://rally1.rallydev.com)
* Continuous Integration: [Bitrise](https://bitrise.io)
* Unit Testing: [Jest](https://facebook.github.io/jest/)

### Development

* UI Framework: [React Native](https://facebook.github.io/react-native/)
* Languages: JavaScript, Swift/Objective-C, Java
* IDE: [WebStorm](https://www.jetbrains.com/webstorm/)
* Emulators: Android Studio (Android), Xcode (iOS)
* Build Tools: Gradle (Android), xcodebuild (iOS)

## Screenshots
![Login](/docs/screenshots/login?raw=true "Login"){:height="50%" width="50%"}
![Signup](/docs/screenshots/signup?raw=true "Signup")
![Create](/docs/screenshots/create-course?raw=true "Create Course")
![Take](/docs/screenshots/take-attendance?raw=true "Take Attendance")


## Authors

+ [@shylaclark](http://github.com/shylaclark)
+ [@sggattan](http://github.com/sggattan)
+ [@alschmi2](http://github.com/alschmi2)
+ [@crypteaux](http://github.com/crypteaux)
+ [@psathvik1118](https://github.com/psathvik1118)
