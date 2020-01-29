<!DOCTYPE html>
<html>
<body>

Name: <?php echo $_POST["name"];?>
E-mail: <?php echo $_POST["e-mail"];?>
Minor: <?php
            $age = $_POST["age"];
            if($age > 17) {
              echo "NO";
            } elseif ($age > 0) {
              echo "YES";
            } else {
              echo "INVALID AGE";
            }
        ?>

</body>
</html>
