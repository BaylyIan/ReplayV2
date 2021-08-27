import React, { useState, useEffect, useContext } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { PageContext } from "../utils/context";
import { useRouter } from 'next/router'

//comps


//utills


export default function Home() {

  const router = useRouter()

  const { user } = useContext(PageContext)

  console.log(user, 'user on page')

  return (
    <div>
    <p>{user.name}</p>
    <div>This is the dashboard, and the page that will open when app is run</div>
    </div>
  )
}
