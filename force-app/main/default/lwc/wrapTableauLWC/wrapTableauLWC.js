import { LightningElement, api } from 'lwc';

export default class WrapTableauLWC extends LightningElement {
    @api vizUrl;
    @api height;
    @api width;
    @api siteId;
    @api token;
    @api uafDefinitionNames;
    @api uafDefinitionNamesStr;

    _useJwt = false;
    
    @api
    get useJwt() {
        return this._useJwt;
    }
    set useJwt(value) {
        this._useJwt = value;
    }

    _debugMode = false;

    @api
    get debugMode() {
        return this._debugMode;
    }
    set debugMode(value) {
        this._debugMode = value;
    }

    _initialized = false;

    get containerStyle() {
        return `width: ${this.width};`;
    }

    renderedCallback() {
        const vizElement = this.template.querySelector('tableau-tableau-viz');
        if (vizElement && !this._initialized) {
            this._initialized = true;
            vizElement.debugMode = this.debugMode;
        }
    }
}
