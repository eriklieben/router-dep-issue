import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { RouterConfiguration } from 'aurelia-direct-router';

Aurelia
  .register(RouterConfiguration)
  .app(MyApp)
  .start();