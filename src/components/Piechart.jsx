import React from 'react'
import Chart from "react-google-charts";
import Data from '../Data.json'
function Piechat() {
   var per = Data.map(per => per.Percentage)
   var num0 =per[0]
    var num1 = per[1]
    let num2 = per[2] 
    let num3 = per[3] 
    let num4 = per[4] 
    num0 = parseInt(num0)
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    num3 = parseInt(num3)
    num4 = parseInt(num4)
    
    const data = [
      ['Pizza', 'Popularity'],
    ['Pepperoni', num0],
    ['Hawaiian', num1],
    ['Mushroom', num2],
    ['Sausage', num3], // Below limit.
    ['Anchovies', num4], 
    ]

      console.log(num1)

    return (
          <div className="pie">
            <h2>Department Wise Sales</h2>
            <Chart chartType="PieChart" width="100%" height="400px" data={data}
            options={{
              is3D: true,
            }}
            />
            </div>
    )
}

export default Piechat
