import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
//import {Router, Route} from 'react-router';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

// Import custom components
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

var data = [{
	    id: 1,
	    name: 'Kaja Vijayakarunan(காட்டு பூச்சி)',
	    age: '25',
	    birthplace: 'SouthAfrica',
	    contact: '07756895',
	    media: 'https://scontent.fcmb2-1.fna.fbcdn.net/v/t1.0-9/22228612_10155129357848693_3294256181898280190_n.jpg?oh=8d0246fe0d2e7d2d6f561592edb8fca4&oe=5B408ED7',
	    gender: 'Male'

	}, {
	    id: 2,
			name: 'Sriram Jegatheesan(வெட்டுக்கிளி)',
	    age: '22',
	    birthplace: 'Unknown Place',
	    contact: '077568955',
	    media: 'https://scontent.fcmb2-1.fna.fbcdn.net/v/t1.0-9/11755204_734241516681034_1407374884065208906_n.jpg?oh=64f6e7ed5fee5135fc5f1749ae22d8f9&oe=5B09AA13',
	    gender: 'center'

	}, {
	    id: 3,
		 name: 'Srirajah Rakuvarma(செத்த எலி )',
 		 age: '20',
 		 birthplace: 'jaffna',
 		 contact: '077565658',
 		 media: 'https://scontent.fcmb2-1.fna.fbcdn.net/v/t1.0-9/26231034_1045145105625392_913004810077407160_n.jpg?oh=b79a582bd665f4a0ba8498d4f6cf03d8&oe=5B0D807E',
 		 gender: 'male and sometimes behave like female'
	}, {
	    id: 4,
			name: ' Kenthiran Inpanathan(வாப்பா)',
			age: '20',
			birthplace: 'mars',
			contact: 'not available',
			media: 'https://scontent.fcmb2-1.fna.fbcdn.net/v/t1.0-9/10590516_1457180024546188_132953202279991519_n.jpg?oh=48073f732a82b2bd5445919c8b728dfb&oe=5B3DDD3C',
			gender: 'male'
	}, {
	    id: 5,
			name: 'Mario Antony(காதல் மன்னன்)',
			age: '22',
			birthplace: 'jaffna',
			contact: '0776402356',
			media: 'https://scontent.fcmb2-1.fna.fbcdn.net/v/t1.0-9/164055_117000935037074_4396854_n.jpg?oh=36600d431d0b10a407f012ee7b1d6c27&oe=5B4089AF',
			gender: 'male'
}];
render(
    <BrowserRouter>

      <Main>
            <Route exact path="/" component={Home}/>
            <Route path="/cars" render={(props) => (<Car {...props} data={data}/>)}/>
            <Route path="/cars/:id" render={(props) => (<CarDetail {...props} data={data}/>)}/>
            <Route path="/about" component={About}/>
      </Main>

    </BrowserRouter>,
    document.getElementById('container')
);
