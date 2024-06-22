import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
} from '@mui/material';
import * as XLSX from 'xlsx';
import './RegisterStudent.css';

const RegisterStudent = () => {
  const [formData, setFormData] = useState({
    rollNo: '',
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    address: '',
    contactNo: '',
    fatherName: '',
    motherName: '',
    guardianName: '',
    gender: '',
    profilePicture: null,
  });

  const [bulkData, setBulkData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.dob &&
      formData.address &&
      formData.contactNo &&
      formData.gender &&
      formData.profilePicture
    ) {
      console.log('Student Registered:', formData);
      setSubmitted(true);
      setError('');
      // Reset the form
      setFormData({
        rollNo: '',
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        address: '',
        contactNo: '',
        fatherName: '',
        motherName: '',
        guardianName: '',
        gender: '',
        profilePicture: null,
      });
    } else {
      setError('Please fill in all required fields');
      setSubmitted(false);
    }
  };

  const handleBulkUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const dataWithoutHeaders = jsonData.slice(1); 
        console.log('Parsed Excel Data:', dataWithoutHeaders);
        setBulkData(dataWithoutHeaders);
        setError('');
      } catch (err) {
        console.error('Error reading or parsing Excel file:', err);
        setError('Error reading or parsing Excel file. Please check the file format.');
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleBulkSubmit = () => {
    if (bulkData.length > 0) {
      console.log('Bulk Data Submitted:', bulkData);
      setSubmitted(true);
      setError('');
      setBulkData([]);
    } else {
      setError('Please upload a valid Excel file with student records');
      setSubmitted(false);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}> 
      <Typography variant="h4" component="h1" gutterBottom>
        Register Student
      </Typography>
      {submitted && <Alert severity="success">Form submitted successfully!</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="rollNo"
              label="Roll No"
              name="rollNo"
              autoComplete="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="firstName"
              label="Student First Name"
              name="firstName"
              autoComplete="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={!formData.firstName && submitted}
              helperText={!formData.firstName && submitted ? 'First name is required' : ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="middleName"
              label="Student Middle Name"
              name="middleName"
              autoComplete="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Student Last Name"
              name="lastName"
              autoComplete="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={!formData.lastName && submitted}
              helperText={!formData.lastName && submitted ? 'Last name is required' : ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="dob"
              label="Date of Birth"
              name="dob"
              type="date"
              InputLabelProps={{ shrink: true }}
              autoComplete="dob"
              value={formData.dob}
              onChange={handleChange}
              error={!formData.dob && submitted}
              helperText={!formData.dob && submitted ? 'Date of birth is required' : ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="contactNo"
              label="Contact No"
              name="contactNo"
              autoComplete="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              inputProps={{ pattern: '[0-9]{10}' }}
              error={(!formData.contactNo || !/^[0-9]{10}$/.test(formData.contactNo)) && submitted}
              helperText={(!formData.contactNo || !/^[0-9]{10}$/.test(formData.contactNo)) && submitted ? 'Valid contact number is required' : ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              multiline
              rows={3}
              value={formData.address}
              onChange={handleChange}
              error={!formData.address && submitted}
              helperText={!formData.address && submitted ? 'Address is required' : ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth error={!formData.gender && submitted}>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                label="Gender"
              >
                
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              {!formData.gender && submitted && <Typography variant="caption" color="error">Gender is required</Typography>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="fatherName"
              label="Father's Name"
              name="fatherName"
              autoComplete="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="motherName"
              label="Mother's Name"
              name="motherName"
              autoComplete="motherName"
              value={formData.motherName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="guardianName"
              label="Guardian's Name"
              name="guardianName"
              autoComplete="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} className="profile-picture-container">
            <Box mt={2} mb={2} display="flex" flexDirection="column" alignItems="center">
              <InputLabel htmlFor="profilePicture">Add Profile Picture</InputLabel>
              <input
                id="profilePicture"
                name="profilePicture"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
                style={{ display: 'block', marginTop: '8px' }}
              />
              {!formData.profilePicture && submitted && (
                <Typography variant="caption" color="error">
                  Profile picture is required
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="div" gutterBottom>
              Bulk Upload
            </Typography>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleBulkUpload}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleBulkSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Bulk Records
            </Button>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default RegisterStudent;
