import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import EducationContent from './EducationContent';
import './ArticleDetail.css';

const ArticleDetail= () => {
  const { articleId } = useParams();  // Assuming you have :articleId in your route
  const [content, setContent] = useState('');

  useEffect(() => {
    const mdPath = EducationContent[articleId]?.mdLink || '';
    if (mdPath) {
      fetch(mdPath)
        .then(response => response.text())
        .then(text => setContent(text))
        .catch(error => console.error('Error fetching markdown:', error));
    }
  }, [articleId]);

  return (
    <div className="article-detail">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default ArticleDetail;