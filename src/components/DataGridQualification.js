import { DataGrid } from '@material-ui/data-grid';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DataGridModule from "./module/DataGridModule";

export default function DataGridQualification(){
    const [qualifications, setQualifications] = useState([]);
    const [displayModules, setDisplayModules] = useState(false);
    const [qualification_module, setQualification_Module] = useState([]);

    let modules = null;

    function toggleDisplayModules(){
        setDisplayModules(!displayModules);
    }

    if (displayModules) {
        modules = <DataGridModule displayModules={qualification_module}/>;
    }

    useEffect(async () => {
        const result = await axios(
            'http://localhost:8080/qualification/findAll',
        );

        setQualifications(result.data);
    }, []);

    let data = qualifications
    console.log(data);
    let rows = [];

    data.map((qualification, index) => {
        rows.push({id: index, name: qualification.name, code: qualification.code});
    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Qualification name', width: 200 },
        { field: 'code', headerName: 'Qualification code', width: 200 }
    ];

    function handleRowSelection (indexes) {
        console.log('index: ')
        console.log(data[indexes.data.id]);
        let qualification = data[indexes.data.id];
        console.log(qualification.modules);
        toggleDisplayModules();
        setQualification_Module(qualification.modules);

        if(indexes.isSelected){
            modules = <DataGridModule displayModules={qualification_module} />;
        }

    }

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
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid className={useStyles().root}
                          rows={rows}
                          columns={columns}
                          pageSize={5}
                          checkboxSelection
                          autoHeight={true}
                          onRowSelected={handleRowSelection}/>
            </div>
            <div></div>
            <div style={{ height: 200, width: '100%' }}>
                {modules}
            </div>
        </div>
    );
}
