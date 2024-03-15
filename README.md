# React與Nodejs
## 以javascript為基礎實作UI介面

預想首頁、商品資料、購物車三個介面<br>
先行安裝react 參考網址：<br>
[安裝react](https://github.com/facebook/create-react-app?tab=readme-ov-file#creating-an-app)


利用Router、Link工具,來連接不同的component並且切換<br>
此處注意需要安裝工具react router<br>
### INSTALL:<br>
在Terminal cd 到自己建立my-app的資料夾底下 'npm install react-router-dom' 指令

預想圖示：<br>
![reactFlow](reactFlow.png)

css樣式設計與圖片皆放置在public資料夾內
![cssandpics](cssandpics.png)

設想可能會需要再多個component都需要使用以至於在各個路徑上加上process.env.PUBLIC_URL

先試做抓取api 網址為[demoapi](https://chanweichang.github.io/demoapi/product.json)

在console.log發現因為useState在資料變動時會重新render頁面以至於發生無窮迴圈，所以使用Hook工具裡的另一個 useEffect method 再給予不同的參數下讓fetch api只要執行一次就好。

在首頁選擇或是在資料頁面點選加入購物車，再切換頁面要能夠獲取相同的資料，最簡單直覺的方法就是直接將整個app.js都納入資料分享的範圍
![context](context.png)












# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
