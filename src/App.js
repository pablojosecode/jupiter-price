import logo from './logo.svg';
import './App.css';
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import Entry from './Entry';
import AddToken from './AddToken';
import { useState } from "react";
import { Token, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token'; // version 0.1.x
import { PublicKey } from '@solana/web3.js';

const Route = "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So";
const publicKey = "6YNvv1iv8354CopYGdeR5rF3sbue8ESjPeukXR54KuUQ";

// get serialized transactions for the swap
const transactions = () =>  {
  return fetch('https://quote-api.jup.ag/v3/swap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // route from /quote api
      route: Route,
      userPublicKey: publicKey,
    })
  })
  .json()
}

function App() {

  const [tok, setTok] = useState("");
  const [ListOfTokens, setListOfTokens] = useState(["USDC"]);
  const [listItems, setListItems] = useState(ListOfTokens.map((token) =>
    <Entry value={token} />
  ));


  const reset = () => {
    setListOfTokens([]);
    setListItems([]);
  }


  const updateToken = (value) => {
    setTok(value);
    ListOfTokens.push(value);
    console.log(ListOfTokens);
    setListItems(ListOfTokens.map((token) =>
      <Entry value={token} />
    ));

  }

  return (
    <div className="App">
      <Stack spacing={4}>
        <Button variant="contained" disableElevation onClick={reset}>
          RESET
        </Button>
        {listItems}
        <AddToken add={updateToken} />
        <Button> 
          Exchange 
        </Button>

      </Stack>

    </div>
  );
}

export default App;
