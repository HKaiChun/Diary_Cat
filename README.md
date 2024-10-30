### Diary_Cat
1. 個人檔案編輯與設定：
目前正在實作個人檔案編輯功能及相關設定選項。

2. 登入要求：
使用者登入時必須完整輸入其電子郵件地址。

3. 密碼重設驗證：
在「忘記密碼」的電子郵件輸入欄位中，若輸入不完整的域名（例如 @gmail.co），系統會顯示「此電子郵件不存在」的警告，而非格式錯誤。

4. 測試目前使用者資訊：
可以使用以下程式碼來獲取並顯示當前使用者資訊：
import { useAuth } from "../screens/AuthContext";
const { user } = useAuth();

測試時可將 user.email 或 user.uid 放入 <Text> 元素中顯示，例如：
<Text>{user.email}</Text>
<Text>{user.uid}</Text>