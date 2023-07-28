import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function InfoSection() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <h1 className="tagline">Upgrade Your Mind, Unleash Your Potential!</h1>


            <h1 className="cyberpunk info-header">How it works</h1>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Step 1: Neurolink Chip Implantation
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    The first step towards unlocking your full potential is the painless implantation of our state-of-the-art Neurolink chip. Designed by leading neuroscientists, this tiny, non-invasive chip seamlessly integrates with your brain's neural networks, acting as a conduit between your mind and the vast NeuroSkills library.
                    </Typography>
                    <img className='info-img' src="https://armenpress.am/static/news/b/2023/05/1111849.jpg" alt="" />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Step 2: Explore Our Skill Library</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Welcome to the realm of possibilities! Explore our extensive skill library covering a wide array of disciplines. From mastering programming languages like JavaScript, Python, Java, and more, to honing your martial arts prowess in Karate, Muay Thai, Judo, Jiu-Jitsu, and Kung-Fu. For those seeking adventure, ride the waves with Surfing, hit the bullseye with Archery, or discover the grace of Gymnastics. We even offer comprehensive driving skills, from Manual and Automatic to Forklift operation.
                    </Typography>
                    <img className='info-img' src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80" alt="" />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Step 3: Choose Your Skill
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Select the skill you wish to acquire, and our platform will customize the neural upload to match your brain's unique architecture. We ensure that the process is safe, efficient, and optimized for a seamless learning experience.
                    </Typography>
                    <img className='info-img' src="https://images.unsplash.com/photo-1545262841-5283004cef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="" />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Step 4: Upload and Experience</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    With a simple click, witness the magic happen! Our Neural Upload Engine transfers the skill directly to your brain's neural circuits, unlocking latent potential and boosting your abilities like never before. Feel the transformation as your brain processes the information and incorporates the skill into your being.
                    </Typography>
                    <img className='info-img' src="https://images.unsplash.com/photo-1513737567531-bc431c8e5e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="" />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Step 5: Immediate Proficiency</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Gone are the days of lengthy learning curves. With NeuroSkills, you'll achieve immediate proficiency in your chosen skill. Whether it's coding, martial arts, sports, or driving, you'll be amazed at how effortlessly you can perform and innovate.
                    </Typography>
                    <img className='info-img' src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1199&q=80" alt="" />
                </AccordionDetails>
            </Accordion>
            <br />
            <br />
        </div>
    )
}

export default InfoSection