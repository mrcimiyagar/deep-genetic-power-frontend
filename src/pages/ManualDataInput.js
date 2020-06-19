import React from 'react';
import $ from 'jquery';

let rows = [];
for (let counter = 0; counter < 78; counter++) {
  rows.push(counter);
}

export default function ManualDataInput() {
  return (
    <div id="table-wrapper" style={{direction: "rtl"}}>
  <div id="table-scroll">
      <table cellspacing="0" onLoad={(e) => {
        $( "#table-scroll" ).scrollLeft(0);
      }}>
        <tr>
          {
            ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'].reverse().map((item) => {
              return (<th><p style={{
                backgroundColor: "#1d8af8",
                width: 100,
                height: 50, 
                textAlign: 'center', 
                lineHeight: 4, 
                verticalAlign: 'middle'
              }}>{item}</p></th>);
            })
          }
        </tr>
        {
          rows.map((item) => {
            return (
              <tr>
              {
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].reverse().map((item) => {
                  return (<td><input type="text" style={{
                    width: 100,
                    height: 50,
                    textAlign: 'center',
                    lineHeight: 4,
                    verticalAlign: 'middle',
                    border: 'none',
                    margin: 0
                  }}/></td>);
                })
              }
              <td><p style={{
                backgroundColor: "#1d8af8",
                width: 100, 
                height: 50, 
                textAlign: 'center', 
                lineHeight: 4, 
                verticalAlign: 'middle'
              }}>{item + 1}</p></td>
            </tr>
            );
          })
        }
      </table>
    </div>
    </div>
  );
}