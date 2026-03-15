# Quá trình tạo nên software-m4

[https://mobirise.com/extensions/softwarem4/software-app/#](https://mobirise.com/extensions/softwarem4/software-app/#)

+) Mở thư mục định dùng để chạy dự án 

Mở terminal, chạy lệnh:

```jsx
 npx create-react-app software-m4
```

Chờ 1 lúc sẽ tạo ra dự án software-m4, gõ lệnh sau để vào dự án

```jsx
cd software-m4
```

Chạy 

```jsx
npm start
```

Chương trình sẽ được khởi động với cổng 3000

+) Lúc này chương trình đồng thười đã được cài git vào

+) Vào thư mục src/index.js thay đoạn code 

```jsx
<React.StrictMode>
    <App />
</React.StrictMode>
```

bằng 

```jsx
<App />
```

+) Vào thư mục App.js xóa hết đoạn 

```jsx
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
```

thay bằng đoạn 

```jsx
<>
   <Home />
</>
```

và thêm dòng sau ở trên đầu file để import Home vào 

```jsx
import Home from "./page/Home";
```

+) Ta đi thêm thư mục /page/Home/index.js trong src

Ở đây ta sẽ lưu những thứ liên quan đến html 

+) Để cài thư viện icon chạy 

```jsx
npm i react-icons
```