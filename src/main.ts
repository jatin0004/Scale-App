import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
var txt1 = "What a very";
var txt2 = "nice day";
document.getElementById("demo").innerHTML = txt1 + " " + txt2;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
