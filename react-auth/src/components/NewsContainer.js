import React from 'react'

const news = 
[
    {title: 'Jacob & Co. and G-Dragon Celebrate South Korea Boutique Opening', 
        date: '2025-03-10T12:00:00', 
        image: 'newsGrid/news1.png'},
    {title: 'Avirex Celebrates 50th Anivversary With Limited-Edition Hellstar Collab', 
        date: '2025-03-12T12:00:00', 
        image: 'newsGrid/news2.png'},  
    {title: 'Moncler Genius x FRGMT Collection Reimagines Everyday Wear', 
        date: '2025-03-15T12:00:00',
        image: 'newsGrid/news3.png'},
    {title: 'Breaking Down Supreme SS25',
        date: '2025-03-10T12:00:00',
        image: 'newsGrid/news4.png'},
]

export default function NewsContainer(){

    return(
        <div className="news_container">
            <p
            style={{
                fontSize: "2rem",
                display: "inline-block",
                justifyContent: "center",
                fontWeight: 400,
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(0, 0, 0)",
                padding: "10px",
                borderRadius: "20px",
            }}
            >
            Blogul Pantof-arilor
            </p>
            <div className="article-grid">
                {news.map((item)=>(
                    <div className='article' key={item.title}>
                        <img src={item.image} alt={item.index}/>
                        <div className="article-text">
                            <h2 style={{fontWeight:300}}>{item.title}</h2>
                            <p>{Math.floor((Date.now() - new Date(item.date).getTime()) / (1000*60*60*24))} days ago</p>
                        </div>
                    </div>
                ))}
                {/* <div className="article"></div>
                <div className="article"></div>
                <div className="article"></div>
                <div className="article"></div> */}

            </div>
        </div>
    )

}