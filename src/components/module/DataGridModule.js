import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function DataGridModule(props){
    const [modules] = useState(props.displayModules);

    let data = modules
    console.log(data);
    let rows = [];

    data.map((module, index) => {
        rows.push({id: index, name: module.name, code: module.code});
    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Module Name', width: 300 },
        { field: 'code', headerName: 'Module Code', width: 130 }
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
