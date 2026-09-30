# MyPlan

Web quản lý công việc cá nhân. Chạy trên GitHub Pages, lưu dữ liệu ở Supabase, cài được lên màn hình chính iPhone.

## Các file

| File | Vai trò |
|---|---|
| `index.html` | Toàn bộ giao diện và logic của app |
| `config.js` | Địa chỉ Supabase và publishable key (được phép công khai) |
| `sw.js` | Service worker: mở nhanh, nhận thông báo đẩy |
| `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png` | Thông tin và icon để cài app lên màn hình chính |
| `mascot.png`, `calendar.png`, `girl.png`, `ic-*.png`, `g-*.png` | Linh vật, hình minh hoạ và icon 3D cắt từ ảnh thiết kế |
| `design/` | Prompt tạo ảnh thiết kế (không cần tải lên GitHub) |
| `supabase/schema.sql` | Tạo bảng và quyền truy cập, chạy một lần trong SQL Editor |
| `supabase/lifeos.sql` | Phần 1 mô hình LifeOS: thêm cột cho việc, bảng khối giờ, thói quen, ngày (đã chạy 30/09/2026) |
| `supabase/lifeos-chuyen-du-lieu.sql` | Phần 2: chuyển các buổi cũ thành khối giờ, nhắc việc theo khối. Chạy một lần, cùng lúc đưa app mới lên |
| `supabase/functions/send-reminders/` | Hàm gửi nhắc việc trước 10 phút mỗi khối giờ |

## Mô hình LifeOS

- **Việc** (`tasks`): Mảng, trạng thái (Chưa làm · Đang làm · Chờ người khác · Backlog · Xong · Bỏ), Quan trọng, Khẩn cấp, Bắt đầu, Hạn, Ước tính. Tab Công việc xếp theo Khẩn cấp → Quan trọng → Hạn. Việc mới chưa có hạn vào Backlog.
- **Khối giờ** (`blocks`): một khoảng thời gian làm một việc, có tag (DEEP · ADMIN · PLAN · MEET · ME · PEOPLE · HOME), trạng thái (Dự kiến · Đã làm · Bỏ · Phát sinh), giờ Thực tế, 4D, Kết quả. Tab Lịch hiện các khối.
- **Chốt ngày** (nút trên Trang chủ và Lịch): đánh dấu từng khối, ghi giờ thực tế, 4D, thêm việc phát sinh, tích thói quen (`habits`, tối đa 3), viết nhật ký 3 câu (`days`), xem 4D so với mục tiêu 80/2/8/10 và dọn Backlog.

Xem thử giao diện với dữ liệu mẫu, không cần đăng nhập: https://mephanhpham-creator.github.io/myplan/#demo

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
