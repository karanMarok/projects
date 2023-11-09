import React from 'react'

const PhotoContent = () => {
    return (
        <>
            <div style={{height: "100%", display: "flex", justifyContent:"spaceAround"}}>
                <div>
                    <img style={{margin: "2% 0 2% 2%", width:"40vw", height: "auto"}} src="https://t4.ftcdn.net/jpg/01/29/74/69/240_F_129746900_qTK0cQTgktIZnm6rVEgtT9NlIn9fnMTT.jpg"/>
                </div>
                <div style={{margin: "0 0 2% 2%"}}>
                    <p style={{fontSize: "3rem"}}>Golden Temple Amritsar</p>
                    <p>The Golden Temple (also known as the Harimandir Sahib or the Darbār Sahib) is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. It is one of the holiest sites in Sikhism. The man-made pool on the site of the temple was completed by the fourth Sikh Guru, Guru Ram Das, in 1577. In 1604, Guru Arjan Dev, the fifth Sikh Guru, placed a copy of the Adi Granth in Harmandir Sahib and is the prominent figure in the development of gurudwara who built it in the 16th century</p>
                    <p>The Golden Temple is an open house of worship for all people, from all walks of life and faiths. It has a square plan with four entrances, and a circumambulation path around the pool. The four entrances to the gurudwara symbolises the Sikh belief in equality and the Sikh view that all people are welcome into their holy place. </p>
                </div>
            </div>
        </>
    )
}

export default PhotoContent