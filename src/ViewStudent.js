import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const columns = [
    { id: 'rno', label: 'Roll Number', minWidth: 50 },
    { id: 'rgno', label: 'Registration Number', minWidth: 50 },
    { id: 'std', label: 'Class', minWidth: 50, isNumeric: true },
    { id: 'fname', label: 'First Name', minWidth: 100 },
    { id: 'mname', label: 'Middle Name', minWidth: 100 },
    { id: 'lname', label: 'Last Name', minWidth: 100 },
    { id: 'dob', label: 'Date of Birth', minWidth: 80 },
    { id: 'address', label: 'Address', minWidth: 170 },
    { id: 'phno', label: 'Contact Number', minWidth: 100 },
    { id: 'faname', label: 'Father Name', minWidth: 100 },
    { id: 'moname', label: 'Mother Name', minWidth: 100 },
    { id: 'gname', label: 'Guardian Name', minWidth: 100 },
    { id: 'gender', label: 'Gender', minWidth: 50 },
];

function createData(rno, rgno, std, fname, mname, lname, dob, address, phno, faname, moname, gname, gender) {
    return { rno, rgno, std: Number(std), fname, mname, lname, dob, address, phno, faname, moname, gname, gender };
}

const rows = [
    createData('001', 'A001', 10, 'John', 'A.', 'Doe', '2000-01-01', '123 Main St, Anytown, USA', '555-1234', 'Michael Doe', 'Jane Doe', 'Uncle Bob', 'Male'),
    createData('002', 'A002', 10, 'Jane', 'B.', 'Smith', '1999-05-15', '456 Elm St, Othertown, USA', '555-5678', 'Robert Smith', 'Emily Smith', 'Aunt Alice', 'Female'),
    createData('003', 'A003', 9, 'Jim', 'C.', 'Brown', '2001-03-22', '789 Oak St, Sometown, USA', '555-9101', 'William Brown', 'Olivia Brown', 'Grandpa Joe', 'Male'),
    createData('004', 'A004', 6, 'Lisa', 'D.', 'Johnson', '2002-07-18', '101 Pine St, Newtown, USA', '555-1122', 'Thomas Johnson', 'Sophia Johnson', 'Nanny May', 'Female'),
    createData('005', 'A005', 10, 'Tom', 'E.', 'Wilson', '1998-11-30', '202 Birch St, Oldtown, USA', '555-3344', 'James Wilson', 'Ava Wilson', 'Uncle Sam', 'Male'),
    createData('006', 'A006', 8, 'Emily', 'F.', 'Clark', '2000-06-12', '303 Maple St, Youngtown, USA', '555-4455', 'Henry Clark', 'Isabella Clark', 'Aunt Ruth', 'Female'),
    createData('007', 'A007', 10, 'Michael', 'G.', 'Lewis', '1997-02-28', '404 Cedar St, Middletown, USA', '555-5566', 'George Lewis', 'Emma Lewis', 'Grandma Rose', 'Male'),
    createData('008', 'A008', 1, 'Sarah', 'H.', 'Walker', '2003-09-14', '505 Willow St, Smalltown, USA', '555-6677', 'David Walker', 'Mia Walker', 'Uncle Tom', 'Female'),
    createData('009', 'A009', 2, 'Chris', 'I.', 'Hall', '2001-11-25', '606 Ash St, Bigcity, USA', '555-7788', 'Joseph Hall', 'Avery Hall', 'Aunt Nancy', 'Male'),
    createData('010', 'A010', 2, 'Anna', 'J.', 'Allen', '1998-04-30', '707 Fir St, Littlecity, USA', '555-8899', 'Charles Allen', 'Grace Allen', 'Uncle Larry', 'Female'),
    createData('011', 'A011', 4, 'David', 'K.', 'Young', '2000-12-19', '808 Spruce St, Anothertown, USA', '555-9900', 'Brian Young', 'Evelyn Young', 'Grandpa Harry', 'Male'),
    createData('012', 'A012', 7, 'Sophia', 'L.', 'King', '2002-08-21', '909 Hemlock St, Someplace, USA', '555-1111', 'Gary King', 'Lily King', 'Aunt Pam', 'Female'),
    createData('013', 'A013', 6, 'Daniel', 'M.', 'Wright', '1999-03-05', '1010 Redwood St, Anyplace, USA', '555-2222', 'Howard Wright', 'Samantha Wright', 'Grandma Betty', 'Male'),
    createData('014', 'A014', 5, 'Olivia', 'N.', 'Lopez', '2001-07-29', '1111 Cedar St, Anycity, USA', '555-3333', 'Jerry Lopez', 'Victoria Lopez', 'Uncle Mike', 'Female'),
    createData('015', 'A015', 6, 'James', 'O.', 'Hill', '2000-10-16', '1212 Pine St, Thisplace, USA', '555-4444', 'Mark Hill', 'Natalie Hill', 'Aunt Carla', 'Male'),
    createData('016', 'A016', 7, 'Mia', 'P.', 'Scott', '2002-01-11', '1313 Oak St, Thatplace, USA', '555-5555', 'Philip Scott', 'Elena Scott', 'Grandpa Jim', 'Female'),
    createData('017', 'A017', 9, 'Joshua', 'Q.', 'Green', '1999-09-07', '1414 Birch St, Thattown, USA', '555-6666', 'Ray Green', 'Camila Green', 'Uncle Jake', 'Male'),
    createData('018', 'A018', 8, 'Chloe', 'R.', 'Adams', '1997-12-05', '1515 Maple St, Othercity, USA', '555-7777', 'Frank Adams', 'Abigail Adams', 'Aunt Susan', 'Female'),
    createData('019', 'A019', 2, 'Luke', 'S.', 'Baker', '2003-05-23', '1616 Elm St, Anycity, USA', '555-8888', 'Greg Baker', 'Hannah Baker', 'Uncle Pete', 'Male'),
    createData('020', 'A020', 10, 'Ella', 'T.', 'Carter', '2000-07-09', '1717 Fir St, Sometown, USA', '555-9999', 'Sam Carter', 'Zoe Carter', 'Aunt Linda', 'Female'),
];

const filterOptions = [
    { id: 'rgno', label: 'Registration Number' },
    { id: 'std', label: 'Class' },
    { id: 'fname', label: 'First Name' },
    { id: 'mname', label: 'Middle Name' },
    { id: 'lname', label: 'Last Name' },
];

export default function ViewStudent() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filterBy, setFilterBy] = useState('');
    const [filterValue, setFilterValue] = useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleFilterChange = (event) => {
        setFilterBy(event.target.value);
        setPage(0);
    };

    const handleFilterValueChange = (event) => {
        setFilterValue(event.target.value);
        setPage(0);
    };

    const filteredRows = rows.filter((row) => {
        if (!filterBy) return true;
        const value = row[filterBy];
        return value.toString().toLowerCase().includes(filterValue.toLowerCase());
    });

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Select
                value={filterBy}
                onChange={handleFilterChange}
                displayEmpty
                renderValue={(selected) => {
                    if (!selected) {
                        return <em>Select Filter</em>;
                    }
                    return filterOptions.find((option) => option.id === selected)?.label;
                }}
                sx={{ margin: 2, width: 200 }}
            >
                <MenuItem value="" disabled>
                    <em>Select Filter</em>
                </MenuItem>
                {filterOptions.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            <TextField
                label="Filter Value"
                variant="outlined"
                value={filterValue}
                onChange={handleFilterValueChange}
                sx={{ margin: 2 }}
            />
            <TableContainer sx={{ maxHeight: 1200 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.rno}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
