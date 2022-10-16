import { Stack } from "@mui/system";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material";
import { Chip } from "@mui/material";
import { useState } from "react";

const Entry = (props) => {

    const [currentValue, setCurrentValue] = useState("Label");
    const [toSwap, setToSwap] = useState("toSwap");
    const [amount, setAmount] = useState(1);
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");

    const [exchange, setExchange] = useState("swapped");

    const handleChange = event => {
        console.log("HANDLING CHANGE");
        setToSwap(event.target.value);
    }

    const handleNumberChange = event => {
        console.log("HANDLING CHANGE");
        setAmount(event.target.value);
    }
    const swapCrypto = () => {

        console.log("fetching " + "https://quote-api.jup.ag/v3/price?ids=" + props.value+ "&vsAmount=1");


        fetch("https://quote-api.jup.ag/v1/price?id=" + props.value, {
            headers: {
                Accept: "application/json"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setFirst(result.data.id);
                });
        fetch("https://quote-api.jup.ag/v1/price?id=" + toSwap, {
            headers: {
                Accept: "application/json"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setSecond(result.data.id);
                });

        console.log("https://quote-api.jup.ag/v3/quote?inputMint=" + first + "&outputMint=" + second + "&amount=" + amount + "&swapMode=ExactOut&slippage=1");
        fetch("https://quote-api.jup.ag/v3/quote?inputMint=" + "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" + "&outputMint=" + second + "&amount=" + amount + "&swapMode=ExactOut&slippage=1")
            .then(res => res.json())
            .then(result => {
                setExchange(props.value + " = " + result.data[0].outAmount/result.data[0].inAmount  + " " + toSwap);
            })


        console.log("HI " + second + "\n" + first);
        



    }





    const fetchIt = () => {
        fetch("https://quote-api.jup.ag/v1/price?id=" + props.value + "&amount=1", {
            headers: {
                Accept: "application/json.github.io/fetch/"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setCurrentValue(result.data.price + " USDC")
                });
    }

    return (
        <>
            <Stack justifyContent="center" direction="row" spacing={2}>
                <Button variant="contained" color="success" disableElevation onClick={fetchIt}>
                    UPDATE THIS PRICE
                </Button>

                <Chip size="large" label={props.value} color="primary" />
                <TextField size="small" id="standard-basic" label={currentValue} variant="standard" />
                <Button variant="contained" color="success" disableElevation onClick={swapCrypto}>
                    SWAP WITH
                </Button>
                <TextField onChange={handleNumberChange} size="small" id="standard-basic" label="Exchange #" variant="standard" />
                <TextField onChange={handleChange} size="small" id="standard-basic" label={toSwap} variant="standard" />
                <Chip size="large" label={exchange} />



            </Stack>
        </>
    );
}

export default Entry;
