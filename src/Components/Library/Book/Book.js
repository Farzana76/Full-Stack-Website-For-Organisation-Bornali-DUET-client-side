import React from 'react';

const Book = (props) => {
    const {title, writer} = props.book;

    return (
        <tr>
        <td>{title}</td>
        <td>{writer}</td>
        </tr>
    );
};

export default Book;