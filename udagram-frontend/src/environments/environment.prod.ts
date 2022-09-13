// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',

  // Use with exposed service in k8s
  apiHost: 'http://a6bc5ae00df074aa1a07d1367eca9723-1905619639.us-east-1.elb.amazonaws.com:8080/api/v0',
  
  // Use locally
  // apiHost: 'http://localhost:8080/api/v0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
