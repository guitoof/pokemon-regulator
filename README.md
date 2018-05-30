PokeBAM
================

## Requirements
* [yarn](https://yarnpkg.com/en/)
* [React Native](https://facebook.github.io/react-native/)
* [ViroMedia](https://docs.viromedia.com/docs/quick-start): Signup to Viro Media to get your `VIRO_API_KEY`
* [Viro Media Android App](https://play.google.com/store/apps/details?id=com.viromedia.viromedia&hl=en_US) or [Viro Media iOS App](https://itunes.apple.com/us/app/viro-media/id1163100576?mt=8) installed on your device.
* [ngrok](https://ngrok.com/)

## Install

```
yarn
```

```
cp environment.secret.dist.js environment.secret.js
```

and fill in your `VIRO_API_KEY`.

## Run
1. Run your packager on your local ngrok server
```
yarn start
```

2. Launch the [Android](https://play.google.com/store/apps/details?id=com.viromedia.viromedia&hl=en_US) or [iOS](https://itunes.apple.com/us/app/viro-media/id1163100576?mt=8) **Viro Media app** on your device
3. Copy the printed ngrok url: http://*******.ngrok.io
