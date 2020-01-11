<?php

    $db_name = 'u0764370_handmade';

    $link = mysqli_connect('localhost', 'u0764370_default', 'bdmLv8L!', $db_name) or die('Не удалось соединиться: ' . mysqli_error());
    mysqli_set_charset($link, "utf8");

    $query = 'SELECT * FROM articles';
    $result = mysqli_query($link, $query) or die('Запрос не удался: ' . mysqli_error());

    while ($row = mysqli_fetch_assoc($result))
    {
        echo $row['title'] . '<br>';
    }
        

    mysqli_free_result($result);

    mysqli_close($link);

?>