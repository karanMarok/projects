const Hero = () => {
    return (
        <>
            <div className="outer mb-5">  
                <div className="inner" style={{
                    background:`url(https://as2.ftcdn.net/v2/jpg/00/88/33/81/1000_F_88338147_3Nv7YpFCnCFqvM13G1CNDuKxPDR58CZ1.jpg)`
                    ,backgroundRepeat:"no-repeat", minWidth:"100vw", height:"100vh",
                    backgroundSize:"cover",
                    backgroundPosition: "center center"}}>
                    <h1 style={{padding:"5% 0 0 5%"}}>Golden Temple Amritsar</h1>
                    <p style={{ padding:"1% 0 0 5%", width: "35rem" }}>The Golden Temple (also known as the Harimandir Sahib or the Darbār Sahib) is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism. It is one of the holiest sites in Sikhism. The man-made pool on the site of the temple was completed by the fourth Sikh Guru, Guru Ram Das, in 1577. In 1604, Guru Arjan Dev, the fifth Sikh Guru, placed a copy of the Adi Granth in Harmandir Sahib and is the prominent figure in the development of gurudwara who built it in the 16th century</p>
                </div>
            </div>
        </>
    )
}

export default Hero