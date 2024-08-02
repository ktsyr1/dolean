
const Card = ({ title, content }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Card;
