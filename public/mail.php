<?php
$ALLOWED_ORIGIN = 'https://zyndra.pl';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: ' . $ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

function clean($val) {
    return htmlspecialchars(strip_tags(trim($val ?? '')));
}

function cleanList($arr) {
    if (!is_array($arr)) return [];
    return array_map('clean', $arr);
}

$catalogSizeLabels = [
    'do-1000'      => 'do 1000 indeksów',
    '1000-5000'    => '1000–5000 indeksów',
    'powyzej-5000' => 'powyżej 5000 indeksów',
];

$name        = clean($data['name']);
$company     = clean($data['company']);
$phone       = clean($data['phone']);
$email       = clean($data['email']);
$service     = clean($data['service']);
$catalogRaw  = clean($data['catalogSize']);
$catalogSize = $catalogSizeLabels[$catalogRaw] ?? $catalogRaw;
$systems     = cleanList($data['systems'] ?? []);
$message     = clean($data['message']);

if (empty($name) || empty($email) || empty($phone) || empty($service)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Brakuje pol']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Zly email']);
    exit;
}

if (empty($catalogRaw) || empty($systems)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Brakuje danych kwalifikujacych']);
    exit;
}

$to      = 'kontakt@zyndra.pl';
$subject = "=?UTF-8?B?" . base64_encode("[Zyndra] Nowy lead - {$service}") . "?=";

$body  = "Nowe zapytanie kwalifikujace ze strony Zyndra\n";
$body .= "========================================\n\n";
$body .= "Imie:      {$name}\n";
if ($company) $body .= "Firma:     {$company}\n";
$body .= "Telefon:   {$phone}\n";
$body .= "E-mail:    {$email}\n\n";
$body .= "Obszar:    {$service}\n";
$body .= "Baza:      {$catalogSize}\n";
$body .= "Systemy:   " . implode(', ', $systems) . "\n\n";
$body .= "Wiadomosc:\n{$message}\n\n";
$body .= "Wyslano: " . date('Y-m-d H:i:s') . "\n";

$headers  = "From: Zyndra <kontakt@zyndra.pl>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$sent = mail($to, $subject, $body, $headers);
echo json_encode(['success' => (bool)$sent]);
?>
