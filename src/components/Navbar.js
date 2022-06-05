import { AppBar, Button, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import logo from '../images/logo.png'

const menuItems = [
    {
        name: 'about us',
        path: '/'
    },
    {
        name: 'projects',
        path: '/'
    },
    {
        name: 'diversification',
        path: '/'
    },
    {
        name: 'our process',
        path: '/'
    },
    {
        name: 'testimonials',
        path: '/'
    },
    {
        name: 'career',
        path: '/'
    },
    {
        name: 'contact us',
        path: '/'
    }
]

const Navbar = () => {
    return (
        <AppBar
            sx={{
                bgcolor: 'white',
                height: 70
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    sx={{
                        mt:1,
                        height: 70
                    }}
                >
                    <img height={'90%'} src={logo} alt="" />
                </Box>

                <Box sx={{display: 'flex'}}>
                    {menuItems.map((item) => (
                        <div className="menuItem">
                            <Button
                                sx={{
                                    fontWeight: 400,
                                    ml: 3
                            }}
                            >{item.name}</Button>
                            <div className="bar"></div>
                        </div>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;