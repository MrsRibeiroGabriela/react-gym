import './Plans.css';

import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap: "2rem"}}>
            <span className='stroke-text'>COMECE JÁ</span>
            <span>SUA JORNADA</span>
            <span className='stroke-text'>CONOSCO</span>
        </div>

        {/*plans card*/}
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>R$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i) => (
                            <div className="feature">
                                <img src={whiteTick} alt="Ícone de tick branco" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>Veja mais benefícios &#8594;</span>
                    </div>
                    <button className="btn">Increva-se agora</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans