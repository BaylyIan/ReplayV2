import React, { useState, useEffect, useContext} from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { PageContext } from "../utils/context";

import { Main, Left, Right } from '../pageStyles/Home/style'

import jsCookie from 'js-cookie';

export default function Home() {

  const [userData, setUserData] = useState({
    username:'',
    pass:''
  })

  const { setUser } =  useContext(PageContext);

  const handleLogin = async () => {
    const result = await axios.post('https://localhost:4200/api/users/login', {
      username:userData.username,
      password:userData.pass
    })

    const getUser = async ({token}) => {
      const result = await axios.get('http://localhost:4200/api/profile', {token: token});
      return result
    }

    if(resp.data.token) {
      const token = resp.data.token;
      axios.defaults.headers.common['Authorization'] = token;
      sessionStorage.setItem("token", token);

      console.log("identifier/token success", resp.data);
      const user = getUser(token)
      console.log(user, 'user')
      //set user with context
      
  } else {
      console.log('error')
  }
}

  return (
    <Main>
      <Left>
     
      </Left>
      <Right>
       
      </Right>
    </Main>
  )
}
