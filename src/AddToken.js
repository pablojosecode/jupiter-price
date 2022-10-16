
import { Stack } from "@mui/system";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material";
import { Chip } from "@mui/material";
import { useState } from "react";

const AddToken = (props) => {

    const [outPut, setOutPut] = useState("O");



    const handleChange = event => {
        console.log("HANDLING CHANGE");
        setOutPut(event.target.value);
        console.log(outPut);
    }


    return (
        <>
            <Stack justifyContent="center" direction="row" spacing={2}>
                <Button variant="outlined" color="secondary" disableElevation onClick={() => {props.add(outPut)}}>
                    ADD THIS TOKEN
                </Button>

                <TextField
                     onChange={handleChange} size="small" id="standard-basic" label="Crypto" variant="standard" />



            </Stack>
        </>
    );
}

export default AddToken;