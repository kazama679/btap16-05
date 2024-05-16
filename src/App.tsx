// import React, { Component, useState } from 'react'
// import Class from './components/trenlop/Class'
// import A from './components/trenlop/A'
import Bai1 from './components/baitap/Bai1'
import Bai2 from './components/baitap/Bai2'
import Bai3 from './components/baitap/Bai3'
import Bai4 from './components/baitap/Bai4'
import Bai5 from './components/baitap/Bai5'
import Bai6 from './components/baitap/bài 6/Bai6'
import Bai7 from './components/baitap/Bai7'
import Bai8 from './components/baitap/Bai8'
import Bai9 from './components/baitap/Bai9'
import Bai10 from './components/baitap/Bai10'
import Bai11 from './components/baitap/Bai11'
import Bai12 from './components/baitap/Bai12'

// export default function App(){
//   const [active,setActive]=useState<boolean>(true);
//   const removeComponent=()=>{
//     setActive(!active);
//   }
//     return (
//       <div>
//         {/* 
//           lifecycle - vòng đời của class componenet 
//           functional component không có vòng đời
//           VD: 1 con người thì sẽ có vòng đời:
//           - Sinh ra => trưởng thành => chết
//           class component nó cx có vòng đời riêng của nó
//           4 giai đoạn:
//           - giai đoạn 1: khởi tạo (initial)
//             + đi khởi tạo props và state
//             => thực thi 1 lần
//           - giai đoạn 2: mounting (gắn vào UI(giao diện))
//             + 1. componentWillMount()
//             + 2. render()
//               không nên setState ở trong phương thức render này
//             + 3. componentDidmonut()
//             => thực thi 1 lần
//           - giai đoạn 3: updating (cập nhập)
//             => có thể thực hiện nhiều lần
//             - khi nào xảy ra update
//             => khi dữ liệu props nhận về thay đổi hoặc dữ liệu state thay đổi thì giai
//             đoạn undating xảy ra
//             => cung cấp các phương thức sau
//             1. ShouldComponentUpdate()
//             2. componentWillUpdate()
//             3. render()
//             4. componentDidUpdate()
//           - giai đoạn 4: unmounting (gỡ bỏ khỏi UI)
//             => thực hiện 1 lần
//             cung cấp phương thức
//             componentWillUnmount: thường dùng để xử lý các vấn đề như clearTimeout
//             để tránh rò rỉ bộ nhớ
//         */}
//         <h1>Trên lớp</h1>
//         <Class></Class>
//         {active ? <A></A> :''}
//         <button onClick={removeComponent}>tháo gỡ component A</button>

//       </div>
//     )
// }

import React, { Component } from 'react'
interface State {
  message: string;  
}
interface Props {}
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      message: 'Open the form'
    };
  }
  updateMessage = () => {
    this.setState({
      message: 'Close the Form'
    });
  }
  render() {
    return (
      <div>
        <h1>Bài 1</h1>
        <Bai1></Bai1>
        <h1>Bài 2</h1>
        <Bai2></Bai2>
        <h1>Bài 3</h1>
        <Bai3></Bai3>
        <h1>Bài 4</h1>
        <Bai4></Bai4>
        <h1>Bài 5</h1>
        <Bai5 message={this.state.message} />
        <button onClick={this.updateMessage}>Thay đổi thông điệp</button>
        <h1>Bài 6</h1>
        <Bai6></Bai6>
        <h1>Bài 7</h1>
        <Bai7></Bai7>
        <h1>Bài 8</h1>
        <Bai8></Bai8>
        <h1>Bài 9</h1>
        <Bai9></Bai9>
        <h1>Bài 10</h1>
        <Bai10></Bai10>
        <h1>Bài 11</h1>
        <Bai11></Bai11>
        <h1>Bài 12</h1>
        <Bai12></Bai12>
      </div>
    )
  }
}