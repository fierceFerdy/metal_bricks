$conn = mysql_connect('HOST', 'USER', 'PASS');
mysql_select_db('DATABASE', $conn);
if(!$conn){
     die("Connection Error: " . mysql_error());
}

$Client = $_POST['']
$Name = $_POST['']
$Registered on = $_POST['']
$Lead origin = $_POST['']
$Postal code = $_POST['']
$City = $_POST['']
$Street = $_POST['']

$sql = mysql_query('INSERT INTO table_in_db (Day) VALUES ("'. $Monday .'")')or die(mysql_error());

if (!$sql) {
    echo "Something went wrong...";
}
