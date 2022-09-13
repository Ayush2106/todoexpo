import React from "react"
import {View , Text, TextInput , Button} from "react-native";

class App extends React.Component{
  state = {
    text:"",
    todo:[]
    
  }
  addTodo = ()=>{
    // this.setState({todo:this.state.text});
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo:arr , text:""});
  }
  deletetodo=(t)=>{
    var arr = this.state.todo;
    var pos=arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo:arr})
  }
  renderTodos = ()=>{
    return this.state.todo.map(t=>{
      return (
        <Text
        onPress={()=>{this.deletetodo(t)}}
        key={t} >{t}</Text>
    )
    })
  }
  render (){ 
    return(
      <View style = {styles.Container}>
      <Text style = {styles.Head}>ToDo App  </Text>
      <TextInput
      style = {styles.input}
placeholder = "Enter Text Here"
value={this.state.text}

onChangeText={(text) => this.setState({text})}
      />
      <Button
        title="Add Todo"
        color="green" 
onPress={this.addTodo}
      />

      {/* <Text>{this.state.todo}</Text> */}
      {this.renderTodos()}
      </View>
    )
  }
}
const styles = {
  Container:{
    flex:1,
    paddingTop:50
    // alignItems:'center',
    // justifyContent:'center'
  },
  Head:{
    paddingLeft:150,
    borderWidth:1,
    backgroundColor:'orange'
  },
  input:{
    height:40,
    borderColor:"green",
    borderWidth:1
  }
}
export default App;