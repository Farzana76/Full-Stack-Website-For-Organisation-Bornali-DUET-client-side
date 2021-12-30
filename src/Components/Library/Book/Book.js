import React from 'react';
import './Book.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileDownload} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const element = <FontAwesomeIcon icon={faFileDownload} />

const Book = (props) => {
    const {title, writer, link} = props.book;

    return (
        <tr>
        <td>{title}</td>
        <td>{writer}</td>
        <td>
            {
                link ?
                <a className='btn btn-primary' href={link} target="_blank" rel="noreferrer">
                {element} Download PDF 
                </a> :
                <button className='btn btn-secondary' href={link} target="_blank" rel="noreferrer" disabled>
                {element} No PDF Available 
                </button>

            }
            
        </td>
        </tr>
    );
};

export default Book;