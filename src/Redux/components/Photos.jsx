import React from 'react'

const Photos = () => {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <img style={{width: "45vw"}} src="https://t4.ftcdn.net/jpg/01/29/74/69/240_F_129746900_qTK0cQTgktIZnm6rVEgtT9NlIn9fnMTT.jpg"/>
                <img style={{width: "45vw", marginLeft:"2rem"}} src="https://t4.ftcdn.net/jpg/03/50/71/03/240_F_350710311_4kcu7tmZIHnJOe57pU0HLpRiqlx8zQlt.jpg"/>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <img style={{width: "45vw"}} src="https://t3.ftcdn.net/jpg/05/86/87/44/240_F_586874415_41MZIOioSavMXvRU0U8oTPBv4KLMYLaR.jpg"/>
                <img style={{width: "45vw", marginLeft:"2rem"}} src="https://t4.ftcdn.net/jpg/03/04/28/51/240_F_304285110_5QIfRBCL3iDjB8sQiCiAu2MLLYS9auMW.jpg"/>
            </div>
        </>
    )
}

export default Photos;