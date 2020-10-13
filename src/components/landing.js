import React, { Component } from 'react';
import Knight from './knight'
import './knight.css'

class Landing extends Component {
    constructor(){
        super()
        this.state = {
            troitality: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTroitalityGaming&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
            fizikz: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFizikzBound&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
            retrosmokey: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRetroSmokeyGaming&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
            secondtear: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTheSecondTear&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
            katskribs: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKatsKribsgames&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
            maddbaal: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMaddBaalGaming&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
            kingdekar: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKingDekar&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
            crunkton: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMRCRUNKTON&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
            ritc: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frightinthechildhoodgaming&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
            ddec: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdarkdeathevilchannel&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
            average: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Favggmr86&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
            whiteogre: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWhiteOgreGaming&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
            ashplayz: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkylo4rey&tabs=timeline&width=0&height=0&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
        }
    }

    render(){
        return (
            <div className = "allknights">
                <Knight 
                className = "knightslanding"
                source = {this.state.troitality}
                />
                <Knight 
                className = "knightslanding"
                source = {this.state.fizikz}
                />
                <Knight 
                className = "knightslanding"
                source = {this.state.retrosmokey}
                />
                <Knight 
                className = "knightslanding"
                source = {this.state.katskribs}
                />
                <Knight 
                className = "knightslanding"
                source = {this.state.maddbaal}
                />
                <Knight 
                className = "knightslanding"
                source = {this.state.kingdekar}
                />
                <Knight 
                className = "knightslanding"
                source = {this.state.crunkton}
                />
                <Knight 
                className = "knightslanding"
                source = {this.state.ritc}
                />
                <Knight 
                className = "knightslanding"
                source = {this.state.ddec}
                />
                <Knight 
                className = "knightslanding"
                source = {this.state.average}
                />
                <Knight 
                className = "knightslanding"
                source = {this.state.whiteogre}
                />
                <Knight 
                className = "knightslanding"
                source = {this.state.ashplayz}
                />
            </div>
        )
    }

}

export default Landing