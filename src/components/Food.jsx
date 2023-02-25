import React from "react";

export default function Food(data) {
    console.log(data);
    return <li>{data.name}</li>
}