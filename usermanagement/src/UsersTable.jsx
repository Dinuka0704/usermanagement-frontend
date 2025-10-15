import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const UsersTable = ({ rows,selectedUser }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "20px", borderRadius: "10px" }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&last-child td, &last-child th": { border: 0 } }}
              >
                <TableCell component={"th"} scope="row">
                  {row.id}
                </TableCell>
                <TableCell component={"th"} scope="row">
                  {row.name}
                </TableCell>
                <TableCell>
                  <Button sx={{ margin: "0px 10px" }} onClick={() => selectedUser({id:row.id,name:row.name})}>
                    {" "}
                    Update
                  </Button>
                  <Button sx={{ margin: "0px 10px" }} onClick={() => {}}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow sx={{ "&last-child td, &last-child th": { border: 0 } }}>
              <TableCell colSpan={3} align="center">
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
