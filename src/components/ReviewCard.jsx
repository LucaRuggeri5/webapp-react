const ReviewCard = ({ reviewProp }) => {

    // destrutturiamo oggetto review
    const { name, vote, text } = reviewProp;

    return (
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <p className="card-text fs-5">
                        {text}
                    </p>
                    <strong className="fs-5">⭐{vote}/5</strong>
                    <address><i className="fs-5">By {name}</i></address>
                </div>
            </div>
        </>

    )
}

export default ReviewCard