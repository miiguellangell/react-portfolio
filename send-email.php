<?php
// Debug para verificar que el archivo se está ejecutando
error_log("send-email.php ejecutándose");

// Headers CORS y content type más completos
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.miguelangel.icu');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, Origin');
header('Access-Control-Allow-Credentials: true');

// Manejar preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Recibir datos del formulario
        $input = file_get_contents('php://input');
        error_log("Datos recibidos: " . $input);
        
        $data = json_decode($input, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception('Error al decodificar JSON');
        }
        
        $name = isset($data['name']) ? trim($data['name']) : '';
        $email = isset($data['email']) ? trim($data['email']) : '';
        $message = isset($data['message']) ? trim($data['message']) : '';
        
        // Validar datos
        if (empty($name) || empty($email) || empty($message)) {
            http_response_code(400);
            echo json_encode(['error' => 'Todos los campos son requeridos']);
            exit;
        }
        
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['error' => 'Email inválido']);
            exit;
        }
        
        // Configurar email
        $to = "miiguellangellmc@gmail.com";
        $subject = "Nuevo mensaje desde tu portfolio - " . $name;
        
        // Crear mensaje
        $email_message = "Nuevo mensaje desde tu portfolio web:\n\n";
        $email_message .= "Nombre: " . $name . "\n";
        $email_message .= "Email: " . $email . "\n\n";
        $email_message .= "Mensaje:\n" . $message . "\n\n";
        $email_message .= "---\n";
        $email_message .= "Enviado desde: " . $_SERVER['HTTP_HOST'] . "\n";
        
        // Headers del email
        $headers = "From: noreply@miguelangel.icu\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // Enviar email
        if (mail($to, $subject, $email_message, $headers)) {
            error_log("Email enviado correctamente");
            echo json_encode(['success' => 'Mensaje enviado correctamente']);
        } else {
            error_log("Error al enviar email");
            http_response_code(500);
            echo json_encode(['error' => 'Error al enviar el mensaje']);
        }
        
    } catch (Exception $e) {
        error_log("Excepción: " . $e->getMessage());
        http_response_code(500);
        echo json_encode(['error' => 'Error interno del servidor: ' . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
}
?>