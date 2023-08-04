import * as React from "react";
import Grid from "@mui/material/Grid";
//import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";
//import TimePicker from '@mui/lab/TimePicker'
//import TimePicker from 'react-time-picker'


export default function DetailForm() {
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0]

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="patientName"
            name="patientName"
            label="Patient's Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="patientAge"
            name="patientAge"
            label="Patient's Age"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Date of Birth"
            type="date"
            defaultValue={formattedToday}
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="medicineName"
            name="medicineName"
            label="Medicine Name *"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="startingDate"
            name="startingDate"
            label="Starting Date"
            type="date"
            defaultValue={formattedToday}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="numberofdays"
            name="numberofdays"
            label="Number Of Days *"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dailydosage"
            name="dailydosage"
            label="Daily Dosage"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          //   required
          //   id="time"
          //   name="time"
          //   label="Time"
          //  // type="date"
          //   fullWidth
          //   autoComplete="shipping country"
          //   //defaultValue={formattedToday}
          //   variant="standard"
            // TimePicker label="Time picker"
             
          />
        </Grid>
        <Grid item xs={12}>
          {/* <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
