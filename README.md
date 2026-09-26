# MyPlan

Web quản lý công việc cá nhân. Chạy trên GitHub Pages, lưu dữ liệu ở Supabase, cài được lên màn hình chính iPhone.

## Các file

| File | Vai trò |
|---|---|
| `index.html` | Toàn bộ giao diện và logic của app |
| `config.js` | Địa chỉ Supabase và publishable key (được phép công khai) |
| `sw.js` | Service worker: mở nhanh, nhận thông báo đẩy |
| `manifest.webmanifest`, `icons/` | Thông tin để cài app lên màn hình chính |
| `assets/` | Linh vật, hình minh hoạ và icon 3D cắt từ ảnh thiết kế |
| `design/` | Prompt tạo ảnh thiết kế (không cần tải lên GitHub) |

Xem thử giao diện với dữ liệu mẫu, không cần đăng nhập: thêm `#demo` vào cuối địa chỉ, ví dụ `https://<username>.github.io/myplan/#demo`.
| `supabase/schema.sql` | Tạo bảng và quyền truy cập, chạy một lần trong SQL Editor |

## Cài đặt lần đầu

1. **Supabase → SQL Editor → New query**: dán nội dung `supabase/schema.sql`, bấm **Run**.
2. **GitHub → New repository** tên `myplan`, chọn **Public**. Bấm **uploading an existing file**, kéo toàn bộ file và thư mục trong folder này vào, rồi bấm **Commit changes**.
3. **Repo → Settings → Pages**: Source chọn **Deploy from a branch**, branch **main**, thư mục **/ (root)**, bấm **Save**. Sau 1–2 phút web có địa chỉ `https://<username>.github.io/myplan/`.
4. **Supabase → Authentication → URL Configuration**: đặt **Site URL** là địa chỉ ở bước 3, thêm địa chỉ đó vào **Redirect URLs**.
5. Mở web, bấm **Tạo tài khoản**, xác nhận qua email, rồi đăng nhập.
6. **Supabase → Authentication → Sign In / Providers**: tắt **Allow new users to sign up** để người lạ không tạo được tài khoản.
7. iPhone: mở web bằng **Safari → Chia sẻ → Thêm vào MH chính**.

## Cập nhật code

Sửa file rồi upload đè lên repo (hoặc dùng `git push`). GitHub Pages tự cập nhật sau khoảng 1 phút.

Không bao giờ đưa **service_role / secret key** hay mật khẩu database vào repo.
