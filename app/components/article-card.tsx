import Image from 'next/image'

interface ArticleCardProps {
    title: string;
    imageUrl: string;
    date: string;
    description: string;
    url: string;
}

export default function ArticleCard(props: ArticleCardProps) {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <div className='flex flex-col items-start border border-white-300 rounded-lg p-4 bg-white shadow-md h-[400px] w-[300px] text-black'>
                <h2 className='mb-4'>{props.title}</h2>

                <Image className='self-center mb-4' src={props.imageUrl} 
                    alt={props.title} 
                    width={100}
                    height={100}/>

                <p>{props.date}</p>
                <p>{props.description.toString().substring(0, 100)}</p>
            </div>
        </a>
    )
}

