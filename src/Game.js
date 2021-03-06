import React, {Component} from 'react';
import './index.css';

class Game extends Component {

    constructor(props) {
        super(props);
        this.urlClick = "http://wp.ru/wp-json/myapi/v1/game/Mines/";

        this.numberAttempts = 3
        this.boxClass = ["","","","","","","","","","","","","","","","","","","","","","","","","",
        ];
        this.state= {
            boxClass: this.boxClass
        }    
        this.handleClick = this.handleClick.bind(this);
    }
}

handleClick = (e) =>
{
    document.getElementById ("notification_text").innerHTML = "Кнопка нажата" + e.target.innerHTML;

    let notification = document.getElementById("notification");
    let attempt = document.getElementById("attempt");
    let text = document.getElementById("text");

    text.innerHTML = "открывается" + e.target.innerHTML;

    let user_id = 1;
    let number_cell = e.target.dataset.id;
    e.target.setAttribute("disabled", "disabled");
    console.log (e.target.dataset.id);
    let keyId = e.target.dataset.id;
    this.boxClass [keyId] = "win";

    let randomNamber = Math.round ((Math.random() * 100));

    fetch =(this.urlClick, {
       method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
       body: queryString.stringify({user_id:user_id, cell_number:number_cell})
       
   }).then(function(response) {
     return response.json();
 }).then(function (data) {

    if (data.type_prize === 1) 
    {
        text.innerHTML = data.message;
        this.boxClass[number_cell]="win";
    }
    else if (data.type_prize === 2) {
        text.innerHTML = data.MESSAGE;
        this.boxClass[number_cell]="draw";
    }

    else if(data.type_prize === 3){
        text.innerHTML = data.MESSAGE;
        text.innerHTML = "Вы проиграли";
        this.boxClass[number_cell]="fail";
    }

    attempts.innerHTML = "Попытки: " + this.numberAttempts;
    this.setState({boxClass:this.boxClass});
})
 console.log(this.boxClass[keyId]);
 console.log(keyId);
}




render()
{


    return (
        <div>
        <div id="notification"></div>
        <div id="attempt">Попытки - </div>

        <div className="notification">У вас осталось n попыток</div>
        <div className="block">
        <button data-id="0" className={"name"+ thisboxClass[0]} onClick={this.handleClick}>A1</button>
        <button data-id="1" className={"name"+ thisboxClass[1]} onClick={this.handleClick}>A2</button>
        <button data-id="2" className={"name"+ thisboxClass[2]} onClick={this.handleClick}>A3</button>
        <button data-id="3" className={"name"+ thisboxClass[3]} onClick={this.handleClick}>A4</button>
        <button data-id="4" className={"name"+ thisboxClass[4]} onClick={this.handleClick}>A5</button>
        </div>

        <div className="block">
        <button data-id="5" className={"name"+ thisboxClass[5]} onClick={this.handleClick}>B1</button>
        <button data-id="6" className={"name"+ thisboxClass[6]} onClick={this.handleClick}>B2</button>
        <button data-id="7" className={"name"+ thisboxClass[7]} onClick={this.handleClick}>B3</button>
        <button data-id="8" className={"name"+ thisboxClass[8]} onClick={this.handleClick}>B4</button>
        <button data-id="9" className={"name"+ thisboxClass[9]} onClick={this.handleClick}>B5</button>
        </div>

        <div className="block">
        <button data-id="10" className={"name"+ thisboxClass[10]} onClick={this.handleClick}>C1</button>
        <button data-id="11" className={"name"+ thisboxClass[11]} onClick={this.handleClick}>C2</button>
        <button data-id="12" className={"name"+ thisboxClass[12]} onClick={this.handleClick}>C3</button>
        <button data-id="13" className={"name"+ thisboxClass[13]} onClick={this.handleClick}>C4</button>
        <button data-id="14" className={"name"+ thisboxClass[14]} onClick={this.handleClick}>C5</button>
        </div>

        <div className="block">
        <button data-id="15" className={"name"+ thisboxClass[15]} onClick={this.handleClick}>D1</button>
        <button data-id="16" className={"name"+ thisboxClass[16]} onClick={this.handleClick}>D2</button>
        <button data-id="17" className={"name"+ thisboxClass[17]} onClick={this.handleClick}>D3</button>
        <button data-id="18" className={"name"+ thisboxClass[18]} onClick={this.handleClick}>D4</button>
        <button data-id="19" className={"name"+ thisboxClass[19]} onClick={this.handleClick}>D5</button>
        </div>

        <div className="block">
        <button data-id="20" className={"name"+ thisboxClass[20]} onClick={this.handleClick}>F1</button>
        <button data-id="21" className={"name"+ thisboxClass[21]} onClick={this.handleClick}>F2</button>
        <button data-id="22" className={"name"+ thisboxClass[22]} onClick={this.handleClick}>F3</button>
        <button data-id="23" className={"name"+ thisboxClass[23]} onClick={this.handleClick}>F4</button>
        <button data-id="24" className={"name"+ thisboxClass[24]} onClick={this.handleClick}>F5</button>
        </div>
        </div>





        );
}
}

export default Game;