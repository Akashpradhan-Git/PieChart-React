import React from 'react'
import Data from '../Data.json'
function Table() {

    var items = Data.map(per => per.Percentage)
    var Sales = Data.map(per => per.Sales)
    var dept = Data.map(item => item['Department Name'])
    var Per = []
    var Dept = []
    var sales = []

    items.map((item)=> Per.push(item))
      console.log(Per)

    Sales.map((item) => sales.push(item))


      var res= Sales.reduce(function(res,item){
        return res+item
    },0)
      console.log(res)
      


      dept.map((item) => Dept.push(item))
      console.log(Dept)

    
    return (
        <div className="container-table">
            <h2> Tabular Data Of Department</h2>

            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Sales</th>
                    <th>Parcentage</th>
                </tr>
                <tr>
                    <td>Department1</td>
                    <td>{sales[0]}</td>
                    <td>{Per[0]}</td>
                </tr>
                <tr>
                    <td>Department2</td>
                    <td>{sales[1]}</td>
                    <td>{Per[1]}</td>
                </tr>
                <tr>
                    <td>Department3</td>
                    <td>{sales[2]}</td>
                    <td>{Per[2]}</td>
                </tr>
                <tr>
                    <td>Department4</td>
                    <td>{sales[3]}</td>
                    <td>{Per[3]}</td>
                </tr>
                <tr>
                    <td>Department5</td>
                    <td>{sales[4]}</td>
                    <td>{Per[4]}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{res}</td>
                    <td>100%</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
