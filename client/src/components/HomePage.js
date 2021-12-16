import React from "react";
import styled from "styled-components";

function HomePage() {
    return(
        <div>
            <Container>
            <h1>Welcome to my VC Lab Code Challenge!</h1>
            
            <h2>I created this site using Rails on the backend and React on the frontend.</h2>

<h3>I created the database by importing the data from the CSV file into a test table. I then used the data from that table to populate my prospect and company relational tables.</h3>

<h3>In the nav bar above you can navigate to the prospect and company pages.</h3>

<h3>On the prospects page you can browse through prospects, search prospects by name, or create a new prospect. Upon selecting a specific prospect, you can view their full profile as well as edit their information.</h3>

<h3>On the companies page you can browse through companies, search companies by name, or create a new company. Upon selecting a specific company, you can also view all prospects currently working at that company.</h3>

<h2>I had a blast working on this site and really hope you enjoy it!</h2>

<h2>Thank you so much for the opportunity to be considered,</h2>

<h1>Noam Lubofsky</h1>
            </Container>
        </div>
        
    )
}

const Container = styled.header`
padding: 5vh;
`;

export default HomePage