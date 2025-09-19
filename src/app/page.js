import theme from "./theme/themeConfig";
import MainScreen from "./Screens/mainScreen/mainScreen";
const { ConfigProvider } = require("antd");


export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <MainScreen />
    </ConfigProvider>
  );
}
