import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Linking, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import axios from 'axios';
import cheerio from 'react-native-cheerio';

// '有貨商品': cond=sale
// '精準度': 'rnk/dc'
// '價錢由高至低': 'prc/dc'
// '價錢由低至高': 'prc/ac'
const DOMAIN = 'https://24h.pchome.com.tw/';
const ty_url = (keyword) => `${DOMAIN}search/v4.3/all/results?q=${encodeURIComponent(keyword)}`;

async function searchPChome(keyword) {
  const url = ty_url(keyword);
  const res = await axios.get(url);
  const doc = res.data;
  const Page = doc.TotalPage;
  let all_data = [];
  let id_counter = 1; // 初始化 id 計數器

  for (let num = 1; num <= 10; num++) { // Page + 1
    const pg_url = `${url}&page=${num}&sort=rnk/dc&cond=sale`;
    const data = await PChomeList(pg_url, id_counter);
    all_data = all_data.concat(data);
    id_counter += data.length; // 更新 id 計數器
  }

  return all_data;
}

async function PChomeList(pg_url, start_id) {
  const res = await axios.get(pg_url);
  const doc = res.data;
  let data_list = [];
  let id_counter = start_id; // 使用傳入的起始 id

  for (const product of doc.Prods) {
    const data = {
      id: id_counter, // 添加 id 屬性
      Name: product.Name,
      url: `https://24h.pchome.com.tw/prod/${product.Id}`,
      price: "$"+product.Price,
      img: `https://img.pchome.com.tw/cs${product.PicS}`
    };
    data_list.push(data);
    id_counter++; // 更新 id 計數器
  }

  return data_list;
}

//momo
const STORE = 'momo';
const MOMO_MOBILE_URL = 'https://m.momoshop.com.tw/';
const MOMO_QUERY_URL = MOMO_MOBILE_URL + 'search.momo?searchKeyword=%s&curPage=%d&searchType=1';
const USER_AGENT_VALUE = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36';

async function getWebContent(query, page = 1) {
  const encodedQuery = encodeURIComponent(query);
  const queryUrl = MOMO_QUERY_URL.replace('%s', encodedQuery).replace('%d', page);
  const headers = { 'User-Agent': USER_AGENT_VALUE };

  try {
    const response = await axios.get(queryUrl, { headers });
    return cheerio.load(response.data);
  } catch (error) {
    console.error('Error fetching web content:', error);
    return null;
  }
}

async function searchMomo(query) {
  const items = [];
  let i = 0;
  let page = 1;
  let hasMorePages = true;

  while (page <= 10 && hasMorePages) {
    const $ = await getWebContent(query, page);
    if (!$) break;

    const pageItems = [];
    $('article.prdListArea ul li').each((index, element) => {
      const itemName = $(element).find('h3.prdName').text();
      let itemPrice = $(element).find('span.ec-current-price.price ').text().replace(',', '').trim();
      if (!itemPrice) return; // skip if no price
      // console.log(itemPrice);
      if (!itemPrice.includes('$')) {
        itemPrice = '$' + itemPrice;
      }

      const itemUrl = MOMO_MOBILE_URL + 'goods.momo?i_code=' + $(element).find('a').attr('goodscode');
      const itemImgUrl = $(element).find('img.goodsImg.lazy.lazy-loaded').attr('data-original');
      
      const item = {
        id: i,
        name: itemName,
        price: itemPrice,
        url: itemUrl,
        img_url: itemImgUrl
      };
      // console.log(item);
      pageItems.push(item);
      i++;
    });

    if (pageItems.length === 0) {
      hasMorePages = false;
    } else {
      items.push(...pageItems);
      page++;
    }
  }

  return items;
}


// UI
const Search_product_results = ({route}) => {
  const navigation = useNavigation();
  const { data } = route.params;
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true); // 添加 loading 狀態

  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        let results;
        if (data.selectedShop === "PChome") {
          results = await searchPChome(data.search);
        } else {
          results = await searchMomo(data.search);
        }
        setItems(results);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false); // 加載完成後設置 loading 為 false
      }
    };

    fetchItems();
  }, [data.search]);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {/* 返回 */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Search_products")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/1.png")}
          />
        </TouchableOpacity>
        <Text style={[styles.footerText]}>CatMinder</Text>
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="deepskyblue" /> 
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <ScrollView>
          <View style={styles.productList}>
            {items.map((item) => (
              <View key={item.id} style={styles.itemContainer}>
                <Image source={{ uri: item.img || item.img_url }} style={styles.itemImage} />
                <Text style={styles.itemName}>{item.Name || item.name}</Text>
                <View style={styles.priceAndButtonContainer}>
                  <Text style={styles.itemPrice}>{item.price || item.original_price}</Text>
                  <TouchableOpacity 
                    style={styles.itemButton}
                    onPress={() => Linking.openURL(item.url)}
                  >
                    <Text style={styles.buttonText}>查看詳情</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Color.colorLightgoldenrodyellow, // Light goldenrod yellow
    backgroundColor: "#FFFAF4",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  footerText: {
    color: Color.colorGray_500, 
    left: "50%",
    width: 242,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorGray_500,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  productList: {
    flexDirection: 'row', // 每行顯示兩個產品
    flexWrap: 'wrap', // 自動換行
    justifyContent: 'space-between', // 使產品在一行內均勻分佈
  },
  itemContainer: {
    width: '48%', // 使每個產品佔據一行的一半
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    // backgroundColor: Color.colorGainsboro_200, // 產品顏色
    backgroundColor: "#FFE6D9",
    borderRadius: Border.br_base,
    padding: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 10, // 添加圖片與文字的間距
  },
  itemName: {
    fontSize: 15,
    color: Color.colorBlack,
    textAlign: 'center', // 居中對齊產品名稱
    marginBottom: 10, // 添加名稱與價格/按鈕的間距
  },
  priceAndButtonContainer: {
    flexDirection: 'column', // 使價格和按鈕上下對齊
    alignItems: 'center', // 垂直居中
    marginTop: 10, // 與產品名稱保持間距
  },
  itemPrice: {
    fontSize: 17, // 增大字體
    color: "darkred", // 改變顏色
    fontWeight: 'bold', // 加粗
    marginBottom: 5, // 價格與按鈕的間距
  },
  itemButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: Border.br_base,
  },
  buttonText: {
    color: 'dodgerblue',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Color.colorLightgoldenrodyellow, // 與主背景相同
    backgroundColor: "#FFFAF4",
    paddingHorizontal: 10,
    paddingTop: 5,
    marginTop: 10, // 確保 loading 在 header 下方
  },
  loadingText: {
    marginTop: 10,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_500,
  }
});

export default Search_product_results;