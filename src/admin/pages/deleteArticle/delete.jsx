import React, { useState } from 'react';
import './delete.scss';  
import { useNavigate } from 'react-router-dom';

const DeleteArticle = () => {
    const [email, setEmail] = useState('');
    const [id, setid] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Example: Send delete request to server
            const response = await fetch('http://127.0.0.1:5000/api/v1/articles/delete_article', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, id }),
            });


            if (!response.ok) {
                navigate('/admin');
            }

            const result = await response.json();
            navigate('/admin');

            if (result) {
                navigate('/admin');
            } else {
                setErrorMessage('Invalid email or id');
            }

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="delete-container">
            <h2>Delete Article</h2>
            <form className="delete-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="id">Article id:</label>
                    <input type="text" id="id" name="id" value={id} onChange={(e) => setid(e.target.value)} required />
                </div>
                <div className="form-group">
                    <button type="submit">DELETE</button>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default DeleteArticle;
