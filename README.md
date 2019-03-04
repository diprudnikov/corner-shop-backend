# corner-shop-api

Api for the corner shop website.

## Running the API
First, take a look at `.env_sample` file.
All variables are used for creating MySQL connection, so update them according to your configuration:
* DB_HOST - host name
* DB_NAME - database name
* DB_USER - user name
* DB_PWD - user password

And also change the file name to `.env`.
### Development
To start the application in development mode, run:

```bash
npm run dev-server
```
The developer mode will watch your changes then will transpile the TypeScript code and re-run the node application automatically.

### Production
To build the API, run:
```bash
npm build
```
Then, start the application or deploy the files in `dist` directory:
```
npm start
```
