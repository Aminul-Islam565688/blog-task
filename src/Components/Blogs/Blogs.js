import axios from 'axios';
import React from 'react';
import javaScript from '../../image/javascript.png';
import './Blogs.scss';

const Blogs = () => {


    const config = {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    }

    const handleReaction = (react) => {
        if (react === 'happy') {
            console.log('you clicked on happy')
            axios.post(`http://localhost:7575/react/happy`)
                .then(data => console.log(data))
                .catch(err => console.log(err))
        } else if (react === 'sad') {
            console.log('you clicked on sad')
        } else if (react === 'angry') {
            console.log('you clicked on angry')
        }
    }

    return (
        <div className='blog-cart'>
            <div className='img'>

                <img src={javaScript} alt="" />
            </div>
            <div className='blog-content'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta illo dolores dignissimos! Fugit nemo ad minima voluptates adipisci iusto iste, dolores nostrum officiis quo delectus ipsam. Maxime delectus nulla, dolor facere ipsa reiciendis. Culpa at cupiditate eum quae itaque nulla aliquam cumque est doloribus? Facilis accusamus animi qui quibusdam assumenda?</p>
                <button onClick={(react) => { handleReaction('happy') }} className='happy'>Happy</button>
                <button onClick={(react) => { handleReaction('sad') }} className='sad'>Sad</button>
                <button onClick={(react) => { handleReaction('angry') }} className='angry'>Angry</button>
            </div>
        </div>
    );
};

export default Blogs;