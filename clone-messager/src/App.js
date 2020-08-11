import React, {useState, useEffect} from 'react';
import './App.css';

import {Button, FormControl, InputLabel, Input} from '@material-ui/core';

import Message from './Components/Message/Message';
import db from './DataBase/firebase'

function App() {
  // Ввод пользователя
  const [input,
    setInput] = useState("")

  // Все сообщения
  const [messages,
    setMessages] = useState([])

  // Имя пользователя
  const [userName,
    setUserName] = useState("")

  // Выполнение кода над состоянием
  useEffect(() => {
    // Выполнение кода здесь Если Зависимость пуста, код выполняется ОДИН раз, при
    // загрузке компонента Если Зависимость изменяется, мы каждый раз выполняем этот
    // код
    console.log('...')
  }, [] ) // Зависимость(часть состояния)

  // Для подключения ДБ
  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [] )

  // Для записи имени пользователя
  useEffect(() => {
    setUserName(prompt('Пожалуйста, введите Ваше имя...'))
  }, [] )

  // Для отправки сообщений
  const sendMessage = (e) => {
    e.preventDefault()

    // setMessages([
    //   ...messages, {
    //     username: userName,
    //     text: input
    //   }
    // ])

    // Add a new document in collection "cities"
    db.collection("messages").doc().set({
      username: userName,
      text: input
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });

    setInput('')
  }

  return (
    <div className="App">
      <h2>Приветствую, {userName}</h2>
      
      <form>
        <FormControl>
          <InputLabel>Ваше сообщение...</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)}/>

          <Button
            disabled={!input}
            variant="outlined"
            color="primary"
            onClick={sendMessage}
            type="submit"> 
            Отправить
          </Button>
        </FormControl>
      </form>

      {messages.map(message => (<Message username={userName} message={message}/>))}
    </div>
  );
}

export default App;
