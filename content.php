<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Artep<>Petra Eros</title>
    <meta name="author" content="test">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="content.css">
    <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body>
  <nav id="nav">
    <ul id="nav-grid">
      <li class="nav-item nav-item-1"><a href="content.php?page=p_petraeros.php">Petra Eros</a></li>
      <li class="nav-item"><a href="index.php">Back to index</a></li>
    </ul>
  </nav>
<div id="grid_bg"></div>
<div class="content">
  <?php
                  $page = $_GET['page'];
                  if (!empty($page)) {
                    include($page);
                  }
                  else {
                    include('p_framing.php');
                  }
                ?>
</div>
</body>
</html>
