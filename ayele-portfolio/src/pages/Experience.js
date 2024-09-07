import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Experience.css';


function Research() {
  return (
    <div className='full'>
      <Navbar />
      <div className='research-desc'>
        
        <div className='title-rec'>
        <h1>Expertise in Animal Science <br />and Agriculture</h1>
        </div>
        <div className='para'>
          <p>My skills are rooted in a deep understanding of animal <br />
            science and sustainable agriculture, including animal <br />
            husbandry, livestock research, and animal nutrition. With a <br />
            focus on innovation and sustainability, I offer research and <br />
            consulting services that deliver practical, effective <br />
            solutions.
          </p>
        </div>
      </div>

      <div className='grids'>
        <div className='grid'>
          <p className='duration'>1999-2004: Animal <br />
            Husbandry Specialist
          </p>
          <h2>Ministry of <br />
          Agriculture <br />
          and Rural <br />
          Development
          </h2>
          <p>
          Provided technical <br />
          assistance to farmers <br />
          and livestock<br />
          producers, focusing <br />
          on animal health <br />
          and nutrition
          </p>
        </div>

        <div className='grid'>
          <p className='duration'>2004-2010: Livestock <br />
          Researcher

          </p>
          <h2>Ethiopian <br />
          Institute of <br />
          Agricultural <br />
          Research
          </h2>
          <p>
          Conducted research <br />
          on livestock genetics <br />
          and breeding, with a<br />
          focus on improving <br />
          productivity and <br />
          adaptability
          </p>
        </div>

        <div className='grid'>
          <p className='duration'>2010-2015: <br />
          Sustainable <br />
          Agriculture Advisor

          </p>
          <h2>Ethiopian <br />
          Agricultural <br />
          Transformation <br />
          Agency
          </h2>
          <p>
          Advised government <br />
          agencies and NGOs <br />
          on sustainable<br />
          agriculture policies <br />
          and practices, with a <br />
          focus on smallholder <br />
          farmers
          </p>
        </div>

        <div className='grid'>
          <p className='duration'>2015-present: <br />
          Research Consultant 
      
          </p>
          <h2>International <br />
          Livestock <br />
          Research <br />
          Institute
          </h2>
          <p>
          Provided research <br />
          and consulting <br />
          services to clients<br />
          across the globe, <br />
          helping to develop <br />
          and implement <br />
          sustainable <br />
          agriculture <br />
          strategies and <br />
          practices
          </p>
        </div>
      </div>
      <div className='research-desc-2'>
        <h1>
          Leading Sustainable Agriculture Research and Consulting
        </h1>
        <div className='research-desc-2-para'>
        <p>I am a leading expert in sustainable agriculture research and consulting, with over 30 years of experience in animal science and livestock research. I offer a range of services to help clients improve animal welfare, production efficiency, and environmental impact, all while promoting sustainable agriculture practices. Whether you are a smallholder farmer or a large-scale producer, I can help you meet your goals and achieve success in the industry.
        Animal Husbandry
        Expertise in animal husbandry, including animal health, welfare, and nutrition, with a focus on improving productivity and efficiency while maintaining animal welfare.
        
        </p>
        </div>
        <div className='boxes-1'>
          <div className='box'>
            <h2>Animal Husbandry</h2>
            <p>Expertise in animal husbandry, including animal health, welfare, and nutrition, with a focus on improving productivity and efficiency while maintaining animal welfare.</p>
            <Link to="">Read More</Link>
          </div>
          <div className='box'>
            <h2>
            Livestock Research</h2>
            <p>Deep understanding of livestock research, with expertise in genetics, breeding, and productivity.</p>
            <Link to="">Read More</Link>
          </div>
          
        </div>
        <div className='boxes-2'>
          <div className='box'>
            <h2>Sustainable Agriculture</h2>
            <p>Experience in sustainable agriculture, including smallholder farmer support, crop-livestock integration, and environmental sustainability.</p>
            <Link to="">Read More</Link>
          </div>
          <div className='box'>
            <h2>
            Animal Nutrition</h2>
            <p>Expertise in animal nutrition, including feed formulation, ration balancing, and feed evaluation, with a focus on improving productivity and efficiency.</p>
            <Link to="">Read More</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Research;
