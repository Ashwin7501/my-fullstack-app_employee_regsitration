// import mysql from 'mysql2';


// const con = mysql.createConnection({
//     host: "localhost",      // Host is correct
//     user: "root",           // Username
//     password: "root",       // Password
//     database: "employeeems",// Database
//     port: 3306              // Default MySQL port
// });

// con.connect(function(err) 
// {
//     if(err)
//     {
//         console.log("connection error",err.message)
//     }
//     else
//         console.log("connected")
// })
// export default con;



// // Import the mysql2 module using ES6 import
// import mysql from 'mysql2/promise';  // Notice we're using the promise version for async/await
 
// // Create a connection to the database
// const connection = await mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "employeeems"
// });
 
// try {
//   // Test the connection
//   await connection.connect();
//   console.log("Connected to the MySQL database!");
 
//   // Example query (using async/await for cleaner code)
//   const [rows, fields] = await connection.query('SELECT * FROM admin');
//   console.log(rows);  // Logs the results of the query
 
// } catch (err) {
//   console.error('Connection error:', err.message);
// }
 
// // Close the connection when you're done
// // await connection.end();
// export default connection;

import mysql from 'mysql2';  // Import the 'mysql2' package

const con = mysql.createConnection({
    host: "localhost",      // Host is correct
    user: "root",           // Username
    password: "root",       // Password
    database: "employeeems",// Database
    port: 3306              // Default MySQL port
});

con.connect(function(err) {
    if (err) {
        console.log("Connection error:", err.message);
    } else {
        console.log("Connected to the MySQL database!");
    }
});

export default con;

