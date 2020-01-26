<?php $db_name = 'u0764370_handmade';

$link = mysqli_connect('localhost', 'u0764370_default', 'bdmLv8L!', $db_name) or die('Не удалось соединиться: ' . mysqli_error());
mysqli_set_charset($link, "utf8");

$query = 'SELECT * FROM articles';
$result = mysqli_query($link, $query) or die('Запрос не удался: ' . mysqli_error());?>

<?php while ($row = mysqli_fetch_assoc($result)):?>

    <article class="blog-article" id="article-<?= $row['id'] ?>">
        <header class="blog-article__header">
            <h2 class="blog-article__title"><?= $row['title'] ?></h2>
            <span class="blog-article__subtitle"><?= $row['subtitle'] ?></span>
        </header>

        <div class="blog-article__content">
            <img src="<?= $row['image'] ?>" alt="мыло ручной работы" class="blog-article__image">
            <div class="blog-article__text"><?= $row['text'] ?></div>
            
        </div>
    </article>
    
<?php endwhile ?>
 
    
<?php
mysqli_free_result($result);
mysqli_close($link);