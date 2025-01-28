import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { header, Wrapper } from "./DataGridComp.style";


const DataGridComp = () => {



const columns: GridColDef[] =[
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      type: 'number',
    },
    {field: 'name', headerName: 'Name',   type: 'string', width: 100},
    {field: 'email', headerName: 'Email', type: 'string', width: 300},
    {field: 'address', headerName: 'Address', width: 300, type: 'string'},
    {field:'issueType', headerName: 'Issue Type', type: 'string', width:300},
    {field:'complaintStatus', headerName: 'Complaint Status', type: 'string', width:300}
  ];


  const rows = [
    {
      id: 1,
      name: 'Suma Reddy',
      email: 'suma.reddy@gmail.com',
      address: 'Near MG Automobiles, Datta Sai Nagar, 3rd Cross, Ward No 17, Plot No 43',
      issueType: 'Charger Related Issue',
      complaintStatus: 'Resolved'
    },
    {
      id: 2,
      name: 'Arjun Kumar',
      email: 'arjun.kumar@yahoo.com',
      address: '21st Street, JP Nagar, Bangalore',
      issueType: 'Battery Issue',
      complaintStatus: 'Pending'
    },
    {
      id: 3,
      name: 'Niharika Sharma',
      email: 'niharika.sharma@outlook.com',
      address: 'Greenwood Apartments, Sector 45, Gurgaon',
      issueType: 'Screen Cracked',
      complaintStatus: 'In Progress'
    },
    {
      id: 4,
      name: 'Rajesh Singh',
      email: 'rajesh.singh@gmail.com',
      address: 'Park View Residency, Whitefield, Bangalore',
      issueType: 'Overheating Problem',
      complaintStatus: 'Closed'
    },
    {
      id: 5,
      name: 'Priya Das',
      email: 'priya.das@hotmail.com',
      address: 'Sunrise Complex, Salt Lake, Kolkata',
      issueType: 'Network Issue',
      complaintStatus: 'Resolved'
    },
    {
      id: 6,
      name: 'Anil Mehta',
      email: 'anil.mehta@gmail.com',
      address: 'Lake View Villas, Jubilee Hills, Hyderabad',
      issueType: 'Software Update Error',
      complaintStatus: 'Pending'
    },
    {
      id: 7,
      name: 'Rekha Verma',
      email: 'rekha.verma@gmail.com',
      address: 'Palm Grove Heights, Sector 56, Noida',
      issueType: 'Charging Port Issue',
      complaintStatus: 'In Progress'
    },
    {
      id: 8,
      name: 'Manoj Gupta',
      email: 'manoj.gupta@yahoo.com',
      address: 'DLF Phase 4, Cyber City, Gurgaon',
      issueType: 'Speaker Not Working',
      complaintStatus: 'Pending'
    },
    {
      id: 9,
      name: 'Shweta Kapoor',
      email: 'shweta.kapoor@rediffmail.com',
      address: 'Westend Greens, Mahipalpur, Delhi',
      issueType: 'Touch Screen Unresponsive',
      complaintStatus: 'Closed'
    }
  ];
  



  return (
    <Box sx={Wrapper}>
        <Typography variant="h5" sx={header}>Complaint Lists</Typography>
      <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
      />
    </Box>
  )
}

export default DataGridComp
