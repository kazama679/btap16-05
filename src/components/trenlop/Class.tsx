import React, { Component } from 'react'
interface Props{}
interface State{
    name:string,
    age:number,
    loading:boolean
    count:number
}
export default class Class extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            name:'Quang',
            age: 19,
            loading:true,
            count:0
        }
    }
    componenetDidMount():void{
      console.log('sau khi component được render lần đầu');
      /* 
        phương thức componentDidmount được chạy sau khi component render các UI
        được cập nhập vào DOM
        đây là nơi lí tưởng để thực hiện các việc sử lý như call API lấy dữ liệu và hiển thị.
      */
    }
    // dùng các phương thức mặc định React cung cấp
    componentWillMount():void{
      /* 
        trong phương thức componentWillMount có thể tính toán lại state
        nhưng lưu ý cái thời gian mà chuyển từ phương thức componentWillMount đến phương thức render rất nhanh,
        cho nên lưu ý việc cập nhập state
      */
    }

    /* 
      các phương thức cung cấp ở trong giai đoạn updating
    */
   shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    console.log('shouldComponentUpdate được gọi');
    //nếu buộc phải return về true || false
    // nếu không gọi phương thức ra thì mặc định là true
   }
   componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
      console.log('componentWillUpdate được gọi');
   }
   componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
       console.log('componentDidUpdate được gọi');
   }
    handleClick=()=>{
      this.setState({
        count:this.state.count+1
      })
    }
  render() {
    return (
      <div>
        <p>Xin chào {this.state.name}</p>
        <button onClick={this.handleClick}>thay đổi state</button>
        <p>Giá trị đếm: {this.state.count}</p>
      </div>
    )
  }
}
