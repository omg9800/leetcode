import questions from "../data.json";

import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
const url = "https://leetcode.com/problems/";

const helper = (s) => {
  let k = s.split(" ");
  let ans = "";
  k.forEach((m, i) => {
    if (i == 0) ans = ans + m.toLowerCase();
    else ans = ans + `-${m.toLowerCase()}`;
  });
  console.log(ans);
  return ans;
};

helper("awo kjh kdj");
const columns = [
  { field: "id", headerName: "Id", width: 70 },
  {
    field: "title",
    headerName: "Question",
    width: 330,
    renderCell: (params) => (
      <div>
        <a href={`${url}${helper(params.value)}`}>{params.value}</a>
      </div>
    ),
  },
  { field: "likes", headerName: "Likes", type: "number", width: 130 },

  {
    field: "dislikes",
    headerName: "Dislikes",
    type: "number",
    width: 90,
  },
  {
    field: "difficulty",
    headerName: "Difficulty",
    sortable: true,
    width: 160,
  },
  { field: "topicTags", headerName: "Tags", width: 450 },
];

export default function Questions() {
  let rows = [];

  questions.forEach((m) => {
    rows.push({
      id: m.questionId,
      title: m.title,
      likes: m.likes,
      dislikes: m.dislikes,
      difficulty: m.difficulty,
      topicTags: m.topicTags,
    });
  });

  return (
    <div>
      <h2>Leetcode Questions</h2>
      <div style={{ height: "90vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
