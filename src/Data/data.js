import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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