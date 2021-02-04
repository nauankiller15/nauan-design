<?php
$nome		= $_POST["nome"];	// Pega o valor do campo Nome
$fone		= $_POST["fone"];	// Pega o valor do campo Telefone
$email		= $_POST["email"];	// Pega o valor do campo Email
$mensagem	= $_POST["mensagem"];	// Pega os valores do campo Mensagem

// Variável que junta os valores acima e monta o corpo do email

$Vai 		= "Nome: $nome\n\nE-mail: $email\n\nTelefone: $fone\n\nMensagem: $mensagem\n";

require_once("phpmailer/class.phpmailer.php");

define('GUSER', 'nauanxdesign@gmail.com');	// <-- Insira aqui o seu GMail
define('GPWD', 'bananaverde1234');		// <-- Insira aqui a senha do seu GMail

function smtpmailer($para, $de, $de_nome, $assunto, $corpo) { 
	global $error;
	$mail = new PHPMailer(); // create a new object
	$mail->IsSMTP(); // enable SMTP
	$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
	$mail->SMTPAuth = true; // authentication enabled
	$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
	$mail->Host = "smtp.gmail.com";
	$mail->Port = 465; // or 587
	$mail->IsHTML(true);
	$mail->Username = "nauanxdesign@gmail.com";
	$mail->Password = "bananaverde1234";
	$mail->SetFrom("nauanxdesign@gmail.com");
	$mail->Subject = $assunto;
	$mail->Body = $corpo;
	$mail->AddAddress($para);
	if(!$mail->Send()) {
		$error = 'Mail error: '.$mail->ErrorInfo; 
		return false;
	} else {
		$error = 'Mensagem enviada!';
		return true;
	}
}
// // Insira abaixo o email que irá receber a mensagem, o email que irá enviar (o mesmo da variável GUSER), 
// o nome do email que envia a mensagem, o Assunto da mensagem e por último a variável com o corpo do email.

 if (smtpmailer('nauanxdesign@gmail.com', 'nauanxdesign@gmail.com', 'Nome do Enviador', 'Assunto do Email', $Vai)) {

	Header("location:index.php"); // Redireciona para uma página de obrigado.

}
if (!empty($error)) echo $error;