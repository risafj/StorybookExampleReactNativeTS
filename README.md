# Storybook Example React Native TypeScript

This repo showcases some components that I made for a personal React Native project (contained in a separate private repo).

I wrote a blog post about the Storybook setup process here:

https://dev.to/risafj/setting-up-storybook-for-react-native-typescript-server-loader-ios-android-3b0i

# Technical stack
- React Native
- TypeScript
- Storybook
  - `@storybook/react-native-server` for using the web interface
  - `react-native-storybook-loader` for dynamic story loading
- Lint: ESLint (Standard JS format)
- CI: Github Actions

# How to use
1. Clone this repo
2. `yarn install`
3. If you're using an iOS emulator, `npx pod-install`
4. Create an `.env` file
5. Copy the contents of `.env.sample`
6. `yarn storybook` to start the Storybook Server (localhost:7007)
7. `yarn ios` or `yarn android` to start Storybook in the emulator

NOTE: In order to boot up Storybook, it's necessary to set the environment variable `LOAD_STORYBOOK` to `true` (steps 4 and 5 above). Otherwise, it will boot up the default app created by React Native CLI.
