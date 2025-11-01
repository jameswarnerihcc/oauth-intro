'use client';
import { useState } from 'react';
import ArticleCard from './article-card';
import { BarLoader, ClipLoader } from 'react-spinners';

export default function Search(props: {username: string}) {

  const [articles, setArticles] = useState([]);
  const [dateRange, setDateRange] = useState({ start: 0, end: 0 });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchArticles() {
    setArticles([]);
    setLoading(true);
    if(!searchTerm || !dateRange.start || !dateRange.end) return;
    const response = await fetch(`https://www.loc.gov/newspapers/?dates=${dateRange.start}/${dateRange.end}&dl=page&q=${searchTerm}&fo=json&c=5&sp=1`);
    const data = await response.json();
    setArticles(data.content.results);
  }

  return (
    <div className='flex flex-col items-center m-8'>
      <h1 className='font-serif text-4xl m-4'>Welcome, {props.username}.</h1>
      <h2 className='font-serif text-4xl m-4'>Unlock stories about your ancestors.</h2>
      <div className='flex flex-col gap-2 mt-4 mb-4'>
        <div>
          <label className='font-serif text-xl'>Your ancestors full name: </label>
          <input type="text" placeholder="Ancestor name" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div>
          <label className='font-serif text-xl'>Date Range: </label>
          <input type="number" placeholder="Start Year" onChange={(e) => setDateRange({...dateRange, start: parseInt(e.target.value)})} />
          <input type="number" placeholder="End Year" onChange={(e) => setDateRange({...dateRange, end: parseInt(e.target.value)})} />
        </div>
        <button type="submit" className='bg-teal-50 hover:bg-teal-400 text-black hover:text-white py-2 px-4 rounded mt-4' onClick={fetchArticles}>Search</button>
      </div>
      
      <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mr-[10%] ml-[10%] md:mr-[25%] md:ml-[25%] mt-4'>
        {articles.length > 0 ? articles.map((article: any, index: number) => (
          <ArticleCard key={index} 
                       title={article.title} 
                       imageUrl={article.image_url[0]} 
                       date={article.date} 
                       description={article.description} 
                       url={article.id}/>
        )) : <ClipLoader
            loading={loading}
            color='#ffffff'
            size={100}
            aria-label="Loading Spinner"
        />}
      </div>

    </div>
  );
}
