/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const ShowAllToys = ({toy}) => {
    return (
        <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
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
              <td>{toy.quantity}</td>
              <td>View Details</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};
ShowAllToys.propTypes = {
    toy: PropTypes.string.isRequired, // Define the prop validation for 'toy'
  };

export default ShowAllToys;