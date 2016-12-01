<?php

$title = "Adam Nawrocki - Front End Developer";

if (basename($_SERVER['PHP_SELF']) === "portfolio.php") {
  $title = "Portfolio";
}
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title><?php echo $title ?></title>
    <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>