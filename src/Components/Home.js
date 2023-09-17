// rcfe para simplicficar

import React from 'react'
import Foto1 from '../Assets/1.png'
import Foto2 from '../Assets/2.png'
import BasicButtons from '../Components/BasicButtons'
import ActionAreaCard1 from './ActionAreaCard1'
import ActionAreaCard2 from './ActionAreaCard2'
import ActionAreaCard3 from './ActionAreaCard3'
import Fondo1 from '../Assets/fondo2.png'

import ExpandMore from './ExpandMore' 
function Home() {
  return (
    <div>
        
        <section className='padre'>
            <article className='fondoNaranjado'>
                <img className='fondo1' src={Fondo1}></img>
            </article>

            <article className='hijo1'>

                <h1 className='title'>Your Favourite Food Delivered Hoy & Fresh</h1>
                <h2 className='title2'>Healthy swicter chefs do all the prep work, live pedding, chopping & marinating, so you can cook a fresh food</h2>
                <BasicButtons />
            </article>

            <article className='hijo2'>
                <img className='imagen' src={Foto1}></img>
            </article>
        </section>



        <section className='padre'>

            <article className='hijo2'>
                <img className='imagen' src={Foto2}></img>
            </article>

            <article className='hijo1'>
                <h2 className='title'>Food Is An Important Part Of A Balanced Died</h2>
                <h2 className='title2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, placeat ipsam sit beatae amet, quos ex qui veniam architecto dignissimos possimus libero aliquid autem unde repudiandae minus iure! Vel, cum. <br /> <br />
                Ea minima consectetur doloribus molestias recusandae. Animi odit voluptate excepturi consectetur vitae non cum consequuntur eligendi, quibusdam, enim autem.
                </h2>
                <BasicButtons />
            </article>
        </section>


        <section className='sec3'>
            <article className='info'>
                <h4 className='oran'>Work</h4>
                <h2>How It Works</h2>
                <p>Ea minima consectetur doloribus molestias recusandae. Animi odit voluptate excepturi consectetur vitae non cum consequuntur eligendi, quibusdam, enim autem.</p>  
            </article>
                      
        </section>


        <section className='sec4'>
            <ActionAreaCard1 />
            <ActionAreaCard2 />
            <ActionAreaCard3 />
        </section>

        <section className='sec5'>
            <article className='info'>
                <h4 className='oran'>Testimonial</h4>
                <h2>What They Are Saying</h2>
                <p>Ea minima consectetur doloribus molestias recusandae. Animi odit voluptate excepturi consectetur vitae non cum consequuntur eligendi, quibusdam, enim autem.</p>  
            </article>
                      
        </section>

        

        <section className='sec6'>
            < ExpandMore />
        </section>



        <section className='sec7'>
            
            <article>
                <article>
                    <h2>Have Question In Mind? <br/> Let Us Help You</h2>
                </article>

                <article className='pregunta'>
                    <input className='co' type="text"  placeholder="Yourmail@gmail.com" /> 

                    <article className='bb'>
                        <BasicButtons />
                    </article>
                </article>
            </article>

            


        </section>
        
    </div>
  )
}

export default Home
