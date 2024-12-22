// import React from "react";
// import {
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   TextField,
//   Button,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
// } from "@mui/material";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// import ExpensesComponent from "./expense";

// const Dashboard: React.FC = () => {
//   // Sample Data for Pie Chart
//   const pieData = [
//     { name: "Active", value: 40 },
//     { name: "Idle", value: 30 },
//     { name: "Ignition On", value: 30 },
//   ];
//   const colors = ["#0088FE", "#FFBB28", "#FF8042"];

//   return (
//     <Box
//       sx={{ padding: "16px", backgroundColor: "#f4f6f8", minHeight: "100vh" }}
//     >
//       <Grid container spacing={2}>
//         {/* Header Stats */}
//         <Card style={{ width: "100%" }}>
//           <div
//             style={{
//               backgroundColor: "darkblue",
//               padding: "5px",
//               textAlign: "center",
//             }}
//           >
//             <Typography
//               variant="h6"
//               style={{
//                 color: "white", // Change text color to contrast with the strip
//                 fontWeight: "bold",
//               }}
//             >
//               Feature
//             </Typography>
//           </div>
//           <CardContent>
//             <Grid container spacing={2}>
//               {[
//                 "Total Vehicles",
//                 "Reporting vehicle",
//                 "Ignition On",
//                 "Ignition Off",
//                 "Idle Vehicles",
//                 "New vehicle",
//               ].map((stat, index) => (
//                 <Grid item xs={2} key={index}>
//                   {" "}
//                   {/* Adjusted to xs={3} for better horizontal layout */}
//                   <Card
//                     style={{
//                       width: "100%",
//                       backgroundColor: "#f0f0f0",
//                       height: "90px",
//                     }}
//                   >
//                     <CardContent>
//                       <Typography variant="h6">{stat}</Typography>
//                       <Typography variant="h4">0</Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </CardContent>
//         </Card>

//         {/* <Grid item xs={12}>
//           <Grid container spacing={2}>
//             {[
//               "Total Vehicles",
//               "Idle Vehicles",
//               "Ignition On",
//               "Offline Vehicles",
//             ].map((stat, index) => (
//               <Grid item xs={2} key={index}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h6">{stat}</Typography>
//                     <Typography variant="h4">0</Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid> */}

//         {/* Search Component */}
//         <Grid item xs={12}>
//           <Card>
//             <CardContent>
//               <Grid container spacing={2} alignItems="center">
//                 <Grid item xs={3}>
//                   <TextField
//                     type="date"
//                     fullWidth
//                     label="From Date"
//                     InputLabelProps={{ shrink: true }}
//                   />
//                 </Grid>
//                 <Grid item xs={3}>
//                   <TextField
//                     type="date"
//                     fullWidth
//                     label="To Date"
//                     InputLabelProps={{ shrink: true }}
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Button variant="contained" color="primary" fullWidth>
//                     Search
//                   </Button>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Totals Panel */}
//         <Grid item xs={12}>
//           <Grid container spacing={2}>
//             {["POIs", "Users", "Payments"].map((total, index) => (
//               <Grid item xs={4} key={index}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h6">{total}</Typography>
//                     <Typography variant="h4">0</Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>

//         {/* Driving Behavior Table */}
//         <Grid item xs={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Driving Behavior</Typography>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Score</TableCell>
//                     <TableCell>Driver</TableCell>
//                     <TableCell>Vehicle</TableCell>
//                     <TableCell>Braking</TableCell>
//                     <TableCell>Acceleration</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>A</TableCell>
//                     <TableCell>John Doe</TableCell>
//                     <TableCell>Honda Civic</TableCell>
//                     <TableCell>Good</TableCell>
//                     <TableCell>Excellent</TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Vehicle Status Graph */}
//         <Grid item xs={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Vehicle Status</Typography>
//               <ResponsiveContainer width="100%" height={200}>
//                 <PieChart>
//                   <Pie
//                     data={pieData}
//                     dataKey="value"
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={80}
//                     label
//                   >
//                     {pieData.map((entry, index) => (
//                       <Cell
//                         key={`cell-${index}`}
//                         fill={colors[index % colors.length]}
//                       />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//         </Grid>
//         {/* Expense */}
//         <Grid item xs={6}>
//           <ExpensesComponent />
//         </Grid>
//         {/* Map Section */}
//         <Grid item xs={12}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Map Section</Typography>
//               <Box
//                 sx={{
//                   height: "400px",
//                   backgroundColor: "#e0e0e0",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Typography>Map Placeholder</Typography>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;

import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ExpensesComponent from "./expense";

const Dashboard: React.FC = () => {
  // Sample Data for Pie Chart
  const pieData = [
    { name: "Active", value: 40 },
    { name: "Idle", value: 30 },
    { name: "Ignition On", value: 30 },
  ];
  const colors = ["#0088FE", "#FFBB28", "#FF8042"];

  return (
    <Box
      sx={{ padding: "16px", backgroundColor: "#f4f6f8", minHeight: "100vh" }}
    >
      <Grid container spacing={2}>
        {/* Header Stats */}
        <Grid item xs={12}>
          <Card>
            <div
              style={{
                backgroundColor: "#1976D2",
                padding: "8px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Feature
              </Typography>
            </div>
            <CardContent>
              <Grid container spacing={2}>
                {[
                  "Total Vehicles",
                  "Reporting Vehicle",
                  "Ignition On",
                  "Ignition Off",
                  "Idle Vehicles",
                  "New Vehicle",
                ].map((stat, index) => (
                  <Grid item xs={2} key={index}>
                    <Card
                      sx={{
                        backgroundColor: "#f0f0f0",
                        height: "90px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6">{stat}</Typography>
                        <Typography variant="h4" color="primary">
                          0
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Search Component */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  <TextField
                    type="date"
                    fullWidth
                    label="From Date"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="date"
                    fullWidth
                    label="To Date"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" fullWidth>
                    Search
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Allerts */}
        <Grid item xs={12}>
          <Card>
            <div
              style={{
                backgroundColor: "#1976D2",
                padding: "8px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Allert
              </Typography>
            </div>
            <CardContent>
              <Grid container spacing={2}>
                {[
                  "Alert 1",
                  "Allert 2",
                  "Allert 3",
                  "Allert 3",
                  "Allert 3",
                  "Allert 5",
                ].map((stat, index) => (
                  <Grid item xs={2} key={index}>
                    <Card
                      sx={{
                        backgroundColor: "#f0f0f0",
                        height: "90px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6">{stat}</Typography>
                        <Typography variant="h4" color="primary">
                          0
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Totals Panel */}
        {/* <Grid item xs={12}>
          <Grid container spacing={2}>
            {["POIs", "Users", "Payments"].map((total, index) => (
              <Grid item xs={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{total}</Typography>
                    <Typography variant="h4" color="secondary">
                      0
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid> */}

        {/* Driving Behavior Table */}
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Driving Behavior</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Score</TableCell>
                    <TableCell>Driver</TableCell>
                    <TableCell>Vehicle</TableCell>
                    <TableCell>Braking</TableCell>
                    <TableCell>Acceleration</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>A</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Honda Civic</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Excellent</TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell>A</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Honda Civic</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Excellent</TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell>A</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Honda Civic</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Excellent</TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell>A</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Honda Civic</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Excellent</TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell>A</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Honda Civic</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Excellent</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>

        {/* Vehicle Status Graph */}
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Vehicle Status</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Expense */}
        <Grid item xs={6}>
          <ExpensesComponent />
        </Grid>

        {/* Map Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Map Section</Typography>
              <Box
                sx={{
                  height: "400px",
                  backgroundColor: "#e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>Map Placeholder</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
