import zipfile
import os

# ZIP dosyasına eklenecek dosya yapısını oluştur
project_dir = "/mnt/data/adisyon_sistemi_web"
os.makedirs(project_dir, exist_ok=True)

# Örnek dosyaları oluştur (gerçek sistem için bunlar HTML, CSS, JS dosyaları olmalı)
index_html = """
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lüx Sarıyer Börek&CAFE</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Menüye Hoş Geldiniz</h1>
    <div id="menu">
        <!-- Menü içeriği buraya dinamik olarak gelecek -->
    </div>
    <script src="app.js"></script>
</body>
</html>
"""

style_css = """
body {
    background-color: #000;
    color: #FFD700;
    font-family: Arial, sans-serif;
    text-align: center;
}
"""

app_js = """
document.getElementById('menu').innerHTML = '<p>Menü burada gösterilecek.</p>';
"""

# Dosyaları yaz
with open(os.path.join(project_dir, "index.html"), "w") as f:
    f.write(index_html)

with open(os.path.join(project_dir, "style.css"), "w") as f:
    f.write(style_css)

with open(os.path.join(project_dir, "app.js"), "w") as f:
    f.write(app_js)

# ZIP dosyasını oluştur
zip_path = "/mnt/data/adisyon_sistemi.zip"
with zipfile.ZipFile(zip_path, "w") as zipf:
    for root, dirs, files in os.walk(project_dir):
        for file in files:
            file_path = os.path.join(root, file)
            zipf.write(file_path, arcname=os.path.relpath(file_path, project_dir))

zip_path
