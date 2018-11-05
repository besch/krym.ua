import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const imgMe = require('../../assets/img/me.jpg');

export default class About extends React.Component {
    render() {
        return (
            <div>
                {/* <div className="card bg-light mb-3"> */}
                <div className="card border-secondary alert-warning mb-3">
                    <div className="card-header">
                        <FontAwesomeIcon icon="lightbulb" className="text-warning" />{' '}Мудрость
                    </div>
                    <div className="card-body">
                        <p className="card-text">Никто не посмеет упрекнуть тигра в том, что он обратился в бегство, завидев, как малые капканы меняют на крупные. Прояви он медлительность, - было бы хуже: вряд ли бы ему удалось добраться до тех мест, где он царствует безраздельно. Вас тоже никто не посмеет упрекнуть, если вы с самого начала распознаете замыслы тех, кто ставит вам ловушки. Только вы не побежите, а с чувством достоинства уверенно уйдете от опасности, к собственному удовлетворению и величайшему разочарованию тех, кто хотел, чтобы вы пали жертвой его козней.</p>
                    </div>
                </div>

                <hr className="custom-divider"/>

                <div className="row p-3 m-3">
                    {/* <div className="col-md-7">
                        <h3 className="text-muted">Khudoynazarov Dustnazar   1962 г.</h3>
                        <p className="lead">Choihona  Durbek  Uzbekistan. Karshi. 1991g.</p>
                        <p className="lead">Shedri  Dastarhan  Ukraina. Kiev. 2000g</p>
                        <p className="lead">Restoran Sultan     Ukraina. Kiev.</p>
                        <p className="lead">Restoran  Tiflis     Ukraina. Krim. 2006</p>
                        <p className="lead">Restoran Pisseria  Sweden.  Sunsival 2007</p>
                        <p className="lead">Restoran Tamerlan  Sweden. Linkoping 2012   </p>
                        <p className="lead">Uzbekska kuhnia  Lesnom Ukraina  Kiev 2015</p>
                        <p className="lead">Restoran Pur- Pur Amora Ukraina  Kiev.</p>
                        <p className="lead">Restoran Papa Niko      Ukraina  Kiev  2018 </p>
                    </div> */}

                    <ul className="col-md-7 list-group list-group-flush">
                        <h3 className="text-muted mb-5">Khudoynazarov Dustnazar   1962 г.</h3>

                        <li className="list-group-item list-group-item-action">Choihona  Durbek  Uzbekistan. Karshi. 1991g.</li>
                        <li className="list-group-item list-group-item-action">Shedri  Dastarhan  Ukraina. Kiev. 2000g</li>
                        <li className="list-group-item list-group-item-action">Restoran Sultan     Ukraina. Kiev.</li>
                        <li className="list-group-item list-group-item-action">Restoran  Tiflis     Ukraina. Krim. 2006</li>
                        <li className="list-group-item list-group-item-action">Restoran Pisseria  Sweden.  Sunsival 2007</li>
                        <li className="list-group-item list-group-item-action">Restoran Tamerlan  Sweden. Linkoping 2012   </li>
                        <li className="list-group-item list-group-item-action">Uzbekska kuhnia  Lesnom Ukraina  Kiev 2015</li>
                        <li className="list-group-item list-group-item-action">Restoran Pur- Pur Amora Ukraina  Kiev.</li>
                        <li className="list-group-item list-group-item-action">Restoran Papa Niko      Ukraina  Kiev  2018 </li>
                    </ul>

                    <div className="col-md-5">
                        <img src={imgMe} alt="" className="w-100"/>
                    </div>
                </div>
            </div>
        );
    }
}