"use client";

import React, { useEffect, useState } from "react";
import { userAuth } from "../context/AuthContext";
import { Card, CardBody } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Nikhil Mishra",
    role: "Student",
    status: "Active",
  },
  {
    key: "2",
    name: "RAguvansh Gupta",
    role: "Student",
    status: "Paused",
  },
  {
    key: "3",
    name: "Karan Pandit",
    role: "Student",
    status: "Active",
  },
  {
    key: "4",
    name: "Rupesh Kushwaha",
    role: "Student",
    status: "Vacation",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "STATUS",
  },
];

const page = () => {
  const { user } = userAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CheckAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    CheckAuth();
  }, [user]);

  return (
    <div className="p-4 max-w-5xl ml-44">
      {loading ? (
        <div><Spinner size="lg" /></div>
      ) : user ? (
        <div className="pb-3">
          <Card className="bg-gray-600 rounded-lg text-2xl p-5 pb-3 text-gray-100">
            <CardBody>
              <p>The table has the name of those who can access the webpage</p>
            </CardBody>
          </Card>
          <div className="pt-3">
          <Table
            aria-label="Example static collection table"
            className="border border-gray-300"
          >
            <TableHeader
              className="bg-gray-700 text-gray-200 rounded-md"
              columns={columns}
            >
              {(column) => (
                <TableColumn
                  className="border-b-2 max-w-3xl py-3"
                  key={column.key}
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow className="pb-4" key={item.key}>
                  {(columnKey) => (
                    <TableCell className="pl-28 pt-4">
                      {getKeyValue(item, columnKey)}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
          </div>

          <div className="pt-4">
          <Card className="bg-gray-600 rounded-lg text-2xl p-5 text-gray-100">
          <CardBody>
            <p>Welcome {user.displayName} you are Logged In with Protected Route</p>
          </CardBody>
        </Card>
          </div>
        </div>
      ) : (
        <Card className="bg-gray-600 rounded-lg text-2xl p-5 text-gray-100">
          <CardBody>
            <p>You are not Logged In - Protected Route</p>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default page;
