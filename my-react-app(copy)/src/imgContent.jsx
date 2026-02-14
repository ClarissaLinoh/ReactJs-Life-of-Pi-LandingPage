import './imgContent.css'

function Image({ items }){
    return (
        <div className='img-content'>
            {items.map((item, index) => (
                <div className='card' key={index}>
                    <a href="https://www.ssgopalganj.in/online/E-Books/CLASS%20VIII/Life%20of%20Pi%20by%20Yann%20Martel.pdf">
                    <img src={item.image}/>
                    <p>{item.text}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Image