import './App.css';
import React from 'react';
import DataGridStudent from "./components/student/DataGridStudent";
import DataGridQualification from "./components/DataGridQualification";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import SimpleModal from "./components/util/SimpleModal";
import StudentInputReg from "./components/util/StudentInputReg";

function App() {
    // const [displayAllStudents, setDisplayAllStudents] = useState(false);
    let listOfStudents = <DataGridStudent />;
    // const [displayAllQualifications, setDisplayAllQualifications] = useState(false);
    let listOfQualifications = <DataGridQualification />;

    // function toggleDisplayAllStudents(){
    //     setDisplayAllStudents(!displayAllStudents);
    // }
    //
    // if (displayAllStudents) {
    //     listOfStudents = <DataGridStudent />
    // }
    //
    // function toggleDisplayQualifications(){
    //     setDisplayAllQualifications(!displayAllQualifications);
    // }
    //
    // if (displayAllQualifications) {
    //     listOfQualifications = <DataGridQualification />
    // }

    // const useStyles = makeStyles({
    //     root: {
    //         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 50%)',
    //         border: 0,
    //         borderRadius: 3,
    //         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //         color: 'white',
    //         height: 48,
    //         padding: '0 30px',
    //     },
    // });

  return (
    <div className="App">
        {/*<div>*/}
        {/*    <Button className={useStyles().root} onClick={toggleDisplayAllStudents}> Show all students </Button>*/}
        {/*    {listOfStudents}*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <Button className={useStyles().root} onClick={toggleDisplayQualifications}> Show all qualifications </Button>*/}
        {/*    {listOfQualifications}*/}
        {/*</div>*/}

        <div style={{ width: '100%', left: 300 }}>
            <SimpleModal buttonName={'Show all students'} heading={'All students'} data={listOfStudents} />
        </div>
        <div>
            <SimpleModal buttonName={'Show all qualifications'} heading={'All qualifications'} data={listOfQualifications} />
        </div>
        <div>
            <StudentInputReg />
        </div>
    </div>
  );
}

export default App;
