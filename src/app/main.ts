import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import '../polyfills.ts';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
