<?php
$db_name = 'u0764370_handmade';
$mail_to = 'denis.afer@gmail.com';
$mail_subject = 'Подписка на новости';
$user_email = $_POST["email"];

if ($user_email) {

    $mail_message = $user_email . ' подписался на рассылку новостей на сайте handmade-soap.ru';

    $link = mysqli_connect('localhost', 'u0764370_default', 'bdmLv8L!', $db_name) or die();
    $query = "INSERT INTO subscribers (id, email) VALUES (NULL, '$user_email')";
    $result = mysqli_query($link, $query);

    if ($result) {
        mail($mail_to, $mail_subject, $mail_message);

        mysqli_free_result($result);
        mysqli_close($link);
    }
}