/* eslint-disable no-unused-vars */
import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    useTitle('All Toys');
    const toys = useLoaderData()
    return (
        <div>
            <h2> added toys {toys.length}</h2>
            {
                toys.map(toy=> <>
                <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Seller</th> 
        <th>Toy Name</th> 
        <th>Sub Category</th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>Details</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <td>{toy.sellerName}</td> 
        <td>{toy.toyName}</td> 
        <td>{toy.subcategory}</td> 
        <td>{toy.price}</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
        <td>View Details</td>
      </tr>
    </tbody> 
  </table>
</div>
                </>)
            }
        </div>
    );
};

export default AllToys;