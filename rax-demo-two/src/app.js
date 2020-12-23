import { runApp, useAppLaunch, usePageShow, usePageHide} from 'rax-app';
import appConfig from './app.json';

useAppLaunch(() => {
  console.log('App级生命周期');
});
runApp(appConfig);
