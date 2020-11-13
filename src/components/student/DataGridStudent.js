import { DataGrid } from '@material-ui/data-grid';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function DataGridStudent(){
    const [students, setStudents] = useState([]);

    useEffect(async () => {
        const result = await axios(
            'http://localhost:8080/studentReg/findAll',
        );

        setStudents(result.data);
    }, []);

    let data = students
    console.log(data);
    let rows = [];

    data.map((student, index) => {
        rows.push({id: index, surName: student.surName, name: student.name, email: student.email, studentNumber: student.studentNumber, student_id: student.student_id});
    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'First name', width: 130 },
        { field: 'surName', headerName: 'Last name', width: 130 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'studentNumber', headerName: 'Student Number', width: 130 },
        { field: 'student_id', headerName: 'ID Number', width: 150 }
    ];

    const useStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
        },
    });

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid className={useStyles().root}
                      rows={rows}
                      columns={columns}
                      pageSize={5}
                      checkboxSelection={false}
                      autoHeight={true}/>
        </div>
    );
}
