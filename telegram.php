<?php

        
        
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if (!empty($_POST['nametg']) && !empty($_POST['phonetg'])){
  if (isset($_POST['nametg'])) {
    if (!empty($_POST['nametg'])){
  $name = strip_tags($_POST['nametg']);
  $nameFieldset = "Имя пославшего: ";
  }
}
 
if (isset($_POST['phonetg'])) {
  if (!empty($_POST['phonetg'])){
  $phone = strip_tags($_POST['phonetg']);
  $phoneFieldset = "Телефон: ";
  }
}
if (isset($_POST['emailtg'])) {
  if (!empty($_POST['emailtg'])){
  $email = strip_tags($_POST['emailtg']);
  $emailFieldset = "Email: ";
  }
}

if (isset($_POST['timetg'])) {
  if (!empty($_POST['timetg'])){
  $time = strip_tags($_POST['timetg']);
  $timeFieldset = "Время: ";
  }
}



$token = "767000534:AAFSX1_4jdRsrL2n-F4pRs9ftbf4cC2J-BE";
$chat_id = "452274244";
$arr = array(
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  $emailFieldset => $email,
   $timeFieldset => $time, 
  $themeFieldset => $theme
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};



        
        
        
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");



if ($sendToTelegram) {
  
  echo '<p class="success">Спасибо за отправку вашего сообщения!</p>';
    return true;
} else {
  echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
} else {
  echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
}
} else {
header ("Location: /");
}
 
 
 
 
?>

