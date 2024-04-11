import React from 'react'

const Snackladder = () => {

    const blocks = Array.from({ length: 100 }, (_, index) => index + 1);


    return (
        <div>
            <div className="snack-ladder">
                {blocks.map((block) => (
                    <div key={block} className={block % 2 === 0 ? 'black-block' : 'white-block'}>
                        {block}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Snackladder
