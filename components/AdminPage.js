import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";
import { AgGridReact } from "ag-grid-react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const AdminPage = () => {
  const [dataForStudents, setDataForStudents] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [gridApi, setGridApi] = useState(null);

  useEffect(() => {
    const checkAuthentication = () => {
      const user = auth.currentUser;

      if (!user) {
        router.push("/adminlogin");
      } else {
        setUser(user);
        setLoading(false);
      }
    };

    checkAuthentication();

    return () => {
      // Cleanup tasks (if any)
    };
  }, [router]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "EnquiryForm"));

    const studentsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    studentsData.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

    let count = 0;
    studentsData.forEach((element) => {
      element.id = ++count;
    });

    setDataForStudents(studentsData);
  };

  const columnsForStudents = [
    { field: "id", headerName: "Sr No", width: 70, editable: true },
    {
      field: "dateTime",
      headerName: "Date & Time",
      width: 170,
      valueFormatter: (params) => formatDateTime(params.value),
    },
    { field: "firstName", headerName: "First Name", width: 120 },
    { field: "lastName", headerName: "Last Name", width: 120 },
    { field: "email", headerName: "Email-Id", width: 170 },
    { field: "phone", headerName: "Phone", width: 120 },
    { field: "graduation", headerName: "Graduation in", width: 140 },
    { field: "passoutYear", headerName: "Passout Year", width: 120 },
    { field: "message", headerName: "Message", width: 150 },
  ];

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const formatDateTime = (dateTime) => {
    const dateObj = new Date(dateTime);
    const time = dateObj.toLocaleTimeString();
    const date = dateObj.toLocaleDateString();
    return `${time} ${date}`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "7rem",
      }}>
      <div
        className="bulkMain ag-theme-alpine ag-style"
        style={{
          height: 300,
          width: "85%",
          marginBottom: "2rem",
          marginTop: "2rem",
        }}>
        <AgGridReact
          onGridReady={onGridReady}
          columnDefs={columnsForStudents}
          rowData={dataForStudents}
        />
      </div>
    </div>
  );
};

export default AdminPage;
