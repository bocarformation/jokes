import React, { useState} from "react"
import './App.css';
import JokeItem from './components/Joke';
import jokesImg from './images/jokes.png'
import { Joke } from "./types/types"
import { Button, Image, Form, Header, Row, Search, Wrapper } from './components/styles';
import axios from "axios";

const BASE_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit"

const App: React.FC = () => {
const [jokes, setJokes] = useState<Joke[]>([])
const [search, setSearch] = useState<string>("")
const [error, setError] = useState<boolean>(false)
const [message, setMessage] = useState<string>("")


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
  setSearch(e.target.value)
}

const getJokes = async (e: React.FormEvent<HTMLFormElement>) => {

  e.preventDefault();
  const ENDPOINT = `${BASE_URL}&contains=${search}&amount=10`
  const { data } = await axios.get(ENDPOINT)
  if(data.error){
    setError(true)
    setMessage(data.message)
    setJokes([])
  }else {
    setError(false)
    setJokes(data.jokes)
  }
  setSearch("")
}
  return (
    <div>
      <Wrapper>
        <Row>
          <Header> Jokes </Header>
          <Image src={jokesImg} alt="jokes" />
        </Row>
        <Form onSubmit={getJokes}>
          <Search
            type="text"
            placeholder='Recherche'
            value={search} 
            onChange={handleChange}/>
            <Button type='submit'> Rechercher </Button>
        </Form>
        {/* AFFICHAGE DES JOKES*/}
        <div>

          {
            error && <p>{`${message}`}</p>
          }
           { jokes.length > 0 &&
          jokes.map(joke => <JokeItem key={joke.id} joke={joke}/>)
            }
        </div>
     
      </Wrapper>
    </div>
  );
}

export default App;
