import React from 'react';

const ArticleTable = ({ articles, setArticles }) => {
  const deleteArticle = async (id) => {
    try {
      await fetch(`http://127.0.0.1:5000/api/v1/articles/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setArticles(articles.filter(article => article.id !== id));
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <div className="articleTable">
      <h2>Articles</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Text</th>
            <th>User</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.title}</td>
              <td>{article.text}</td>
              <td>{article.user}</td>
              <td>{article.date}</td>
              <td>
                <button onClick={() => deleteArticle(article.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleTable;
