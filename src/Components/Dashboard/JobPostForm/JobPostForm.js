import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';
import { Editor } from '@tinymce/tinymce-react';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import parse from 'html-react-parser';
import tinymce from 'tinymce/tinymce';
import './JobPostForm.css'

// const ReactDOMServer = require('react-dom/server');
// const HtmlToReactParser = require('html-to-react').Parser;
// var TurndownService = require('turndown')




const JobPostForm = () => {
    const { user, loading } = useAuth();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [title, setTitle] = useState('');
    const [postedBy, setPostedBy] = useState('');
    const [dated, setDated] = useState('');
    const [desc, setDesc] = useState('');

    const history = useHistory();

    // const editorRef = useRef(null);
    
    // const log = () => {
    //     if (editorRef.current) {
    //     console.log(editorRef.current.getContent());
    //     }
    // };
    // // var turndownService = new TurndownService()
    // // var markdown = turndownService.turndown(editorRef.current.getContent())

    
    // tinymce.init({
    //     selector: '#mytextarea'
    //   });

    // var myContent = tinymce.get("mytextarea").getContent();
    // console.log(myContent);

    // tinymce.init({
    //     selector: '#mytextarea',
    //     menubar: true,
    //     plugins: [
    //       'advlist autolink lists link image charmap print preview anchor textcolor',
    //       'searchreplace visualblocks code fullscreen',
    //       'insertdatetime media table contextmenu paste code help'
    //     ],
    //     toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
    //     content_css: [
    //       '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    //       '//www.tinymce.com/css/codepen.min.css']
    //   });
      
    //   $(document).ready(function(){
    //       $("#get-data-form").submit(function(e){
    //           var content = tinymce.get("texteditor").getContent();
    //           $("#data-container").html(content);
    //           return false;
    //       });
    //   });

    // const htmlToReactParser = new HtmlToReactParser();
    // const reactElement = htmlToReactParser.parse('<p>sfvsv</p>');
    // const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
    // console.log(reactHtml)

    // const contentRaw = convertToRaw(editorRef.current.getContent());
    // const contentHTML = draftToHtml(contentRaw);

    //  document.getElementById("text").innerHTML = editorRef.current.getContent();
    // const onSubmit = e => {
    //     // e.preventDefault();

    //     // var myContent = tinymce.get("mytextarea").getContent();
    //     // document.getElementById("text").html(myContent)

    //     const formData = new FormData();
    //     formData.append('title', title);
    //     formData.append('postedBy', user.displayName);
    //     formData.append('dated', date);
    //     formData.append('desc', editorRef.current.getContent());

    //     fetch('https://floating-hamlet-78764.herokuapp.com/jobs', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {
    //                 alert('Job added successfully')
    //                 console.log('message added successfully')
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // }

    const onSubmit = data => {
        console.log(data);
        axios.post('https://floating-hamlet-78764.herokuapp.com/jobs', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Job added successfully');
                    reset();
                }
            })
    }

    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    return (
        <div>
            <div className="row">
                <div className="col-1 pe-0 me-0">
                    <Dashboard></Dashboard>
                </div>
                <div className="col-11 ps-0">
                    {user.displayName ? 
                        <h2 style={{backgroundColor: 'rgb(170, 212, 247)', fontFamily: '"Dosis", sans-serif', color: 'rgb(59, 96, 133)'}} className="p-3 pb-4 text-center fw-bold mb-5">
                        {user.displayName}'s dashboard</h2> :
                        <h2 style={{backgroundColor: 'rgb(170, 212, 247)', fontFamily: '"Dosis", sans-serif', color: 'rgb(59, 96, 133)'}} className="p-3 pb-4 text-center fw-bold mb-5">
                        My dashboard</h2>

                    }
                    <div className="w-50 mx-auto p-3 border rounded mb-3 border-info add-service">
                        <h1 className="mb-3 heading fw-normal">Job Posting Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className=''>
                            <input {...register("title", { required: true })} placeholder="Job Title" className='w-75 padd' onChange={e => setTitle(e.target.value)}/>
                            {errors.title?.type === 'required' && "Job title is required"}

                            {/* <textarea id="mytextarea" name="desc"></textarea>

                            <div id="text">

                            </div>

                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                onChange={e => setDesc(e.target.value)}
                                apiKey='xpitpceq3kcjw59z7mho277w9ubw2g1o2uykblpzy1c7qbu7'
                                initialValue="<p>This is the initial content of the editor.</p>"
                                init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat preview| help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                            <button onClick={log}>Log editor content</button> */}
                            <textarea defaultValue="" {...register("context")} placeholder="Job Context" className='w-75 padd'/>
                               
                            <textarea defaultValue="" {...register("responsibilities")} placeholder="Job Responsibilities" className='w-75 padd'/>

                            <textarea defaultValue="" {...register("education")} placeholder="Educational Requirements" className='w-75 padd'/>

                            <textarea defaultValue="" {...register("experience")} placeholder="Experience Requirements" className='w-75 padd'/>

                            <textarea defaultValue="" {...register("additional")} placeholder="Additional Requirements" className='w-75 padd'/>

                            <textarea defaultValue="" {...register("location")} placeholder="Job location" className='w-75 padd'/>

                            <textarea defaultValue="" {...register("salary")} placeholder="Salary" className='w-75 padd'/>

                            <input defaultValue={user.displayName} {...register("postedBy")} className='w-75 padd' readOnly/>

                            <input defaultValue={date} {...register("dated")} className='w-75 padd' readOnly/>
                                    
                            <input type="submit" className="btn text-light heading btn-lg w-50 fw-normal" style={{backgroundColor: 'rgb(59, 96, 133)'}} value="Post Job"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobPostForm;