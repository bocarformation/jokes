import { FlagKeys, Joke } from "../types/types";
import { CardBottom, CardTop, CardWrapper, Delivery, Setup } from "./styled";


interface JokeProps{
    joke: Joke;
}

const JokeItem: React.FC<JokeProps> = ({joke}) =>{
    const flags = Object.keys(joke.flags)
    .filter((key)=> joke.flags[key as FlagKeys])
    .join(" , ")

    return(
        <CardWrapper>
            <CardTop>
                {joke.type === "single" ? (
                    
                    <p>{joke.joke}</p>
                ):(
                    <>
                    <Setup>{joke.setup}</Setup>
                    <Delivery> {joke.delivery}</Delivery>
                    </>
                )
                }
            </CardTop>
            <CardBottom>
                <p>{joke.category}</p>
                <div> {flags}</div>
            </CardBottom>
        </CardWrapper>
    )

}

export default JokeItem