import React from "react";
import Navigator from "../../components/Navigator";
import "./Todos.css";
import { Trash } from "../../constants/icons/Trash";

const Todos = () => {
  const dummy = [
    { title: "Daftar Belanja Bulanan", date: "5 Oktober 2021" },
    { title: "Mengerjakan Paper Works", date: "4 Oktober 2021" },
    { title: "Bertemu Dokter", date: "5 Oktober 2021" },
    { title: "Bertemu Dokter 2", date: "5 Oktober 2021" },
  ];
  return (
    <>
      <div className="container">
        <Navigator />
        <div className="activites-container">
          {dummy.map((data) => {
            return (
              <div className="activity-box" key={data.title}>
                <div className="activity-box-title">{data.title}</div>
                <div className="flex-between">
                  <div className="activity-box-date">{data.date}</div>
                  <Trash />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todos;
