<!DOCTYPE html>
<html>
<body>

<div>
There is web content here for yall
</div>

<?php
// C:\Users\simon\Documents\Programming_Challenge\10_PHP



function myFunction($num) {
	if($num > 0) {
		echo "Number is greater than 0<br>";
	} elseif ($num < -3) {
		echo "Number is less than -3<br>";
	} else {
		echo "Number is between 0 and -3<br>";
	}
}
myFunction(2);
myFunction(-5);
myFunction(-2);

function cross_product($arr1, $arr2) {
	$out = array();
	$out[0] = $arr1[1]*$arr2[2] - $arr1[2]*$arr2[1];
	$out[1] = $arr1[2]*$arr2[0] - $arr1[0]*$arr2[2];
	$out[2] = $arr1[0]*$arr2[1] - $arr1[1]*$arr2[0];
	return $out;
}



?>
</body>
</html>
