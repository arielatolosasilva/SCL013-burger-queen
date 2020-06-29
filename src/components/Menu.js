import React, { Component } from 'react';
import Product from './Product';

class Menu extends Component { 
    state = {
        menuDesayuno: {
            products: [{
                nombre: 'Café americano',
                valor: '$2000'
            }, {
                nombre: 'Café con leche',
                valor: '$2500'
            }, {
                nombre: 'Jugo del día',
                valor: '1800'
            }, {
                nombre: 'Té Matcha',
                valor: '$3000'
            }, {
                nombre: 'Gyozas (6 unidades)',
                valor: '$4000'
            }, {
                nombre: 'Tamagoyaki',
                valor: '$2500'
            }, {
                nombre: 'Tostadas',
                valor: '$2000'
            },{
                nombre: 'Yakimanju',
                valor: '$800'
            }
        ]
        },
        menuAlmuerzoCena: {
            PlatoFondo: [{
                nombre: 'Ramen de cerdo',
                valor: '$5990'
            }, {
                nombre: 'Ramen vegetariano',
                valor: '$5990'
            }, {
                nombre: 'Ramen de res',
                valor: '$5990'
            }, {
                nombre: 'Shirashi',
                valor: '$5990'
            }, {
                nombre: 'Yakisoba',
                valor: '$4500'
            }
        ],
        acompañamiento: [{
            nombre: 'Yakimeshi',
            valor: '$3500'
        }, {
            nombre: 'Takoyaki (6 unidades)',
            valor: '$4500'
        }, {
            nombre: 'Gohan',
            valor: '$3500'
        }
        ],
        bebestibles: [{
            nombre: 'Agua 500 ml',
            valor: '$1500'
        }, {
            nombre: 'Bebida gaseosa',
            valor: '$2000'
        }, {
            nombre: 'Sake',
            valor: '$3500'
        }, {
            nombre: 'Té verde',
            valor: '$2000'
        }, {
            nombre: 'Aloe vera',
            valor: '$2500'
        }
        ],
        extras: [{
            nombre: 'Queso crema',
            valor: '$900'
        }, {
            nombre: 'Palta',
            valor: '$900'
        }, {
            nombre: 'Salsa Teriyaki',
            valor: '$400'
        }]
    }
    }
    render(){ 
        let menu = null;
        menu = this.state.menuDesayuno.products.map ((products,i) => {
            console.log(products);
            return(
              
                products
              
            );
        });
        return (
            <div>
                {menu}
            </div>
        );
    }
}

export default Menu;