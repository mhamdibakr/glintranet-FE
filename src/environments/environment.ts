// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,

  UrlCvTech: 'http://localhost:8092/api',
  UrlCompany: 'http://localhost:8091/api',
  Urlglintranet : 'http://localhost:8095/api',
  
  apiUrl: 'http://localhost:4000',
  //apiBaseUrl: 'http://localhost:8092/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
