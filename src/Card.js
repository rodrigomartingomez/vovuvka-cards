
const Card = ({ pic, name, description }) => {
    return (
        <div className='bg-light-pink dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img alt={name} src={pic} class="fixed-size" />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card