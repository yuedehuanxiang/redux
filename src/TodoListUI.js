// import React, { Component } from "react";
import React from "react";
import { Input, Button, List } from "antd";

// 无状态组件会比class形式写的组件性能要更好一些
const TodoListUI = props => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <div>
        <Input
          onChange={props.handleInputChange}
          value={props.inputValue}
          placeholder="todo info"
          style={{ width: "300px", marginRight: "10px" }}
        />
        <Button onClick={props.handleBtnClick} type="primary">
          提交
        </Button>
      </div>
      <List
        style={{ marginTop: "10px", width: "300px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleItemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: "10px", marginLeft: "10px" }}>
//         <div>
//           <Input
//             onChange={this.props.handleInputChange}
//             value={this.props.inputValue}
//             placeholder="todo info"
//             style={{ width: "300px", marginRight: "10px" }}
//           />
//           <Button onClick={this.props.handleBtnClick} type="primary">
//             提交
//           </Button>
//         </div>
//         <List
//           style={{ marginTop: "10px", width: "300px" }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               onClick={index => {
//                 this.props.handleItemDelete(index);
//               }}
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }

export default TodoListUI;
