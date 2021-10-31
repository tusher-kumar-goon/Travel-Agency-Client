import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://obscure-wildwood-10356.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Done');
                    reset();
                }
            })
    }

    return (
        <div className="mt-5 add-service">
            <h2 >Add Your Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <textarea {...register("details")} placeholder='Details' />
                <input type="number" {...register("price")} placeholder='Price' />
                <input {...register("img")} placeholder='Img Url' />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;