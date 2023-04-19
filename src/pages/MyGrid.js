import React from "react";
import { useState, useId, useEffect } from "react";
import axios from 'axios';
import EnhancedTable from '../components/DataGrid/DataGrid';

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];


function MyGrid() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const fetchMetrics = () => {
    axios
    .get(" http://localhost:4000/assignment")
    .then(
      (response) => {
        console.log(response);
        setData(response.data)
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    const interval = setInterval(fetchMetrics, 3* 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="card-header">MyGrid</div>
      <div className="card-body">
        <EnhancedTable headCells={headCells} rows={rows} tableHeader="my Table Header"/>
      </div>
    </>
  );
}

export default MyGrid;
