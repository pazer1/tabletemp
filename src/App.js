import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import MaterialTable from 'material-table';
import save from '@material-ui/icons/Save'

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Refresh from '@material-ui/icons/Refresh';
import Settings from '@material-ui/icons/Settings';

const tableIcons = {
Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Settings: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Refresh: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
Filter: forwardRef((props, ref) => <FilterListIcon {...props} ref={ref} />),
FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function App() {

  
  let testData = [
    {name:"nginx-deplyment-5533125",
    cluster:"AWS-US-West1",
    namespace:"tenant-rishabnbspk",
    labels:["app","pod-template-hash"],
    status:"Running",
    nodeip:"10.0.1.21",
    age:"2days,6 hrs"
    },
    {name:"nginx-deplyment-5533125",
    cluster:"AWS-US-West2",
    namespace:"tenant-rishabnbspk",
    labels:["app","pod-template-hash"],
    status:"Running",
    nodeip:"10.0.1.21",
    age:"2days,6 hrs"
    },
    {name:"nginx-deplyment-5533125",
    cluster:"AWS-US-West3",
    namespace:"tenant-rishabnbspk",
    labels:["app","pod-template-hash"],
    status:"Running",
    nodeip:"10.0.1.21",
    age:"2days,6 hrs"
    },
  ]

  const [data,setData] = useState(testData)


  return (
    <div className="App">
      <MaterialTable

      data={data}

    

      columns={[
        {title:"Name",field:'name',filtering :false,},
        {title:"Cluster",field:'cluster',
        filtering:true,
        filterCellStyle:{
          name:"asd",cluster:"asd"
        }
      },
        {title:"NameSpace",field:'Namespace',filtering :false},
        {title:"Labels",field:'labels',filtering :false,},
        {title:"Status",field:'status',filtering :false,},
        {title:"Node IP",field:'nodeip',filtering :false,},
        {title:"Age",field:'age',filtering :false,},
      ]}

   
    
      actions={[
        {
          icon: Refresh,
          tooltip: 'Refresh',
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row")
        },
        {
          icon: Settings,
          tooltip: 'Table Setting',
          isFreeAction: true,
          onClick: (event) => alert("You want to table Setting")
        },
       

      ]}
      editable={{
        isEditable:rowData => rowData.name ==="a",
        isDeletable:rowData => rowData.name === "b",
        onRowAdd: newData =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                {
                    /* const data = this.state.data;
                    data.push(newData);
                    this.setState({ data }, () => resolve()); */
                }
                resolve();
            }, 1000);
        }),
        // onRowUpdate: (newData, oldData) =>
        // new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         {
        //             /* const data = this.state.data;
        //             const index = data.indexOf(oldData);
        //             data[index] = newData;                
        //             this.setState({ data }, () => resolve()); */
        //         }
        //         resolve();
        //     }, 1000);
        // }),
        // onRowDelete: oldData =>
        // new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         {
        //             /* let data = this.state.data;
        //             const index = data.indexOf(oldData);
        //             data.splice(index, 1);
        //             this.setState({ data }, () => resolve()); */
        //         }
        //         resolve();
        //     }, 1000);
        // })
      }}

      // components={{
      //   FilterRow: ()=>{
      //     return(
      //       <div>
      //         sdsd
      //         </div>
      //     )
      //   },
      // }}


      options={{
        selection:true,
        filtering:true,
      }}
      actions={[{
        tooltip:'Remove All Selectd Row',
        icon:"delete",
        onClick: (evt, oldData) => {
          new Promise((resolve,reject) => {
            setTimeout(() =>{
              setData([ {name:"nginx-deplyment-5533125",
              cluster:"AWS-US-West3",
              namespace:"tenant-rishabnbspk",
              labels:["app","pod-template-hash"],
              status:"Running",
              nodeip:"10.0.1.21",
              age:"2days,6 hrs"
              },
            ])
            resolve();
            },1000)
          })
        }
      }]}
      
      
      icons={tableIcons}
      />
    </div>
  );
}




export default App;
