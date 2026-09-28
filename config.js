// Thông tin kết nối Supabase. Hai giá trị này được phép công khai trong code web.
// Không bao giờ đặt service_role / secret key hay mật khẩu database vào đây.
window.MYPLAN_CONFIG = {
  supabaseUrl: 'https://znaununvgkxumzfaqlaz.supabase.co',
  supabaseKey: 'sb_publishable_dv-ljVzsr1BNuwDwr4VacA_Thhhsr-n',
  // Khoá công khai để trình duyệt đăng ký nhận thông báo (khoá riêng nằm trên Supabase).
  vapidPublicKey: 'BGqkt6xMaYGTuFj87wJmeKBesW6jBVkjsptWUo7KnPd7aNyrJP9tvfIeJi54SXdVUd0MgwXFmssfm2UUiXfH6nI'
};
