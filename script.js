document.addEventListener('DOMContentLoaded', () => {
    const curtainContainer = document.getElementById('curtain-container');
    const audio = document.getElementById('congrats-audio');
    const body = document.body;

    curtainContainer.addEventListener('click', () => {
        // التأكد من أن الحدث يقع مرة واحدة فقط
        if (!curtainContainer.classList.contains('open')) {
            // إضافة كلاس 'open' لفتح الستارة
            curtainContainer.classList.add('open');
            
            // إضافة كلاس لإظهار المحتوى
            body.classList.add('content-visible');
            
            // السماح بالتمرير إذا كان المحتوى طويلاً
            body.style.overflow = 'auto';

            // تشغيل ملف الصوت
            audio.play().catch(error => {
                // معالجة الحالات التي يمنع فيها المتصفح تشغيل الصوت تلقائياً
                console.log("لم يتمكن المتصفح من تشغيل الصوت تلقائياً.", error);
                alert("اضغط 'موافق' لتشغيل موسيقى التهنئة!");
                audio.play();
            });
        }
    });
});
