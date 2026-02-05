/**
 * MANDO CENTRAL - TalkZa
 * Maneja Header, Footer, Mascota y Botones de Acceso.
 */

// 1. ESTRUCTURA DEL MENÚ (Header con Login y Registro)
const headerHTML = `
<header id="main-nav">
    <div class="container nav-wrapper">
        <a href="index.html" class="logo">
            <img src="https://cdn.shopify.com/s/files/1/0548/8305/7861/files/TALK_ZA_logo.png" alt="TalkZa">
        </a>
        <nav>
            <div class="dropdown">
                <a href="#" class="drop-link">FUNCIONES <i class="ri-arrow-down-s-line"></i></a>
                <div class="dropdown-content">
                    <a href="crm-inbox.html"><i class="ri-chat-smile-2-line"></i> CRM + Inbox Centralizado</a>
                    <a href="widget-de-chat.html"><i class="ri-robot-line"></i> Widget de Chat e IA</a>
                    <a href="whatsapp-marketing.html"><i class="ri-whatsapp-line"></i> WhatsApp API & Marketing</a>
                    <a href="reportes.html"><i class="ri-bar-chart-box-line"></i> Reportes y Métricas</a>
                    <a href="multiagente.html"><i class="ri-group-line"></i> Sistema Multiagente</a>
                    <a href="entrena-tu-ia.html"><i class="ri-brain-line"></i> Entrena tu IA propia</a>
                </div>
            </div>
            <a href="index.html#beneficios">BENEFICIOS</a>
            <a href="index.html#precios">PLANES</a>
            <a href="index.html#faq">FAQ</a>
            <a href="blog.html">BLOG</a>
        </nav>
        
        <div class="nav-auth-buttons" style="display: flex; align-items: center; gap: 15px;">
            <a href="#" class="btn-login" style="
                color: #ffffff; 
                text-decoration: none; 
                font-weight: 700; 
                font-size: 0.85rem; 
                padding: 10px 20px; 
                border-radius: 50px; 
                border: 1px solid rgba(255,255,255,0.3);
                transition: 0.3s;
            ">LOGIN</a>
            <a href="index.html#precios" class="btn-register" style="
                background: #6366f1; 
                color: #ffffff; 
                text-decoration: none; 
                font-weight: 800; 
                font-size: 0.85rem; 
                padding: 10px 25px; 
                border-radius: 50px; 
                box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
                transition: 0.3s;
            ">REGISTRARSE</a>
        </div>
    </div>
</header>
`;

// 2. ESTRUCTURA DEL FOOTER (Se mantiene igual)
const footerHTML = `
<footer class="main-footer" style="background: #fff; color: #1e293b; padding-top: 60px; border-top: 1px solid #e2e8f0;">
    <div class="footer-bottom container" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; padding-bottom: 40px;">
        <div class="footer-col">
            <img src="https://cdn.shopify.com/s/files/1/0548/8305/7861/files/TALK_ZA_logo.png" alt="TalkZa" style="height: 45px;">
        </div>
        <div class="footer-col" style="display: flex; flex-direction: column; gap: 12px;">
            <h4 style="font-weight: 800; font-size: 0.9rem; margin-bottom: 10px; color: #0f172a;">NAVEGACIÓN</h4>
            <a href="blog.html" style="text-decoration: none; color: #64748b; font-size: 0.95rem;">Blog</a>
            <a href="nosotros.html" style="text-decoration: none; color: #64748b; font-size: 0.95rem;">Nosotros</a>
            <a href="centro-de-ayuda.html" target="_blank" style="
                margin-top: 10px;
                display: inline-block;
                background: #6366f1;
                color: #fff;
                padding: 10px 20px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 800;
                font-size: 0.85rem;
                text-align: center;
                transition: 0.3s;
            ">CENTRO DE AYUDA</a>
        </div>
        <div class="footer-col" style="display: flex; flex-direction: column; gap: 12px;">
            <h4 style="font-weight: 800; font-size: 0.9rem; margin-bottom: 10px; color: #0f172a;">CONTACTO</h4>
            <p style="color: #64748b; font-size: 0.95rem; margin: 0;">info@Talkza.ai</p>
            <p style="color: #64748b; font-size: 0.95rem; margin: 0;">🟢 +54 9 11 4161-9661</p>
        </div>
        <div class="footer-col" style="display: flex; flex-direction: column; gap: 12px;">
            <h4 style="font-weight: 800; font-size: 0.9rem; margin-bottom: 10px; color: #0f172a;">DIRECCIÓN</h4>
            <p style="color: #64748b; font-size: 0.95rem; line-height: 1.4; margin: 0;">Calle 47 nro. 6750,<br>Plátanos, Buenos Aires,<br>Argentina</p>
        </div>
    </div>
    <div class="legal-bar" style="border-top: 1px solid #e2e8f0; padding: 25px 0; text-align: center;">
        <p style="color: #94a3b8; font-size: 0.85rem; font-weight: 600; margin: 0;">ZENBRO – Desarrollos digitales</p>
    </div>
</footer>
`;

// 3. ESTRUCTURA DE LA MASCOTA FLOTANTE (Se mantiene igual)
const mascotaHTML = `
<div id="talkza-mascota" class="mascota-flotante" onclick="window.open('https://wa.me/5491154789828', '_blank')" style="
    position: fixed; bottom: 30px; right: 30px; z-index: 9999; display: flex; flex-direction: column; align-items: center; cursor: pointer; text-align: center;
">
    <div class="burbuja-chat" style="
        background: #10b981; color: white; padding: 8px 20px; border-radius: 20px; font-size: 0.9rem; font-weight: 900; margin-bottom: 5px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); position: relative;
    ">HABLEMOS</div>
    <img src="https://cdn.shopify.com/s/files/1/0548/8305/7861/files/ChatGPT_Image_2_feb_2026_11_54_08_a.m..png?v=1770044067" alt="TalkZa Flotante" style="
        width: 100px; height: auto; border-radius: 50%; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));
    ">
    <p style="color: #10b981; font-weight: 900; font-size: 0.75rem; margin-top: 5px; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">CLICK AQUI</p>
</div>
`;

// 4. LÓGICA DE INYECCIÓN
document.addEventListener("DOMContentLoaded", function() {
    const headerElement = document.getElementById('header-placeholder');
    const footerElement = document.getElementById('footer-placeholder');

    if (headerElement) headerElement.innerHTML = headerHTML;
    if (footerElement) footerElement.innerHTML = footerHTML;
    document.body.insertAdjacentHTML('beforeend', mascotaHTML);

});

// === FIX DEFINITIVO SUBMENU (GITHUB + LOCAL) ===
const style = document.createElement("style");
style.innerHTML = `
#main-nav,
.nav-wrapper,
nav,
.dropdown {
    overflow: visible !important;
}

.dropdown-content {
    display: none;
    position: absolute;
    z-index: 999999 !important;
}

.dropdown:hover .dropdown-content {
    display: block !important;
}
`;
document.head.appendChild(style);
