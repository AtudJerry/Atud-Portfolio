import react from "react"
import { SkillData as data } from "./Data"
import  Box  from "@mui/material/Box"
import {ResponsiveBar }from "@nivo/bar"
import { Typography } from "@mui/material"
const Skills = () => {


    return (
        <div className="skills">
            <Box className = "second-section"    >
                <div className="bar">
                <br></br> <br></br>
                    <Typography variant="h4">SKILLS</Typography>
            <ResponsiveBar
         
        data={data}
        keys={[
            'competence',
            
        ]}
        indexBy="Tool"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.7}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 3,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 15
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 15,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'Tool',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'level',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={17}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 6,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in Tool: "+e.indexValue}}
    />
    </div>




            </Box>
            


        </div>

    )
}
export default Skills