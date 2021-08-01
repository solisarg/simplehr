<?php
require_once 'conn.php';

$action = isset($_GET['action'])?$_GET['action']:'';

switch($action){
    case 'departments':
        $listado = [];
        $qry = "select departments.id, departments.name, 
        MAX(employees.salary) as maxsalary, COUNT(employees.id) as cant from departments 
        left join employees on departments.id = employees.dpt_id 
        group by departments.id, employees.dpt_id
        order by cant DESC";
        $result = mysqli_query($conn, $qry);
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
            $listado[] = $row;
        }
        $data = json_encode($listado, JSON_PRETTY_PRINT);
        break;
    case 'listall':
        $listado = [];
        $qry = "select * from departments";
        $result = mysqli_query($conn, $qry);
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
            if(!isset($listado[$row['name']])) $listado[$row['name']] = [];
            $dpt = $row['id'];
            $qry = "select id, salary, name from employees where dpt_id=$dpt order by salary DESC";
            $result2 = mysqli_query($conn, $qry);
            while($row2 = mysqli_fetch_array($result2, MYSQLI_ASSOC)){
                $listado[$row['name']][] = $row2;
            }
        }
        $data = json_encode($listado, JSON_PRETTY_PRINT);
        break;
    case 'list':
        $dpt =  $_GET['dpt'];
        $emp = [];
        $qry = "select emp.id, emp.salary, emp.name, dpt.name as department 
                from employees as emp
                left join departments as dpt
                on emp.dpt_id = dpt.id 
                where emp.dpt_id=$dpt order by salary DESC";
        $result = mysqli_query($conn, $qry);
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
            $emp[] = $row;
        }
        $data = json_encode($emp, JSON_PRETTY_PRINT);
        break;
    case 'employee':
        $id = $_GET['id'];
        $qry = "select employees.*, departments.name as dept from employees 
                left join departments on employees.dpt_id = departments.id
                where employees.id=$id";
        $result = mysqli_query($conn, $qry);
        $data = json_encode(mysqli_fetch_array($result, MYSQLI_ASSOC), JSON_PRETTY_PRINT);
        break;
    default:
        $data = "No input provided";

}
echo $data;