import React from 'react'

const Footer = () => {
    const footerLinks = (element) => {
        const allfooterlinks = document.querySelectorAll('.footerLinks');
        switch (element) {
            case 0:
                allfooterlinks.forEach((item, index) => index === 0 ? item.style.opacity = 1 : item.style.opacity = 0.2)
                break;
            case 1:
                allfooterlinks.forEach((item, index) => index === 1 ? item.style.opacity = 1 : item.style.opacity = 0.2)
                break;
            case 2:
                allfooterlinks.forEach((item, index) => index === 2 ? item.style.opacity = 1 : item.style.opacity = 0.2)
                break;
            case 3:
                allfooterlinks.forEach((item, index) => index === 3 ? item.style.opacity = 1 : item.style.opacity = 0.2)
                break;
            case 4:
                allfooterlinks.forEach((item, index) => index === 4 ? item.style.opacity = 1 : item.style.opacity = 0.2)
                break;
            case 5:
                allfooterlinks.forEach((item, index) => index === 5 ? item.style.opacity = 1 : item.style.opacity = 0.2)
                break;
            default:
                allfooterlinks.forEach((item) => item.style.opacity = 1 )
                break;
        }
    }

    const linksBackToNormal = () =>{
        const allfooterlinks = document.querySelectorAll('.footerLinks');
        allfooterlinks.forEach((item) => item.style.opacity = 1 );
    }
    
    return (
        <>
            <footer>
                <h1>Let's <br /> #ConnectOnCutting?</h1>
                <aside onMouseLeave={linksBackToNormal}>
                    <a href="/" className='footerLinks' onMouseOver={() => footerLinks(0)} data-cursorpointer-mini={true}>Home</a>
                    <a href="/story" className='footerLinks' onMouseOver={() => footerLinks(1)} data-cursorpointer-mini={true}>Story</a>
                    <a href="/media" className='footerLinks' onMouseOver={() => footerLinks(2)} data-cursorpointer-mini={true}>Media</a>
                    <a href="/franchie" className='footerLinks' onMouseOver={() => footerLinks(3)} data-cursorpointer-mini={true}>Franchise</a>
                    <a href="/events" className='footerLinks' onMouseOver={() => footerLinks(4)} data-cursorpointer-mini={true}>Event</a>
                    <a href="/chaiwalacares" className='footerLinks' onMouseOver={() => footerLinks(5)} data-cursorpointer-mini={true}>Chai Wala Cares</a>
                </aside>
                <div>
                    <h5>Email</h5>
                    <a href="mailto: info@mbachaiwala.com">Info@mbachaiwala.com</a>
                    <a href="mailto: franchise@mbachaiwala.com">Franchise@mbachaiwala.com</a>
                </div>
                <div>
                    <h5>Phone</h5>
                    <a href="tel: +91722905222">+91722905222</a>
                </div>
                <p>&copy; COPYRIGHT 2023 MBA CHAIWALA. <br />MADE BY AJJ Patel for educational purpose</p>
            </footer>
            <div className='footer'></div>
        </>
    )
}

export default Footer