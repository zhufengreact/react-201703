/**
 * Created by dujingya on 17/2/28.
 */
import $ from 'jquery';
import template from './Button.html';
import Mustache from 'mustache';
import './Button.scss';

export  default  class Button{
    constructor(link){
        this.link=link;
    }

    onClick(event){
        event.preventDefault();
        alert(this.link);
    }

    render(node){
        const text='click me';

        $(node).html(Mustache.render(template,{
            text
        }));

        $('.button').click(this.onClick.bind(this));
    }
}