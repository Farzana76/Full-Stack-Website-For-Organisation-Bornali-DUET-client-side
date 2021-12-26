import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Menu from '../../Menu/Menu';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        fetch('https://floating-hamlet-78764.herokuapp.com/books')
        .then(res => res.json())
        .then(data => {
            setBooks(data);
            setDisplayBooks(data);
        })
    }, [])

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedBooks = books.filter(book => book.title.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayBooks(matchedBooks);
    }
    return (
        <>
            <Menu></Menu>
            <div className='box pb-5 px-5'>
                <div className='pt-5'>
                    <h1 className='pt-5'>Available Books</h1>
                </div>
                <hr className='w-50 mx-auto'></hr>
                <div className="d-flex justify-content-end me-5 mb-3">
                    <input
                        type="text"
                        onChange={handleSearch}
                        placeholder="Search by Book Title" 
                        className='w-25 form-control'/>
                </div>
                <Table striped bordered hover responsive style={{backgroundColour: "blue"}}>
                    <thead>
                        <tr>
                        <th>Book Title</th>
                        <th>Book Writer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            displayBooks.map(book => <Book
                                key = {book._id}
                                book={book}
                                ></Book>)
                        }
                    </tbody>
                </Table>
            </div>
            <Footer></Footer> 
        </>
    );
};

export default Books;