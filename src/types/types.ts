export type Flag = {
    nsfw: boolean;
    religius: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean
}

export type FlagKeys = "political"

export type Joke = {
    id: number;
    safe: boolean;
    flags: Flag; 
    lang: "en";
    setup?: string;
    delivery?: string;
    type: "single" | "twopart";
    joke?: string;
    category: "Any" | "Misc" | "Programming" | "Dark" | "Pun" 
                    | "Christmas" |"Spooky"
}