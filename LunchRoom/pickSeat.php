<?php
include location.php;
include person.php;
include seat.php;
include table.php;

table1 = new table();
table2 = new table();

for ($i=0;$i<10;$i++){
	$seats = table1->getSeats();
	array_push($seats, new seat());
	table1->setSeats();
}


?>