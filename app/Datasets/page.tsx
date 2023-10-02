'use client'
import React from "react";

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";
import {EyeIcon} from "./EyeIcon";
import {users} from "./data.js";

import { useState, useEffect} from 'react';

const statusColorMap: Record<string, ChipProps["color"]>  = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

type User = typeof users[0];

export default function Datasets() {
  
  const [result, setResult] = useState([]);

  let dataLoaded = 0;

  useEffect(() => {
  if (dataLoaded == 0) {
    const searchMongo = async () => {
      const res = await fetch('http://localhost:3000/api/mongo_read', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const data = await res.json();
      setResult(data);
    };

      searchMongo()
      dataLoaded=1;
    }
  }, []);


  return (
    <div className="flex justify-center mt-[40px]">
    <Table aria-label="Example static collection table" className="w-4/6">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>ROLE</TableColumn>
      </TableHeader>
      <TableBody>
      {result.map((item: any, index: number) => (
        <TableRow key={item.id}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.role}</TableCell>
        </TableRow>
      )
      )}
      </TableBody>
    </Table>
    </div>
  );
}
