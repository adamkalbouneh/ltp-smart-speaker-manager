import React from "react";
import { Box, Container } from "@mantine/core";
import { Grid } from "@mantine/core";
import "../styling/Home.css"
import HomePageWeather from "./HomePageWeather";
import NavBar from "./NavBar";
import DashboardHeader from "./DashboardHeader";

const HomePage = () => {
    return (
        <div >
            <DashboardHeader />
            <NavBar />
            <div>
                <Container size="xl" style={{paddingTop: '100px' ,border: '1px solid white' , paddingLeft: '130px'}}>
                    Home Page

                    <Grid>
                        <Grid.Col span="auto">
                            <div className="box">
                                Hi Charlotte

                            </div>
                        </Grid.Col>
                        <Grid.Col span="auto">
                            <div className="box">
                                Hi Charlotte

                            </div>
                        </Grid.Col>
                        <Grid.Col span="auto">
                            <div className="box">

                                <HomePageWeather />


                            </div>
                        </Grid.Col>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}
// absolute div on the left hand most side and which will have the nav bar - verically aligned
export default HomePage;