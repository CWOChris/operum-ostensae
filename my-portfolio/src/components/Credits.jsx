import React from "react";
import { Box, Typography, Link, List } from "@mui/material";

const Credits = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" sx={{ paddingTop: '64px' }}>
            <List>
            <Typography variant="body1" textAlign="center">
                <>Aviation Icons Created by: </>
                <Link href="https://www.flaticon.com/free-icons/aviation" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                    Freepik - Flaticon
                </Link>
            </Typography>
            <br />
            <Typography variant="body1" textAlign="center">
                <>Cornucopia Icons Created by: </>
                <Link href="https://www.flaticon.com/free-icons/cornucopia" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                    iconixar - Flaticon
                </Link>
            </Typography>
            <br />
            <Typography variant="body1" textAlign="center">
                <>Truck Icons Created by: </>
                <Link href="https://www.flaticon.com/free-icons/truck" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                    Freepik - Flaticon
                </Link>
            </Typography>
            <br />
            <Typography variant="body1" textAlign="center">
                <>Angel Icons Created by: </>
                <Link href="https://www.flaticon.com/free-icons/angel" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                    Freepik - Flaticon
                </Link>
            </Typography>
            <br />
            <Typography variant="body1" textAlign="center">
                <>Coding icons created by: </>
                <Link href="https://www.flaticon.com/free-icons/coding" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                    juicy_fish - Flaticon
                </Link>
            </Typography>
            <br />
            <Typography variant="body1" textAlign="center">
                <>Scholar icons created by: </>
                <Link href="https://www.flaticon.com/free-icons/scholar" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                    popcornarts - Flaticon
                </Link>
            </Typography>
            <br />
            <Typography variant="body1" textAlign="center">
                <>Veterans-day icons created by: </>
                <Link href="https://www.flaticon.com/free-icons/veterans-day" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                    Freepik - Flaticon
                </Link>
            </Typography>
            <br />
            </List>
        </Box>
    );
};

export default Credits;