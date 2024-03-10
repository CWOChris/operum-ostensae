import React from "react";
import { Box, Typography, Link, List, ListItemIcon } from "@mui/material";

const Credits = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" sx={{ paddingTop: '64px' }}>
            <List>
                <Typography variant="body1" textAlign="center">
                    <ListItemIcon>
                        <img src={`${process.env.PUBLIC_URL}/assets/cornucopia.png`} alt="Cornucopia Icon" style={{ width: '40px', height: '40px' }} />
                    </ListItemIcon>
                    <>Cornucopia Icons Created by: </>
                    <Link href="https://www.flaticon.com/free-icons/cornucopia" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                        iconixar - Flaticon
                    </Link>
                </Typography>
                <br />
                <Typography variant="body1" textAlign="center">
                    <ListItemIcon>
                        <img src={`${process.env.PUBLIC_URL}/assets/semi.png`} alt="Truck Icon" style={{ width: '40px', height: '40px' }} />
                    </ListItemIcon>
                    <>Truck Icons Created by: </>
                    <Link href="https://www.flaticon.com/free-icons/truck" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                        Freepik - Flaticon
                    </Link>
                </Typography>
                <br />
                <Typography variant="body1" textAlign="center">
                    <ListItemIcon>
                        <img src={`${process.env.PUBLIC_URL}/assets/angel.png`} alt="Angel Icon" style={{ width: '40px', height: '40px' }} />
                    </ListItemIcon>
                    <>Angel Icons Created by: </>
                    <Link href="https://www.flaticon.com/free-icons/angel" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                        Freepik - Flaticon
                    </Link>
                </Typography>
                <br />
                <Typography variant="body1" textAlign="center">
                    <ListItemIcon>
                        <img src={`${process.env.PUBLIC_URL}/assets/programming.png`} alt="Coding Icon" style={{ width: '40px', height: '40px' }} />
                    </ListItemIcon>
                    <>Coding icons created by: </>
                    <Link href="https://www.flaticon.com/free-icons/coding" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                        juicy_fish - Flaticon
                    </Link>
                </Typography>
                <br />
                <Typography variant="body1" textAlign="center">
                    <ListItemIcon>
                        <img src={`${process.env.PUBLIC_URL}/assets/book.png`} alt="Book Icon" style={{ width: '40px', height: '40px' }} />
                    </ListItemIcon>
                    <>Scholar icons created by: </>
                    <Link href="https://www.flaticon.com/free-icons/scholar" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                        popcornarts - Flaticon
                    </Link>
                </Typography>
                <br />
                <Typography variant="body1" textAlign="center">
                    <ListItemIcon>
                        <img src={`${process.env.PUBLIC_URL}/assets/veterans-day.png`} alt="Veterans Icon" style={{ width: '40px', height: '40px' }} />
                    </ListItemIcon>
                    <>Veterans-Day icons created by: </>
                    <Link href="https://www.flaticon.com/free-icons/veterans-day" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                        Freepik - Flaticon
                    </Link>
                </Typography>
                <br />
                <Typography variant="body1" textAlign="center">
                    <ListItemIcon>
                        <img src={`${process.env.PUBLIC_URL}/assets/helicopter.png`} alt="Helicopter Icon" style={{ width: '40px', height: '40px' }} />
                    </ListItemIcon>
                    <>Helicopter icons created by: </>
                    <Link href="https://www.flaticon.com/free-icons/helicopter" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                        Sea.icon - Flaticon
                    </Link>
                </Typography>
                <br />
                <Typography variant="body1" textAlign="center">
                    <ListItemIcon>
                        <img src={`${process.env.PUBLIC_URL}/assets/planet.png`} alt="Travel Icon" style={{ width: '40px', height: '40px' }} />
                    </ListItemIcon>
                    <>Travel icons created by: </>
                    <Link href="https://www.flaticon.com/free-icons/travel" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                        Freepik - Flaticon
                    </Link>
                </Typography>
                <br />
                <Typography variant="body1" textAlign="center">
                    <ListItemIcon>
                        <img src={`${process.env.PUBLIC_URL}/assets/store.png`} alt="Retail Icon" style={{ width: '40px', height: '40px' }} />
                    </ListItemIcon>
                    <>Retail icons created by: </>
                    <Link href="https://www.flaticon.com/free-icons/retail" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                        pojok d - Flaticon
                    </Link>
                </Typography>
                <br />
                <Typography variant="body1" textAlign="center">
                    <ListItemIcon>
                        <img src={`${process.env.PUBLIC_URL}/assets/united-states.png`} alt="United States Icon" style={{ width: '40px', height: '40px' }} />
                    </ListItemIcon>
                    <>United States icons created by: </>
                    <Link href="https://www.flaticon.com/free-icons/united-states" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                        CorelisOP - Flaticon
                    </Link>
                </Typography>
                <br />
                <Typography variant="body1" textAlign="center">
                    <ListItemIcon>
                        <img src={`${process.env.PUBLIC_URL}/assets/pilot.png`} alt="Pilot Icon" style={{ width: '40px', height: '40px' }} />
                    </ListItemIcon>
                    <>Pilot icons created by: </>
                    <Link href="https://www.flaticon.com/free-icons/pilot" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                        Freepik - Flaticon
                    </Link>
                </Typography>
                <br />
                <Typography variant="body1" textAlign="center">
                    <ListItemIcon>
                        <img src={`${process.env.PUBLIC_URL}/assets/package.png`} alt="Plane Icon" style={{ width: '40px', height: '40px' }} />
                    </ListItemIcon>
                    <>Package icons created by: </>
                    <Link href="https://www.flaticon.com/free-icons/box" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                        Freepik - Flaticon
                    </Link>
                </Typography>
                <br />
            </List>
        </Box>
    );
};

export default Credits;