### Diary_Cat
1. App.js, Login.js, Sign_up.js, MainPage.js, Edit_profile_setting.js, Profile_setting.js 修改
2. 於資料夾最上層，新增 FirebaseConfig.js 檔，連接 authentication
3. 於 screens 資料夾中，新增 AuthContext.js 檔
4. 登入時須將整個信箱名稱完整輸入
5. 於忘記密碼輸入 email 處，若是輸入如：@gmail.co 時，不會警告格式錯誤，而是警告不存在此 email
6. 要知道目前誰是使用者，如下：
import { useAuth } from "../screens/AuthContext";
const { user } = useAuth();
然後再用Text測試，如：Text 元素中，可以用{user.email}, {user.uid}等測試