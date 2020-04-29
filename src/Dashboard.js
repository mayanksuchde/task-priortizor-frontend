import React, { Component } from 'react'
import * as d3 from 'd3';
import TreeMap from "react-d3-treemap";
import Data from './Data.json'
import "react-d3-treemap/dist/react.d3.treemap.css";
export default class Dashboard extends Component {

    componentDidMount=()=>{
        // set the dimensions and margins of the graph
//         var margin = {top: 10, right: 10, bottom: 10, left: 10},
//         width = 445 - margin.left - margin.right,
//         height = 445 - margin.top - margin.bottom;

// // append the svg object to the body of the page
//         var svg = d3.select(".treemapsvg")
//         .attr("width", width + margin.left + margin.right)
//         .attr("height", height + margin.top + margin.bottom)
//         .append("g")
//         .attr("transform",
//             "translate(" + margin.left + "," + margin.top + ")");

// // read json data
//         d3.json('./Data.json', function(data) {

//         // Give the data to this cluster layout:
//         var root = d3.hierarchy(data).sum(function(d){ return d.value}) // Here the size of each leave is given in the 'value' field in input data
    
//         // Then d3.treemap computes the position of each element of the hierarchy
//         d3.treemap()
//         .size([width, height])
//         .padding(2)
//         (root)
            
//         // use this information to add rectangles:
//         svg
//         .selectAll("rect")
//         .data(root.leaves())
//         .enter()
//         .append("rect")
//             .attr('x', function (d) { return d.x0; })
//             .attr('y', function (d) { return d.y0; })
//             .attr('width', function (d) { return d.x1 - d.x0; })
//             .attr('height', function (d) { return d.y1 - d.y0; })
//             .style("stroke", "black")
//             .style("fill", "blue")
        
//         // and to add the text labels
//         svg
//         .selectAll("text")
//         .data(root.leaves())
//         .enter()
//         .append("text")
//             .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
//             .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
//             .text(function(d){ return d.data.name })
//             .attr("font-size", "15px")
//             .attr("fill", "white")
//         })
    }
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <h3>Project 1</h3>
                <div className="treemap">
                    <TreeMap 
                        height={600}
                        width={700}
                        data={Data}
                        valueUnit={"Tasks"}/>
                </div>
            </div>
        )
    }
}
