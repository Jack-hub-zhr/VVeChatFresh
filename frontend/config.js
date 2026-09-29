// VVeChat API base.
// Empty string = same origin (served by the same Node/Express service).
// Falls back to the public Render backend when opened as a bare static file.
window.VVECHAT_API = window.VVECHAT_API || (location.protocol.startsWith('http') ? '' : 'https://vvechat.onrender.com');
