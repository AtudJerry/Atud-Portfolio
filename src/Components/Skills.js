import react from "react"
import { SkillData as data } from "./Data"
import  Box  from "@mui/material/Box"
import {ResponsiveBar }from "@nivo/bar"
import { Typography } from "@mui/material"
const Skills = () => {


    return (
        <div className="skills">
            <Box className = "second-section"    >
            <br></br> 
            <Typography variant="h4">SKILLS</Typography>
                <div className="bar">
                <ResponsiveBar
        data={data}
        keys={[
            
            'competence'
        
        ]}
        indexBy="Tool"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.15}
        innerPadding={3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'category10' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 3,
                spacing: 3
            }
        ]}
        fill={[
            {
                match: {
                    id: 'competence'
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
        borderWidth={6}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '2.6'
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 3,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Tool',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 3,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Competence level',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={11}
        labelSkipHeight={20}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.6'
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
                itemsSpacing: 9,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
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
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in Tool: "+e.indexValue}
    />
    </div>


            </Box>
            <ul type = "square">
                <li>PS/AI = Adobe Photoshop/Adobe Illustrator</li>
                <li>JS = JavaScript</li>
                <li>D.D = Digital Drawing with Adobe Illustrator</li>

            </ul>
            


        </div>

    )
}
export default Skills