# Simple HR demo

This is a simple demo proyect where a list of departments, employees of this departments and details about each employee can be navigated as a tree of dependencies> departments->employees->employee

The back-end was developend with PHP as a single endpoint, the front end as a React app using [Create React App](https://github.com/facebook/create-react-app).

You can see the application running at (http://3818devarg.com/simplehr/)

## Proyect setup

For the backend you need to have a local server with PHP support and MySQL or MariaDB database

In the project directory, there's a back folder with all the back-end files. Since we use faker library to generate random data in the database, you need to run composer install to download the library. If you don't have composer, please install first from (https://getcomposer.org/download/)

Once composer installed the dependencies, create a mysql database named hrdemo and run seeder.php to generate the tables and the data. Each time you run this script, the tables are emptied and new random data is generated.

### Front end

You can run the app in the development mode using npm run start
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
