import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Credits = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Typography variant="body1" textAlign="center">
                <>Aviation Icons Created by: </>
                <Link href="https://www.flaticon.com/free-icons/aviation" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                    Freepik - Flaticon
                </Link>
            </Typography>
        </Box>
    );
};

export default Credits;