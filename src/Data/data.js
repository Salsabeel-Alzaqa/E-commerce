import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import delivery from "../assets/Services1.png";
import customer from "../assets/Services2.png";
import money from "../assets/Services3.png";
import hero1 from "../assets/hero.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
export const data = [
    {
        "id": 1,
        "title": "Support",
        "body": [
            {
                "text":"111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
            },
            {
                "text":"thebookhouse@gmail.com",
            },
            {
                "text":"+97015-88888-9999",
            }
        ]
    },
    {
        "id": 2,
        "title": "Account",
        "body": [
            {
                "text": "Login/Logout",
                "link":"",
            },
            {
                "text": "Cart",
                "link":"/cart"
            },
            {
                "text": "Wishlist",
                "link":"/profile",
            },
            {
                "text": "Books",
                "link":"/books",
            }
        ]
    },
    {
        "id": 3,
        "title": "Quick Link",
        "body": [
            {
                "text": "About Us",
                "link":"/about",
            },
            {
                "text": "Sales",
                "link":"/sales"
            },
            {
                "text": "Home",
                "link":"/",
            }
        ]
    },
    {
        "id": 4,
        "title": "Contact Us",
        "body": [
            {
                "icon": <FacebookIcon />,
                "link":"https://www.facebook.com/",
            },
            {
                "icon": <InstagramIcon />,
                "link":"https://www.instagram.com/"
            },
            {
                "icon": <TwitterIcon />,
                "link":"https://twitter.com/?lang=en",
            },
            {
                "icon": <LinkedInIcon />,
                "link":"https://www.linkedin.com/",
            }
        ]
    }
]
export const settings = [
    { text: 'Profile', link: '/Profile' },
    { text: 'Cart', link: '/cart' },
    { text: 'Logout', link: '/logout' },
];
export const pages = [
    { text: 'HOME', link: '/' },
    { text: 'BOOKS', link: '/books' },
    { text: 'SALES', link: '/sales' },
    { text: 'ABOUT US', link: '/about' },
];
export const services = [
    { image: delivery, title: "FREE AND FAST DELIVERY", body: "Free delivery for all orders over $140" },
    { image: customer, title: "24/7 CUSTOMER SERVICE", body: "Friendly 24/7 customer support" },
    { image: money, title: "MONEY BACK GUARANTEE", body: "We reurn money within 30 days" },
];
export const hero = [
    { image: hero3 , link:"/books" },
    { image: hero2 , link:"/sales"},
    { image: hero1 },
];