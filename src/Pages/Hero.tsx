import {Footer} from '../components/Footer'
import Home from '../components/Home'
import { MovieBody } from '../components/MovieBody'
import {instagram, facebook, twitter, linkedin } from "../assets";

const Hero: React.FC = () => {

    const footerLinks = [
        {
            title: "Top Categories",
            links: ["Action", "Romantic", "Drama", "Historical"],
        },
        {
            title: "Company",
            links: ["Home", "About", "Contact Us", "Movies"],
        },
        {
            title: "Partner",
            links: ["Our Partner", "Become a Partner"],
        },
    ];

    const socialMedia = [
        {
            id: "Instagram",
            icon: instagram,
            link: "https://www.instagram.com/",
        },
        {
            id: "Facebook",
            icon: facebook,
            link: "https://www.facebook.com/",
        },
        {
            id: "Twitter",
            icon: twitter,
            link: "https://www.twitter.com/",
        },
        {
            id: "Linkedin",
            icon: linkedin,
            link: "https://www.linkedin.com/",
        },
    ];
    
    return (
        <>
            <Home />
            <MovieBody />
            <Footer footerLinks={footerLinks} socialMedia={socialMedia} />
        </>
    )
}

export default Hero