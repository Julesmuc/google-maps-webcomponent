import { html, render } from 'https://unpkg.com/lit-html?module';
import {apikey} from './apikey.js'
import '@polymer/paper-slider/paper-slider.js';
class View extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const template = html`
        <style>
            good-map {
                display: block;
                height: 800px;
              }
              .toolbox {
                position: absolute;
                top: 24px;
                right: 24px;
                min-width: 250px;
                max-width: 250px;
                z-index: 2;
                overflow-wrap: break-word;
              }
            
              .box {
                background: #FFFFFF;
                z-index: 2;
                border-radius: 4px;
                padding: 16px;
                margin: 0 0 24px;
                box-shadow: 0 0px 16px rgba(0, 0, 0, 0.24);
              }
            
              .open-sans {
                color: #747D82;
                font-size: 12px;
                line-height: 16px;
                font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                font-weight: 400;
                margin-top: 0;
                margin-bottom: 0;
              }
            
              .box section .separator {
                min-height: 1px;
                background-color: rgba(46, 60, 67, 0.08);
                margin: 16px 0;
              }
              paper-slider.red {
                --paper-slider-knob-color: var(--paper-red-500);
                --paper-slider-active-color: var(--paper-red-500);
              }
              paper-slider.green {
                --paper-slider-knob-color: var(--paper-green-500);
                --paper-slider-active-color: var(--paper-green-500);
              }
              paper-slider.blue {
                --paper-slider-knob-color: var(--paper-light-blue-500);
                --paper-slider-active-color: var(--paper-light-blue-500);
              }
        </style>
        <h2>DEMO MAP </h2>
        <good-map api-key="${apikey}"
    latitude="52.520008"
    longitude="13.404954" zoom="10"
    map-options='{"terrain": "satellite"}'></good-map>
    <aside class="toolbox">
    <div class="box">
        <header>
            <h1>POPUP</h1>
        </header>
        <section class="open-sans">
            <div class="separator"></div>
            <div id="popup" class="js-popup">
            <paper-slider
        value="183"
        max="255"
        secondary-progress="200"
        editable>
    </paper-slider>
    <div>R</div>
<paper-slider class="red" value="23" max="255" editable></paper-slider>
<div>G</div>
<paper-slider class="green" value="183" max="255" editable></paper-slider>
<div>B</div>
<paper-slider class="blue" value="211" max="255" editable></paper-slider>
            </div>
        </section>
    </div>
    </aside>
        `;
        render(template, this.root);
    }
}

customElements.define('my-view', View);