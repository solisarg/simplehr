<?php
require_once 'conn.php';
require_once 'vendor/autoload.php';
//create department and employee tables
echo "1. creating tables if neccesary<br>";
$qry = "CREATE TABLE IF NOT EXISTS departments (
    id int(11) NOT NULL,
    name varchar(255) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";
$result = mysqli_query($conn, $qry) or die(mysqli_error($conn));
$qry = "CREATE TABLE IF NOT EXISTS employees (
    id int(11) NOT NULL,
    dpt_id int(2) NOT NULL,
    name varchar(100) NOT NULL,
    address varchar(255) NOT NULL,
    email varchar(100) NOT NULL,
    salary int(6) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";
$result = mysqli_query($conn, $qry) or die(mysql_error($conn));
//clean both tables
echo "2. Cleaning tables if not empty<br>";
$qry = "truncate departments";
$result = mysqli_query($conn, $qry) or die(mysqli_error($conn));
$qry = "truncate employees";
$result = mysqli_query($conn, $qry) or die(mysqli_error($conn));

//company departments
$departments = ['Marketing', 'I+D', 'Production', 'Finances', 'Legal', 'Security', 'Administration', 'HR'];
$total = sizeof($departments);
echo "3. Filling departments table<br>";
for ($i = 1; $i <= $total; $i++) {
    $index = $i-1;
    $qry = "insert into departments(id, name) values($i, '$departments[$index]')";
    $result = mysqli_query($conn, $qry) or die(mysqli_error($conn));
}
//fake employees, using jelper faker library
$total = sizeof($departments) * 5;
$index = 0;
// use the factory to create a Faker\Generator instance
$faker = Faker\Factory::create();
$empty = 0;
echo "4. Filling employees table<br>";
$counter = 1;
for ($i = 0; $i < $total; $i++) {
    if($i%5 == 0){
        //33% chance of be empty, max 2 dept
        if($empty<2 && rand(1,3)==3){
            //skip dept and employees
            $i +=5;
            $index+=2;
            $empty++;
        } else {
            $index++;
        }
    }
    $employee = ['name'=>$faker->name, 'address'=>$faker->address, 'email'=>$faker->email, 'salary'=>rand(30, 70)];
    $id = $i+1;
    $salary = rand(30, 70);
    $address = str_replace("'", " ", $faker->address);
    $qry = "insert into employees(id,dpt_id,name,address,email,salary) values($counter, $index, '$faker->name', '$address', '$faker->email', $salary)";
    $result = mysqli_query($conn, $qry) or die(mysqli_error($conn));
    $counter++;
}
echo "Done !!<br>";