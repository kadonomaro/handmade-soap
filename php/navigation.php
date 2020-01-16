<?php 
    $db_name = 'u0764370_handmade';

    $link = mysqli_connect('localhost', 'u0764370_default', 'bdmLv8L!', $db_name) or die();
    mysqli_set_charset($link, "utf8");

    $query = 'SELECT * FROM articles';
    $result = mysqli_query($link, $query) or die();?>

<?php while ($item = mysqli_fetch_assoc($result)):?>

    <li class="navigation-dropdown__item">
        <a href="blog#article-<?= $item['id'] ?>" class="navigation-dropdown__link"><?= $item['title'] ?></a>
    </li>

<?php endwhile ?>

<?php
    mysqli_free_result($result);
    mysqli_close($link);
?>